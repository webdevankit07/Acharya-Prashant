'use client';
import { LanguageType } from '@/types';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

type LanguageContextType = {
    language: LanguageType;
    setLanguage: Dispatch<SetStateAction<LanguageType>>;
    setLocalLanguage: (value: LanguageType) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const LanguageContextProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<LanguageType>('hi');

    const setLocalLanguage = (localLanguage: LanguageType) => {
        localStorage.setItem('language', localLanguage);
        setLanguage(localLanguage);
    };

    useEffect(() => {
        const storeLanguage = localStorage.getItem('language');
        if (storeLanguage) {
            setLanguage(storeLanguage as LanguageType);
        } else {
            setLanguage('en');
        }
    }, []);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, setLocalLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === null) {
        throw new Error('useLanguage must be used within an LanguageContextProvider');
    }

    return context;
};

export default LanguageContextProvider;
