'use client';
import { Axios, getAllData, getFaqData, getTags, handleAxiosError } from '@/api/apiClient';
import { CourseType, FaqType, HeroDetailsType, RelatedContentType, TagResponseType } from '@/types';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';
import { useLanguage } from './languageContext';

type DataContextType = {
    heroDetails: HeroDetailsType | null;
    courses: CourseType[] | null;
    relatesContent: RelatedContentType[] | null;
    faq: FaqType[] | null;
    tags: TagResponseType | null;
};

const DataContext = createContext<DataContextType | null>(null);

const DataContextProvider = ({ children }: { children: ReactNode }) => {
    const { language } = useLanguage();
    const [heroDetails, setHeroDetails] = useState<HeroDetailsType | null>(null);
    const [courses, setCourses] = useState<CourseType[] | null>(null);
    const [relatesContent, setRelatedContent] = useState<RelatedContentType[] | null>(null);
    const [tags, setTags] = useState<TagResponseType | null>(null);
    const [faq, setFaq] = useState<FaqType[] | null>(null);

    useEffect(() => {
        (async () => {
            const allData = await getAllData();
            const tags = await getTags();
            if (allData) {
                setHeroDetails(allData.details);
                setCourses(allData.courses);
                setRelatedContent(allData.relatedContent);
                setTags(tags);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const faqData = await getFaqData(language);
            if (faqData) {
                setFaq(faqData);
            }
        })();
    }, [language]);

    return (
        <DataContext.Provider value={{ heroDetails, courses, relatesContent, faq, tags }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === null) {
        throw new Error('useLanguage must be used within an LanguageContextProvider');
    }

    return context;
};

export default DataContextProvider;
