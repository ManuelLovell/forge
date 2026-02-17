
export type AttributeMap = Record<string, number>;

// ============================================================================
// TYPES AND INTERFACES
// ============================================================================

enum TokenType {
  NUMBER = 'NUMBER',
  DICE = 'DICE',
  BID_REF = 'BID_REF',
  OPERATOR = 'OPERATOR',
  FUNCTION = 'FUNCTION',
  LPAREN = 'LPAREN',
  RPAREN = 'RPAREN',
  COMMA = 'COMMA',
  EOF = 'EOF'
}

interface Token {
  type: TokenType;
  value: string;
  position: number;
}

interface ValidationResult {
  valid: boolean;
  error?: string;
  position?: number;
}

interface Roll20ConversionOptions {
  attributeReferenceMode?: 'selected' | 'character' | 'plain';
  characterName?: string;
  wrapInlineRoll?: boolean;
  bidAttributeMap?: Record<string, string>;
  resolveBidAttribute?: (bid: string) => string | undefined;
  onMissingBid?: 'error' | 'useBidAsAttribute';
}

interface Roll20ConversionResult {
  valid: boolean;
  rollable?: string;
  error?: string;
}

interface ResolvedNotationOptions {
  bidValueMap?: Record<string, number>;
  resolveBidValue?: (bid: string) => number | undefined;
  onMissingBid?: 'error' | 'useZero';
}

interface ResolvedNotationResult {
  valid: boolean;
  notation?: string;
  error?: string;
}

// ============================================================================
// CONSTANTS
// ============================================================================

// Allowed mathematical functions
const ALLOWED_FUNCTIONS = new Set([
  'floor', 'ceil', 'round', 'abs', 'max', 'min'
]);

// Allowed operators
const OPERATORS = new Set(['+', '-', '*', '/']);

// Valid die sizes
const VALID_DIE_SIZES = new Set([4, 6, 8, 10, 12, 20, 100]);

// Dice modifiers
const DICE_MODIFIERS = new Set(['kh', 'kl', 'dh', 'dl', '!']);

// ============================================================================
// TOKENIZER
// ============================================================================

/**
 * Tokenize a formula string into discrete tokens
 * Guards against malicious input by strictly validating each character
 */
