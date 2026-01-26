
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
