import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../constants/translations';

type Language = 'id' | 'en';

// Definisikan tipe untuk translation object agar TypeScript tidak error
type TranslationType = typeof translations.id;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('id');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};