'use client';
import { LanguageType } from '@/types';
import React, { useEffect, useRef, useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';

interface SelectLanguageProps {
    language: LanguageType;
    setLocalLanguage: (vlue: LanguageType) => void;
}

const SelectLanguage = ({ language, setLocalLanguage }: SelectLanguageProps) => {
    const [open, setOpen] = useState(false);
    const itemRef = useRef(null);
    const secRef = useRef(null);
    const arrowRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (
                e.target !== menuRef.current &&
                e.target !== itemRef.current &&
                e.target !== secRef.current &&
                e.target !== arrowRef.current
            ) {
                setOpen(false);
            }
        });
    }, []);

    return (
        <section className='relative z-[9]' onClick={() => setOpen(!open)}>
            <div
                ref={itemRef}
                className='flex items-center py-3 cursor-pointer sm:gap-1'
                onClick={() => setOpen(!open)}
            >
                <div
                    ref={secRef}
                    className='py-0.5 text-xs border-2 rounded-sm font-semibold text-center w-7 sm:w-[35px]'
                    onClick={() => setOpen(!open)}
                >
                    {language === 'hi' ? 'HI' : 'EN'}
                </div>
                <TiArrowSortedDown
                    className={`text-lg block ${
                        open
                            ? 'rotate-180 transition ease-in-out duration-500'
                            : 'rotate-0 transition ease-in-out duration-500'
                    }`}
                />
            </div>
            <div
                ref={menuRef}
                className={`absolute w-[120px] z-[999999] rounded-md text-slate-500 bg-slate-100 drop-shadow-2xl top-14 -left-8 py-1 transition duration-200 ease-in-out ${
                    open ? 'scale-1 opacity-100' : 'scale-0 opacity-0'
                }`}
            >
                <ul className='*:w-full *:text-center hover:*:bg-brand-3 *:py-1 *:px-1 *:font-semibold py-2 px-1.5 *:rounded-md *:cursor-pointer'>
                    <li className={`${language === 'hi' && 'text-brand-1'}`} onClick={() => setLocalLanguage('hi')}>
                        हिन्दी
                    </li>
                    <li className={`${language === 'en' && 'text-brand-1'}`} onClick={() => setLocalLanguage('en')}>
                        English
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default SelectLanguage;
