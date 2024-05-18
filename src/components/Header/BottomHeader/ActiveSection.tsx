import { Dispatch, SetStateAction } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

interface ActiveSectionProps {
    setActive: Dispatch<SetStateAction<boolean>>;
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
}

const ActiveSection = ({ setActive, searchValue, setSearchValue }: ActiveSectionProps) => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <div className='block text-xl top-0.5 md:hidden right-0' onClick={() => setActive(false)}>
                    <FaArrowLeftLong className='text-base cursor-pointer' />
                </div>
                <input
                    type='text'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className='outline-none caret-brand-2'
                    autoFocus
                />
            </div>
            {searchValue && <IoClose className='text-2xl cursor-pointer' onClick={() => setSearchValue('')} />}
        </div>
    );
};

export default ActiveSection;
