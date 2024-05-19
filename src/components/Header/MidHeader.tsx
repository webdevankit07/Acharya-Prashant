'use client';
import React from 'react';
import Container from '../Container';
import { useLanguage } from '@/context/languageContext';

const MidHeader = () => {
    const { language } = useLanguage();

    return (
        <div className='py-3 bg-dark-2 text-slate-100'>
            <Container>
                <div className='flex items-center justify-between gap-5 font-medium lg:justify-center'>
                    <div className='flex items-center gap-2 text-sm lg:text-base'>
                        <div className='h-4 border rounded-full min-w-4 bg-brand-2'></div>
                        <span>
                            {language === 'en'
                                ? 'Acharya Prashant is dedicated to building a brighter future for you'
                                : 'आचार्य प्रशांत आपके बेहतर भविष्य की लड़ाई लड़ रहे हैं'}
                        </span>
                    </div>
                    <div className='px-2 py-1.5 text-xs border rounded-md text-nowrap'>
                        <a
                            href={`https://acharyaprashant.org/${language}/contribute/contribute-work?cmId=m00071`}
                            target='_blank'
                        >
                            {language === 'en' ? 'Extend your hand' : 'अपना कर्तव्य निभाएँ'}
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MidHeader;
