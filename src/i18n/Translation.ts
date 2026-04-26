import { useSyncExternalStore } from 'react';
import { deTranslations } from './translations/de';
import { enTranslations, type TranslationKey } from './translations/en';
import { esTranslations } from './translations/es';
import { frTranslations } from './translations/fr';

const LOCALE_STORAGE_KEY = 'forge.locale';

const dictionaries = {
  en: enTranslations,
  es: esTranslations,
  fr: frTranslations,
  de: deTranslations,
} as const;

export type Locale = keyof typeof dictionaries;

type TranslationVariables = Record<string, string | number | boolean | null | undefined>;

const availableLocales = Object.keys(dictionaries) as Locale[];

const normalizeLocale = (value: string | null | undefined): Locale => {
  if (!value) {
    return 'en';
  }

  const normalized = value.trim().toLowerCase();
  const directMatch = availableLocales.find((locale) => locale === normalized);
  if (directMatch) {
    return directMatch;
  }

  const prefixMatch = availableLocales.find((locale) => normalized.startsWith(`${locale}-`));
  return prefixMatch || 'en';
};

const interpolate = (template: string, variables?: TranslationVariables): string => {
  if (!variables) {
    return template;
  }

  return template.replace(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g, (_, key: string) => {
    const value = variables[key];
    return value === undefined || value === null ? '' : String(value);
  });
};

class TranslationService {
  private locale: Locale;

  private readonly listeners = new Set<() => void>();

  constructor() {
    this.locale = this.resolveInitialLocale();
  }

  private resolveInitialLocale(): Locale {
    if (typeof window === 'undefined') {
      return 'en';
    }

    const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (savedLocale) {
      return normalizeLocale(savedLocale);
    }

    if (Array.isArray(window.navigator.languages) && window.navigator.languages.length > 0) {
      return normalizeLocale(window.navigator.languages[0]);
    }

    return normalizeLocale(window.navigator.language);
  }

  subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  getLocale = (): Locale => {
    return this.locale;
  };

  setLocale = (nextLocale: string): void => {
    const resolvedLocale = normalizeLocale(nextLocale);
    if (resolvedLocale === this.locale) {
      return;
    }

    this.locale = resolvedLocale;
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, resolvedLocale);
    }

    this.listeners.forEach((listener) => listener());
  };

  getAvailableLocales = (): Locale[] => {
    return [...availableLocales];
  };

  t = (key: TranslationKey, variables?: TranslationVariables): string => {
    const dictionary = dictionaries[this.locale];
    return interpolate(dictionary[key] || enTranslations[key], variables);
  };
}

export const Translation = new TranslationService();

export const useTranslation = () => {
  const locale = useSyncExternalStore(Translation.subscribe, Translation.getLocale, Translation.getLocale);

  return {
    locale,
    setLocale: Translation.setLocale,
    availableLocales: Translation.getAvailableLocales(),
    t: Translation.t,
  };
};