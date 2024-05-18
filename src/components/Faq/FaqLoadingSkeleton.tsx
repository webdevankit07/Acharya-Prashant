import { Skeleton } from '../ui/skeleton';

const FaqLoadingSkeleton = () => {
    return (
        <div className='w-full'>
            <div className='w-full space-y-5'>
                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                    <Skeleton className='w-full h-12' key={item} />
                ))}
            </div>
        </div>
    );
};

export default FaqLoadingSkeleton;
