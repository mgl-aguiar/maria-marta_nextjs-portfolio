export enum Locale {
  EN = 'en',
  PT = 'pt',
  ES = 'es',
}

export interface LanguageObject {
  code: Locale;
  name: string;
}

export const languageOptions: LanguageObject[] = [
  { code: Locale.PT, name: 'Português' },
  { code: Locale.EN, name: 'English' },
  { code: Locale.ES, name: 'Español' },
];
