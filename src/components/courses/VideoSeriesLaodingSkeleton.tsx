import { Skeleton } from '../ui/skeleton';

const VideoSeriesLaodingSkeleton = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
        <div key={index} className='border rounded-md border-slate-100 hover:bg-slate-100 hover:shadow'>
            <div className='px-4 py-3 rounded-md'>
                <Skeleton className='h-5 w-14' />
                <div className='mt-4'>
                    <Skeleton className='h-5 my-2 w-52' />
                    <Skeleton className='h-3 my-2 w-52' />
                    <Skeleton className='w-40 h-3 my-4' />
                    <Skeleton className='h-3 my-2 w-52' />
                    <Skeleton className='h-6 my-2 w-14' />
                    <Skeleton className='h-3 my-2 w-52' />
                </div>
            </div>
        </div>
    ));
};

export default VideoSeriesLaodingSkeleton;