function tokenize(formula: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  
  // Security: Limit formula length to prevent DoS
  if (formula.length > 500) {
    throw new Error('Formula exceeds maximum length of 500 characters');
  }

  while (i < formula.length) {
    const char = formula[i];

    // Skip whitespace
    if (/\s/.test(char)) {
      i++;
      continue;
    }

    // Numbers (including decimals)
    if (/\d/.test(char)) {
      let num = '';
      const startPos = i;
      while (i < formula.length && /[\d.]/.test(formula[i])) {
        num += formula[i];
        i++;
      }
      
      // Validate number format
      if (!/^\d+(\.\d+)?$/.test(num)) {
        throw new Error(`Invalid number format at position ${startPos}: ${num}`);
      }
      
      tokens.push({ type: TokenType.NUMBER, value: num, position: startPos });
      continue;
    }

    // Dice notation (e.g., 1d20, 4d6kh3)
    if (/\d/.test(char) || (char === 'd' && tokens.length > 0 && tokens[tokens.length - 1].type === TokenType.NUMBER)) {
      const startPos = i;
      
      // If we just saw a number followed by 'd', rewind and parse as dice
      if (char === 'd' && tokens.length > 0 && tokens[tokens.length - 1].type === TokenType.NUMBER) {
        const lastToken = tokens.pop()!;
        i = lastToken.position;
      }
      
      const diceMatch = formula.slice(i).match(/^(\d+)d(\d+)([kd][hl]\d+|!)?/i);
      if (diceMatch) {
        const [fullMatch, count, sides, modifier] = diceMatch;
        
        // Validate dice values
        const diceCount = parseInt(count, 10);
        const dieSides = parseInt(sides, 10);
        
        if (diceCount < 1 || diceCount > 100) {
          throw new Error(`Invalid dice count at position ${startPos}: must be 1-100`);
        }
        
        if (!VALID_DIE_SIZES.has(dieSides)) {
          throw new Error(`Invalid die size at position ${startPos}: must be one of ${Array.from(VALID_DIE_SIZES).join(', ')}`);
        }
        
        // Validate modifier if present
        if (modifier) {
          const modType = modifier.substring(0, 2).toLowerCase();
          if (!DICE_MODIFIERS.has(modType) && modifier !== '!') {
            throw new Error(`Invalid dice modifier at position ${startPos}: ${modifier}`);
          }
          
          if (modType !== '!') {
            const keepDropCount = parseInt(modifier.substring(2), 10);
            if (keepDropCount < 1 || keepDropCount >= diceCount) {
              throw new Error(`Invalid keep/drop count at position ${startPos}: must be between 1 and ${diceCount - 1}`);
            }
          }
        }
        
        tokens.push({ type: TokenType.DICE, value: fullMatch, position: startPos });
        i += fullMatch.length;
        continue;
      }
    }

    // BID references (@BID format)
    if (char === '@') {
      const startPos = i;
      i++; // Skip @
      let bid = '';
      
      while (i < formula.length && /[A-Z0-9]/.test(formula[i])) {
        bid += formula[i];
        i++;
      }
      
      if (bid.length === 0) {
        throw new Error(`Invalid BID reference at position ${startPos}: missing identifier after @`);
      }
      
      if (bid.length > 4) {
        throw new Error(`Invalid BID reference at position ${startPos}: BID too long (max 4 characters)`);
      }
      
      tokens.push({ type: TokenType.BID_REF, value: bid, position: startPos });
      continue;
    }

    // Functions (floor, ceil, max, etc.)
    if (/[a-z]/i.test(char)) {
      const startPos = i;
      let func = '';
      
      while (i < formula.length && /[a-z]/i.test(formula[i])) {
        func += formula[i].toLowerCase();
        i++;
      }
      
      if (!ALLOWED_FUNCTIONS.has(func)) {
        throw new Error(`Unknown function at position ${startPos}: ${func}. Allowed: ${Array.from(ALLOWED_FUNCTIONS).join(', ')}`);
      }
      
      tokens.push({ type: TokenType.FUNCTION, value: func, position: startPos });
      continue;
    }

    // Operators
    if (OPERATORS.has(char)) {
      tokens.push({ type: TokenType.OPERATOR, value: char, position: i });
      i++;
      continue;
    }

    // Parentheses
    if (char === '(') {
      tokens.push({ type: TokenType.LPAREN, value: char, position: i });
      i++;
      continue;
    }

    if (char === ')') {
      tokens.push({ type: TokenType.RPAREN, value: char, position: i });
      i++;
      continue;
    }

    // Comma (for function arguments)
    if (char === ',') {
      tokens.push({ type: TokenType.COMMA, value: char, position: i });
      i++;
      continue;
    }

    // If we get here, it's an invalid character
    throw new Error(`Invalid character at position ${i}: '${char}'`);
  }

  tokens.push({ type: TokenType.EOF, value: '', position: formula.length });
  return tokens;
}

// ============================================================================
// PARSER / VALIDATOR
// ============================================================================

/**
 * Parse and validate formula structure
 * Uses recursive descent parsing to ensure proper syntax
 */
class FormulaParser {
  private tokens: Token[];
  private current: number;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
    this.current = 0;
  }

  private peek(): Token {
    return this.tokens[this.current];
  }

  private advance(): Token {
    return this.tokens[this.current++];
  }

  private expect(type: TokenType, message: string): Token {
    const token = this.peek();
    if (token.type !== type) {
      throw new Error(`${message} at position ${token.position}`);
    }
    return this.advance();
  }

  // Parse full expression
  parse(): void {
    this.parseExpression();
    
    if (this.peek().type !== TokenType.EOF) {
      throw new Error(`Unexpected token at position ${this.peek().position}: ${this.peek().value}`);
    }
  }

  // Expression: Term ((+ | -) Term)*
  private parseExpression(): void {
    this.parseTerm();

    while (this.peek().type === TokenType.OPERATOR && 
           (this.peek().value === '+' || this.peek().value === '-')) {
      this.advance();
      this.parseTerm();
    }
  }

  // Term: Factor ((* | /) Factor)*
  private parseTerm(): void {
    this.parseFactor();

    while (this.peek().type === TokenType.OPERATOR && 
           (this.peek().value === '*' || this.peek().value === '/')) {
      this.advance();
      this.parseFactor();
    }
  }

  // Factor: Number | Dice | BidRef | Function | (Expression)
  private parseFactor(): void {
    const token = this.peek();

    if (token.type === TokenType.NUMBER) {
      this.advance();
      return;
    }

    if (token.type === TokenType.DICE) {
      this.advance();
      return;
    }

    if (token.type === TokenType.BID_REF) {
      this.advance();
      return;
    }

    if (token.type === TokenType.FUNCTION) {
      this.parseFunction();
      return;
    }

    if (token.type === TokenType.LPAREN) {
      this.advance();
      this.parseExpression();
      this.expect(TokenType.RPAREN, 'Expected closing parenthesis');
      return;
    }

    throw new Error(`Unexpected token at position ${token.position}: ${token.value}`);
  }

  // Function: FUNCTION(Expression [, Expression]*)
  private parseFunction(): void {
    this.advance();
    
    this.expect(TokenType.LPAREN, 'Expected opening parenthesis after function');
    
    // Parse first argument
    this.parseExpression();
    
    // Parse additional arguments
    while (this.peek().type === TokenType.COMMA) {
      this.advance();
      this.parseExpression();
    }
    
    this.expect(TokenType.RPAREN, 'Expected closing parenthesis after function arguments');
  }
}

