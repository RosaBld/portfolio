import { createContext, Dispatch, SetStateAction } from 'react';

export interface LanguageContextType {
  language: 'en' | 'fr';
  setLanguage: Dispatch<SetStateAction<'en' | 'fr'>>;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});