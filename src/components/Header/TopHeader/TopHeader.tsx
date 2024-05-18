'use client';
import Image from 'next/image';
import { useLanguage } from '@/context/languageContext';
import Link from 'next/link';
import Container from '@/components/Container';
import SelectLanguage from './SelectLanguage';
import { IoCallOutline } from 'react-icons/io5';
import NavBar from './NavBar';
import Drawer from './Drawer/Drawer';
import { useRouter } from 'next/navigation';
import { fontNotoSans, fontSans } from '@/app/layout';

const TopHeader = () => {
    const { language, setLocalLanguage } = useLanguage();
    const router = useRouter().push;

    return (
        <nav>
            <div className='text-white bg-brand-1 text-opacity-90'>
                <Container>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4 text-[13px] font-semibold'>
                            <Image
                                src={'/logo.png'}
                                width={32}
                                height={32}
                                alt='logo'
                                className='cursor-pointer'
                                onClick={() => router('/')}
                            />
                            <NavBar language={language} className='hidden md:flex' />
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='px-3 py-1 text-xs font-semibold border rounded-md md:hidden'>
                                <a href={`https://acharyaprashant.org/${language}/contribute`}>
                                    {language === 'hi' ? 'योगदान करें' : 'Donate'}
                                </a>
                            </div>
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