type EvaluatedValue = {
  kind: 'number' | 'expr';
  value: number | string;
  precedence: number;
};

const formatNumber = (value: number): string => {
  if (Number.isInteger(value)) {
    return String(value);
  }

  return value.toString();
};

const asExpr = (value: EvaluatedValue): string => {
  return value.kind === 'number' ? formatNumber(value.value as number) : String(value.value);
};

const wrapIfNeeded = (
  value: EvaluatedValue,
  operator: '+' | '-' | '*' | '/',
  side: 'left' | 'right'
): string => {
  const opPrecedence = operator === '+' || operator === '-' ? 1 : 2;
  const shouldWrap =
    value.precedence < opPrecedence ||
    (side === 'right' && (operator === '-' || operator === '/') && value.precedence === opPrecedence);

  const text = asExpr(value);
  return shouldWrap ? `(${text})` : text;
};

class FormulaEvaluator {
  private tokens: Token[];
  private current: number;
  private readonly options: ResolvedNotationOptions;

  constructor(tokens: Token[], options: ResolvedNotationOptions) {
    this.tokens = tokens;
    this.current = 0;
    this.options = options;
  }

  private peek(): Token {
    return this.tokens[this.current];
  }

  private advance(): Token {
    return this.tokens[this.current++];
  }

  private expect(type: TokenType, message: string): Token {
    const token = this.peek();
    if (token.type !== type) {
      throw new Error(`${message} at position ${token.position}`);
    }
    return this.advance();
  }

  parse(): EvaluatedValue {
    const value = this.parseExpression();
    if (this.peek().type !== TokenType.EOF) {
      throw new Error(`Unexpected token at position ${this.peek().position}: ${this.peek().value}`);
    }
    return value;
  }

  private parseExpression(): EvaluatedValue {
    let left = this.parseTerm();

    while (this.peek().type === TokenType.OPERATOR && (this.peek().value === '+' || this.peek().value === '-')) {
      const operator = this.advance().value as '+' | '-';
      const right = this.parseTerm();
      left = this.combine(left, operator, right);
    }

    return left;
  }

  private parseTerm(): EvaluatedValue {
    let left = this.parseFactor();

    while (this.peek().type === TokenType.OPERATOR && (this.peek().value === '*' || this.peek().value === '/')) {
      const operator = this.advance().value as '*' | '/';
      const right = this.parseFactor();
      left = this.combine(left, operator, right);
    }

    return left;
  }

  private parseFactor(): EvaluatedValue {
    const token = this.peek();

    if (token.type === TokenType.NUMBER) {
      this.advance();
      return { kind: 'number', value: Number(token.value), precedence: 3 };
    }

    if (token.type === TokenType.DICE) {
      this.advance();
      return { kind: 'expr', value: token.value, precedence: 3 };
    }

    if (token.type === TokenType.BID_REF) {
      this.advance();
      const bid = token.value;
      const resolvedValue = this.options.resolveBidValue?.(bid) ?? this.options.bidValueMap?.[bid];
      const onMissingBid = this.options.onMissingBid ?? 'error';

      if (resolvedValue === undefined || Number.isNaN(resolvedValue)) {
        if (onMissingBid === 'useZero') {
          return { kind: 'number', value: 0, precedence: 3 };
        }
        throw new Error(`No numeric value found for BID @${bid}`);
      }

      return { kind: 'number', value: resolvedValue, precedence: 3 };
    }

    if (token.type === TokenType.FUNCTION) {
      return this.parseFunction();
    }

    if (token.type === TokenType.LPAREN) {
      this.advance();
      const inner = this.parseExpression();
      this.expect(TokenType.RPAREN, 'Expected closing parenthesis');

      if (inner.kind === 'number') {
        return inner;
      }

      return { kind: 'expr', value: `(${asExpr(inner)})`, precedence: 3 };
    }

    throw new Error(`Unexpected token at position ${token.position}: ${token.value}`);
  }

