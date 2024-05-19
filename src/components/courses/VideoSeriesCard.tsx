import { CourseType, LanguageType } from '@/types';
import React from 'react';
import Badge from './Badge';
import Link from 'next/link';

interface VideoSeriesCardProps {
    language: LanguageType;
    course: CourseType;
}

const VideoSeriesCard = ({ language, course }: VideoSeriesCardProps) => {
    const { id, title, subtitle, courseHours, amount, originalAmount, language: Language } = course;
    const seq = `भाग-${course.series.order.seq.toString()}`;
    const courseDuration = `${
        (courseHours * 60) / 60 > 0 && `${Math.floor((courseHours * 60) / 60)} ${language === 'hi' ? 'घंटा' : 'Hours'}`
    } ${Math.round((courseHours * 60) % 60)} ${language === 'hi' ? 'मिनट' : 'Minutes'}`;

    return (
        <div key={course.id} className='rounded-md hover:bg-slate-100 hover:shadow'>
            <div className='px-2 sm:px-4 py-3 rounded-md'>
                <Link href={`https://acharyaprashant.org/${language}/courses/course/${id}`} target='_blank'>
                    <Badge seq={seq} />
                    <div className='mt-5 text-sm text-gray-800'>
                        <h1 className='text-base font-[500] mb-1'>{title}</h1>
                        <h3 className='text-sm'>{subtitle}</h3>
                        <h3 className='my-2 text-[13px]'>{courseDuration}</h3>
                        <div className='flex gap-3 mb-2 text-[13px]'>
                            <h3>{language === 'hi' ? 'सहयोग राशि:' : 'Contribution:'}</h3>
                            <h3>
                                {new Intl.NumberFormat('en-IN', {
                                    style: 'currency',
                                    currency: 'INR',
                                }).format(amount)}
                            </h3>
                            <h3>
                                <del>
                                    {new Intl.NumberFormat('en-IN', {
                                        style: 'currency',
                                        currency: 'INR',
                                    }).format(originalAmount)}
                                </del>
                            </h3>
                        </div>
                        <span className='items-center px-2 py-1 my-4 text-xs text-black bg-blue-200 rounded'>
                            {language === 'hi'
                                ? Language === 'hindi'
                                    ? 'हिन्दी'
                                    : 'अँग्रेजी'
                                : Language === 'hindi'
                                ? 'Hindi'
                                : 'English'}
                        </span>
                        <div className='flex items-center gap-3 mt-3 text-[13px] font-normal text-brand-2 hover:text-brand-1'>
                            <h3>{language === 'hi' ? 'कार्ट मे जोड़ें' : 'ADD TO CART'}</h3>
                            <h3>|</h3>
                            <h3>{language === 'hi' ? 'एनरोल करें' : 'ENROLL'}</h3>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default VideoSeriesCard;
