'use client';
import Image from 'next/image';
import { useLanguage } from '@/context/languageContext';
import Link from 'next/link';
import Container from '@/components/Container';
import SelectLanguage from './SelectLanguage';
import { IoCallOutline } from 'react-icons/io5';
import NavBar from './NavBar';
import Drawer from './Drawer/Drawer';

const TopHeader = () => {
    const { language, setLocalLanguage } = useLanguage();

    return (
        <nav>
            <div className='text-white bg-brand-1 text-opacity-90'>
                <Container>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-5 text-[13px] font-semibold'>
                            <div>
                                <Link href={'/'}>
                                    <Image src={'/logo.png'} width={32} height={32} alt='logo' />
                                </Link>
                            </div>
                            <NavBar language={language} className='hidden md:flex' />
                        </div>
                        <div className='flex items-center gap-3'>
                            <SelectLanguage language={language} setLocalLanguage={setLocalLanguage} />
                            <Link
                                href={`https://acharyaprashant.org/${language}/enquiry`}
                                target='_blank'
                                className='hidden py-3 cursor-pointer lg:block'
                            >
                                <IoCallOutline className='text-2xl' />
                            </Link>
                            <Drawer language={language} />
                        </div>
                    </div>
                </Container>
            </div>
        </nav>
    );
};

export default TopHeader;
