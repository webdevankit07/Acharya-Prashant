import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { FiMenu } from 'react-icons/fi';
import DrawerHeader from './DrawerHeader';
import { Separator } from '@radix-ui/react-separator';
import DrawerContent from './DrawerContent';
import { LanguageType } from '@/types';
import MobileDrawerContent from './MobileDrawerContent';
import { useState } from 'react';

const Drawer = ({ language }: { language: LanguageType }) => {
    const [openLiveSection, setOpenLiveSection] = useState(false);

    return (
        <Sheet>
            <SheetTrigger>
                <div className='flex items-center py-3 cursor-pointer'>
                    <FiMenu className='text-2xl' />
                    <span className='font-semibold text-center mt-1 w-[50px] hidden lg:block'>
                        {language === 'hi' ? 'मेन्यू' : 'Menu'}
                    </span>
                </div>
            </SheetTrigger>
            <SheetContent
                className={`text-sm pb-20 text-slate-100 sm:bg-inherit z-[99999999] bg-brand-1 sm:text-slate-700 w-full md:w-[1000px]`}
            >
                <DrawerHeader
                    language={language}
                    openLiveSection={openLiveSection}
                    setOpenLiveSection={setOpenLiveSection}
                />
                <Separator className='mt-4 mb-2' />
                <DrawerContent language={language} />
                <MobileDrawerContent
                    language={language}
                    openLiveSection={openLiveSection}
                    setOpenLiveSection={setOpenLiveSection}
                />
            </SheetContent>
        </Sheet>
    );
};

export default Drawer;
