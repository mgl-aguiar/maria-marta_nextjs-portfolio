export enum Locale {
  EN = 'en',
  PT = 'pt',
  ES = 'es',
}

export const locales = [Locale.EN, Locale.PT, Locale.ES] as const;
export const defaultLocale = Locale.EN;

export interface LanguageObject {
  code: Locale;
  name: string;
}

export const languageOptions: LanguageObject[] = [
  { code: Locale.EN, name: 'English' },
  { code: Locale.PT, name: 'Português' },
  { code: Locale.ES, name: 'Español' },
];
