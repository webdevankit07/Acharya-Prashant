import { useData } from '@/context/DataContext';
import { useLanguage } from '@/context/languageContext';
import React from 'react';
import VideoSeriesCard from './VideoSeriesCard';
import VideoSeriesLaodingSkeleton from './VideoSeriesLaodingSkeleton';
import VideoSeriesBottomBar from './VideoSeriesBottomBar';

const VideoSeries = () => {
    const { language } = useLanguage();
    const { courses } = useData();

    return (
        <section className='my-10'>
            <div className='ml-1'>
                <h2 className='mb-1 text-lg font-semibold text-slate-800'>
                    {language === 'hi' ? 'वीडियो श्रृंखलाएँ ' : ' Video Series'} ({courses?.length || 0})
                </h2>
                <hr />
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {!courses ? (
                    <VideoSeriesLaodingSkeleton />
                ) : (
                    courses.map((course) => <VideoSeriesCard key={course.id} course={course} language={language} />)
                )}
            </div>
            <VideoSeriesBottomBar courses={courses} />
        </section>
    );
};

export default VideoSeries;
