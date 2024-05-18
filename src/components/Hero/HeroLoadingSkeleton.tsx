import { Skeleton } from '../ui/skeleton';
import HeroImage from './HeroImage';

const HeroLoadingSkeleton = () => {
    return (
        <section>
            <Skeleton className='w-40 h-5 my-5' />
            <div>
                <Skeleton className='w-40 h-5' />
                <div className='flex flex-col gap-4 my-4 md:flex-row'>
                    <div className='w-[100%] md:w-[40%] flex flex-col'>
                        <HeroImage imageBasePath={undefined} />
                        <div className='hidden mt-3 md:block'>
                            <Skeleton className='w-40 h-3 mb-3' />
                            <div className='flex items-center gap-5 ml-1 text-2xl'>
                                <Skeleton className='w-10 h-10 rounded-full' />
                                <Skeleton className='w-10 h-10 rounded-full' />
                                <Skeleton className='w-10 h-10 rounded-full' />
                                <Skeleton className='w-10 h-10 rounded-full' />
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 px-2 pt-1'>
                        <Skeleton className='w-40 h-5 mb-2 md:w-72' />
                        <div className='text-[15px] md:hidden text-justify text-slate-600'>
                            <>
                                <Skeleton className='w-full h-3 my-1' />
                                <Skeleton className='w-full h-3 my-1' />
                                <Skeleton className='w-full h-3 my-1' />
                            </>
                        </div>
                        <div>
                            <Skeleton className='w-full h-3 my-1' />
                            <Skeleton className='w-full h-3 my-1' />
                            <Skeleton className='w-full h-3 my-1' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroLoadingSkeleton;
