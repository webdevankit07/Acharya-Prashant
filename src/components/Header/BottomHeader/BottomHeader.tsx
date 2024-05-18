'use client';
import Container from '@/components/Container';
import { useLanguage } from '@/context/languageContext';
import React, { useEffect, useState } from 'react';
import MobileView from './MobileView';
import ActiveSection from './ActiveSection';

const BottomHeader = () => {
    const [active, setActive] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const { language } = useLanguage();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, []);

    return (
        <div
            className={`w-full py-2 md:py-0.5 bg-white text-slate-600 shadow transition-all ease-in-out duration-300 ${
                sticky && 'fixed top-0 left-0'
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
                    />
                )}
            </Container>
        </div>
    );
};

export default BottomHeader;
