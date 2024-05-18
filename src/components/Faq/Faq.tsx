'use client';
import { useLanguage } from '@/context/languageContext';
import Link from 'next/link';
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useData } from '@/context/DataContext';
import FaqLoadingSkeleton from './FaqLoadingSkeleton';

const Faq = () => {
    const { language } = useLanguage();
    const { faq } = useData();

    return (
        <section className='flex flex-col gap-5 py-16 md:px-4 md:gap-24 lg:px-16 md:flex-row bg-slate-50'>
            <div className='md:w-[40%]'>
                <h1 className='mb-1.5 font-bold text-slate-600'>
                    {language === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'FAQs'}
                </h1>
                <div className='font-medium text-slate-600'>
                    {language === 'hi' ? (
                        <p>
                            आप जिस उत्तर की तलाश कर रहे हैं वह नहीं मिल रहा है? कृपया हमारी{' '}
                            <Link
                                href={`https://acharyaprashant.org/${language}/technical-support`}
                                target='_blank'
                                className='cursor-pointer text-brand-2'
                            >
                                सपोर्ट
                            </Link>{' '}
                            टीम से संपर्क करें।
                        </p>
                    ) : (
                        <p>
                            Can’t find the answer you’re looking for? Reach out to our{' '}
                            <Link
                                href={`https://acharyaprashant.org/${language}/technical-support`}
                                target='_blank'
                                className='cursor-pointer text-brand-2'
                            >
                                support
                            </Link>{' '}
                            team.
                        </p>
                    )}
                </div>
            </div>
            <div className='w-full'>
                {!faq ? (
                    <FaqLoadingSkeleton />
                ) : (
                    <Accordion type='single' collapsible className='w-full'>
                        {faq?.map((item, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className='text-base font-semibold text-left max-sm:text-sm text-slate-600'>
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p
                                        dangerouslySetInnerHTML={{ __html: item.answer }}
                                        className='pr-4 text-slate-600'
                                    ></p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                )}
            </div>
        </section>
    );
};

export default Faq;
