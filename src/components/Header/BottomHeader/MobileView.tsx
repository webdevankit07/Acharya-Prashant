import { LanguageType } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { Dispatch, SetStateAction } from 'react';
import { HiSearch } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { TiArrowSortedDown } from 'react-icons/ti';

interface MobileViewProps {
    language: LanguageType;
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
    setActive: Dispatch<SetStateAction<boolean>>;
}

const MobileView = ({ language, searchValue, setSearchValue, setActive }: MobileViewProps) => {
    const router = useRouter().push;

    const handleSearchClick = () => {
        if (searchValue.length === 0) {
            router(`https://acharyaprashant.org/${language}/video-modules`);
        } else {
            router(`https://acharyaprashant.org/hi/video-modules/search?q=${searchValue}`);
        }
    };

    return (
        <div className='flex justify-between'>
            <div className={`flex items-center justify-center gap-5 py-1`}>
                <Image width={80} height={20} src='/ic_videoseries.png' alt='image' />
                <div className='items-center justify-center md:w-[32rem] lg:w-[35rem] overflow-hidden border rounded-sm shadow hidden md:flex'>
                    <button type='button' className='flex gap-2 px-2 py-2.5 text-xs border-r'>
                        {language === 'en' ? 'All' : 'सभी'}
                        <TiArrowSortedDown />
                    </button>
                    <div className='flex items-center justify-between w-full mr-3'>
                        <input
                            value={searchValue}
                            className='px-3 py-1 outline-none w-72 caret-brand-2 placeholder:text-base'
                            placeholder={language === 'hi' ? 'वीडियो श्रृंखलाएँ खोजें' : ' Search for video series'}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        {searchValue && (
                            <IoClose className='text-2xl cursor-pointer' onClick={() => setSearchValue('')} />
                        )}
                    </div>
                    <button className='px-2 py-2 text-xl border-l bg-brand-4' onClick={handleSearchClick}>
                        <HiSearch />
                    </button>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <HiSearch className='text-xl cursor-pointer md:hidden' onClick={() => setActive(true)} />
                <a
                    href={`https://acharyaprashant.org/${language}/login`}
                    target='_blank'
                    className='px-3 py-1.5 text-xs font-semibold text-white rounded-md bg-brand-2'
                >
                    {language === 'en' ? 'Login' : 'लॉगिन करें'}
                </a>
            </div>
        </div>
    );
};

export default MobileView;
