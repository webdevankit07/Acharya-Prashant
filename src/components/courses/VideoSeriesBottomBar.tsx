import { CourseType } from '@/types';
import React from 'react';

const VideoSeriesBottomBar = ({ courses }: { courses: CourseType[] | null }) => {
    const courseLength = courses?.length;

    const show = (number: number) => {
        if (courseLength && courseLength % number === 0) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <div className='pr-5'>
                <hr className='px-5' />
            </div>
            <div className={`pr-5 max-md:hidden ${!show(2) && 'hidden'}`}>
                <hr className='px-5' />
            </div>
            <div
                className={`pr-5 max-lg:hidden ${
                    !show(3) && show(4) ? 'lg:hidden xl:block' : !show(3) && !show(4) ? 'lg:hidden' : 'block'
                }`}
            >
                <hr className='px-5' />
            </div>
            <div className={`pr-5 max-xl:hidden ${!show(3) && !show(4) && 'hidden'}`}>
                <hr className='px-5' />
            </div>
        </div>
    );
};

export default VideoSeriesBottomBar;
