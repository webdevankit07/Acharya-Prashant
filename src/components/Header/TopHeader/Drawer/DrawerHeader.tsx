import { SheetClose, SheetHeader } from '@/components/ui/sheet';
import { LanguageType } from '@/types';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { FaArrowLeftLong, FaCircleUser } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';

interface DrawerContentType {
    language: LanguageType;
    openLiveSection: boolean;
    setOpenLiveSection: Dispatch<SetStateAction<boolean>>;
}

const DrawerHeader = ({ language, openLiveSection, setOpenLiveSection }: DrawerContentType) => {
    return (
        <>
            <SheetHeader className='max-md:mb-9'>
                <Link
                    href={`https://acharyaprashant.org/${language}/login?page=https://acharyaprashant.org/${language}/video-modules/series/course-series-eeb9d3`}
                    target='_blank'
                    className='flex items-center gap-3 font-semibold text-brand-1'
                >
                    <FaCircleUser className='hidden text-4xl sm:block' />
                    <span className='hidden sm:inline-block'>{language === 'hi' ? 'लॉगिन करें' : 'Login'}</span>
                </Link>
                <div className='flex items-center justify-between w-full'>
                    {openLiveSection ? (
                        <>
                            <div
                                className='block -mx-3 cursor-pointer sm:hidden text-slate-100'
                                onClick={() => setOpenLiveSection(false)}
                            >
                                <FaArrowLeftLong className='text-xl' />
                            </div>
                        </>
                    ) : (
                        <>
                            <Link
                                href={`https://acharyaprashant.org/${language}/login?page=https://acharyaprashant.org/${language}/video-modules/series/course-series-eeb9d3`}
                                target='_blank'
                                className='-mx-3 sm:hidden px-3 py-1.5 border-2 rounded-md text-slate-100'
                            >
                                {language === 'hi' ? 'लॉगिन करें' : 'Login'}
                            </Link>
                        </>
                    )}
                    <div>
                        <SheetClose
                            className='text-2xl font-bold rounded-full cursor-pointer w-7 h-7 sm:-left-9 sm:absolute sm:bg-white sm:hover:text-brand-2 sm:p-1 top-7 sm:text-xl'
                            asChild
                        >
                            <IoMdClose />
                        </SheetClose>
                    </div>
                </div>
            </SheetHeader>
        </>
    );
};

export default DrawerHeader;