  private parseFunction(): EvaluatedValue {
    const functionToken = this.advance();
    const functionName = functionToken.value;
    this.expect(TokenType.LPAREN, 'Expected opening parenthesis after function');

    const args: number[] = [];
    const firstArg = this.parseExpression();
    if (firstArg.kind !== 'number') {
      throw new Error(`Function ${functionName} requires numeric arguments`);
    }
    args.push(firstArg.value as number);

    while (this.peek().type === TokenType.COMMA) {
      this.advance();
      const nextArg = this.parseExpression();
      if (nextArg.kind !== 'number') {
        throw new Error(`Function ${functionName} requires numeric arguments`);
      }
      args.push(nextArg.value as number);
    }

    this.expect(TokenType.RPAREN, 'Expected closing parenthesis after function arguments');

    const evaluated = this.evaluateFunction(functionName, args);
    return { kind: 'number', value: evaluated, precedence: 3 };
  }

  private evaluateFunction(name: string, args: number[]): number {
    switch (name) {
      case 'floor':
        if (args.length !== 1) throw new Error('floor expects exactly 1 argument');
        return Math.floor(args[0]);
      case 'ceil':
        if (args.length !== 1) throw new Error('ceil expects exactly 1 argument');
        return Math.ceil(args[0]);
      case 'round':
        if (args.length !== 1) throw new Error('round expects exactly 1 argument');
        return Math.round(args[0]);
      case 'abs':
        if (args.length !== 1) throw new Error('abs expects exactly 1 argument');
        return Math.abs(args[0]);
      case 'max':
        if (args.length < 1) throw new Error('max expects at least 1 argument');
        return Math.max(...args);
      case 'min':
        if (args.length < 1) throw new Error('min expects at least 1 argument');
        return Math.min(...args);
      default:
        throw new Error(`Unsupported function: ${name}`);
    }
  }

  private combine(left: EvaluatedValue, operator: '+' | '-' | '*' | '/', right: EvaluatedValue): EvaluatedValue {
    if (left.kind === 'number' && right.kind === 'number') {
      const leftValue = left.value as number;
      const rightValue = right.value as number;

      if (operator === '+') {
        return { kind: 'number', value: leftValue + rightValue, precedence: 3 };
      }
      if (operator === '-') {
        return { kind: 'number', value: leftValue - rightValue, precedence: 3 };
      }
      if (operator === '*') {
        return { kind: 'number', value: leftValue * rightValue, precedence: 3 };
      }

      return { kind: 'number', value: leftValue / rightValue, precedence: 3 };
    }

    const leftExpr = wrapIfNeeded(left, operator, 'left');
    const rightExpr = wrapIfNeeded(right, operator, 'right');
    const precedence = operator === '+' || operator === '-' ? 1 : 2;

    return {
      kind: 'expr',
      value: `${leftExpr}${operator}${rightExpr}`,
      precedence,
    };
  }
}

// ============================================================================
// PUBLIC API
// ============================================================================

/**
 * Validate a dice formula string before saving
 * Returns detailed validation result with error messages
 */
export function validateDiceFormula(formula: string): ValidationResult {
  if (!formula || formula.trim().length === 0) {
    return { valid: false, error: 'Formula cannot be empty' };
  }

  try {
    // Tokenize the formula
    const tokens = tokenize(formula);
    
    // Parse and validate structure
    const parser = new FormulaParser(tokens);
    parser.parse();
    
    return { valid: true };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return { valid: false, error: errorMessage };
  }
}

/**
 * Validate a dice formula (boolean result)
 */
export function validateFormula(formula: string): boolean {
  const result = validateDiceFormula(formula);
  return result.valid;
}

/**
 * Convert a validated formula string into Roll20-ready notation.
 *
 * Attribute reference conversion:
 * - @STR  -> @{selected|STR}   (default)
 * - @STR  -> @{Character|STR}  (when attributeReferenceMode='character')
 * - @STR  -> @{STR}            (when attributeReferenceMode='plain')
 */
