'use client';
import Container from '@/components/Container';
import { useLanguage } from '@/context/languageContext';
import React, { useEffect, useState } from 'react';
import MobileView from './MobileView';
import ActiveSection from './ActiveSection';
import { useRouter } from 'next/navigation';
import { useData } from '@/context/DataContext';

const BottomHeader = () => {
    const { bottomHeaderSticky, setBottomHeaderSticky } = useData();
    const [active, setActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const { language } = useLanguage();
    const router = useRouter().push;

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > (window.innerWidth < 768 ? 101 : 104)) {
                setBottomHeaderSticky(true);
            } else {
                setBottomHeaderSticky(false);
            }
        });
    }, [setBottomHeaderSticky]);

    const handleSearchClick = () => {
        if (searchValue.length === 0) {
            router(`https://acharyaprashant.org/${language}/video-modules`);
        } else {
            router(`https://acharyaprashant.org/${language}/video-modules/search?q=${searchValue}`);
        }
    };

    useEffect(() => {
        window.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                if (searchValue.length === 0) {
                    router(`https://acharyaprashant.org/${language}/video-modules`);
                } else {
                    router(`https://acharyaprashant.org/${language}/video-modules/search?q=${searchValue}`);
                }
            }
        });
    }, [language, searchValue, router]);

    return (
        <div
            className={`w-full py-2 md:py-0.5 z-[9999999] bg-white text-slate-600 shadow transition-all ease-in-out duration-300 ${
                bottomHeaderSticky && 'fixed top-0 left-0'
            }`}
        >
            <Container>
                {active ? (
                    <ActiveSection setActive={setActive} searchValue={searchValue} setSearchValue={setSearchValue} />
                ) : (
                    <MobileView
                        language={language}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        setActive={setActive}
                        handleSearchClick={handleSearchClick}
                    />
                )}
            </Container>
        </div>
    );
};

export default BottomHeader;
