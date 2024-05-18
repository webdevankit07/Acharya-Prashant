import { TbBadgeFilled } from 'react-icons/tb';

const Badge = ({ seq }: { seq: string }) => {
    return (
        <div className='my-2'>
            <div className='h-[22px] text-xl rounded-l w-7 bg-slate-400'>
                <TbBadgeFilled className='relative ml-2 text-[44px] rotate-90 text-slate-400 bottom-[11px]' />
                <span className='relative text-xs font-semibold text-white bottom-12 left-1.5'>{seq}</span>
            </div>
        </div>
    );
};

export default Badge;