export function toRoll20Formula(
  formula: string,
  options: Roll20ConversionOptions = {}
): Roll20ConversionResult {
  const validation = validateDiceFormula(formula);
  if (!validation.valid) {
    return { valid: false, error: validation.error };
  }

  const attributeReferenceMode = options.attributeReferenceMode ?? 'selected';
  const wrapInlineRoll = options.wrapInlineRoll ?? true;
  const onMissingBid = options.onMissingBid ?? 'error';

  if (attributeReferenceMode === 'character' && !options.characterName) {
    return {
      valid: false,
      error: 'characterName is required when attributeReferenceMode is character'
    };
  }

  const tokens = tokenize(formula).filter((token) => token.type !== TokenType.EOF);
  const convertedParts: string[] = [];

  for (const token of tokens) {
    if (token.type !== TokenType.BID_REF) {
      convertedParts.push(token.value);
      continue;
    }

    const mappedAttribute =
      options.resolveBidAttribute?.(token.value) ?? options.bidAttributeMap?.[token.value];

    if (!mappedAttribute && onMissingBid === 'error') {
      return {
        valid: false,
        error: `No attribute mapping found for BID @${token.value}`
      };
    }

    const attributeName = mappedAttribute ?? token.value;

    if (attributeReferenceMode === 'plain') {
      convertedParts.push(`@{${attributeName}}`);
      continue;
    }

    if (attributeReferenceMode === 'character') {
      convertedParts.push(`@{${options.characterName}|${attributeName}}`);
      continue;
    }

    convertedParts.push(`@{selected|${attributeName}}`);
  }

  const converted = convertedParts.join('');

  return {
    valid: true,
    rollable: wrapInlineRoll ? `[[${converted}]]` : converted
  };
}

/**
 * Resolve BID references to numeric values and evaluate arithmetic/functions,
 * while preserving dice terms (e.g. "1d20 + floor((@Z017-10)/2)" -> "1d20+3").
 */
export function toResolvedDiceNotation(
  formula: string,
  options: ResolvedNotationOptions = {}
): ResolvedNotationResult {
  const validation = validateDiceFormula(formula);
  if (!validation.valid) {
    return { valid: false, error: validation.error };
  }

  try {
    const tokens = tokenize(formula);
    const evaluator = new FormulaEvaluator(tokens, options);
    const evaluated = evaluator.parse();

    return {
      valid: true,
      notation: asExpr(evaluated),
    };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return { valid: false, error: errorMessage };
  }
}

// ============================================================================
// INTEGRATION NOTES (func -> output string)
// ============================================================================
// This file validates formula syntax and supports two output modes:
// 1) Roll20 reference notation via `toRoll20Formula`.
// 2) Resolved dice notation via `toResolvedDiceNotation` (evaluates numeric math).
//
// Expected `func` format (grammar summary):
// - Literals: `12`, `3.5`
// - Dice: `1d20`, `4d6kh3`, `4d6kl3`, `4d6dh1`, `4d6dl1`, `1d6!`
// - Attribute references: `@STR`, `@DEX` (1-4 uppercase letters/numbers)
// - Operators: `+`, `-`, `*`, `/`
// - Parentheses: `( ... )`
// - Functions: `floor(...)`, `ceil(...)`, `round(...)`, `abs(...)`, `max(...)`, `min(...)`
// - Function args are comma-separated expressions: `max(1d20, @DEX + 2)`
//
// Output shape from this file:
// - validateDiceFormula(func) -> { valid: true }
// - validateDiceFormula(func) -> { valid: false, error: string }
// - validateFormula(func) -> boolean
// - toRoll20Formula(func, options) -> { valid: true, rollable: string }
// - toRoll20Formula(func, options) -> { valid: false, error: string }
// - toResolvedDiceNotation(func, options) -> { valid: true, notation: string }
// - toResolvedDiceNotation(func, options) -> { valid: false, error: string }
//
// How to use this in another app (to get Roll20 notation):
// 1) Receive `func` string from storage/content.
// 2) Build a user-specific BID -> Roll20 attribute mapping.
// 3) Call toRoll20Formula(func, { bidAttributeMap, ...options }).
// 3) If valid, send `rollable` to Roll20.
// 4) If invalid, reject it and show `error`.
//
// Example conversion for Roll20 (dynamic BID mapping):
// const func = "1d20 + floor((@Z021 - 10) / 2)";
// const bidAttributeMap = { Z021: "Strength" };
// const result = toRoll20Formula(func, {
//   attributeReferenceMode: 'selected',
//   bidAttributeMap
// });
// if (!result.valid) throw new Error(result.error);
// result.rollable === "[[1d20+floor((@{selected|Strength}-10)/2)]]"
//
// How to use this in another app (to get resolved dice notation):
// 1) Receive `func` string from storage/content.
// 2) Build a BID -> numeric value map (e.g. { Z017: 16 }).
// 3) Call toResolvedDiceNotation(func, { bidValueMap }).
// 4) If valid, use `notation` (e.g. "1d20+3").
// 5) If invalid, reject it and show `error`.
//
// Modes for attribute references:
// - selected (default): @STR -> @{selected|STR}
// - character:          @STR -> @{CharacterName|STR}
// - plain:              @STR -> @{STR}
//
// Missing BID behavior:
// - onMissingBid: 'error' (default) -> conversion fails if BID is unmapped
// - onMissingBid: 'useBidAsAttribute' -> fallback to using BID name directly
