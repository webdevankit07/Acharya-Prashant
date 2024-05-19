import { useEffect, useRef, useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import { LanguageType } from '@/types';
import Link from 'next/link';

interface ListItemProps {
    name: string;
    url: string;
    setOpen: (value: boolean) => void;
}

const InviteMenuItem = ({ language }: { language: LanguageType }) => {
    const [open, setOpen] = useState(false);
    const itemRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (e.target !== menuRef.current && e.target !== itemRef.current) {
                setOpen(false);
            }
        });
    }, []);

    return (
        <div>
            <div className='relative px-3 hover:bg-brand-2'>
                <li ref={itemRef} className='flex items-center gap-1 py-4' onClick={() => setOpen(!open)}>
                    {language === 'en' ? 'Invite' : 'आमंत्रित करें'}
                    <TiArrowSortedDown
                        className={`text-lg ${
                            open
                                ? 'rotate-180 transition ease-in-out duration-500'
                                : 'rotate-0 transition ease-in-out duration-500'
                        }`}
                    />
                </li>
                <div
                    ref={menuRef}
                    className={`absolute px-1.5 py-2 z-[999999] rounded-md text-slate-600 bg-slate-100 drop-shadow-2xl top-14 -left-8 transition duration-200 ease-in-out ${
                        open ? 'scale-1 opacity-100' : 'scale-0 opacity-0'
                    }`}
                >
                    <ul>
                        <ListItem
                            name={language === 'hi' ? 'कॉलेज संवाद के लिए' : 'For a talk'}
                            setOpen={setOpen}
                            url={`https://acharyaprashant.org/${language}/invite?tIn=0`}
                        />
                        <ListItem
                            name={language === 'hi' ? 'साक्षात्कार के लिये' : 'For an interview'}
                            setOpen={setOpen}
                            url={`https://acharyaprashant.org/${language}/invite?tIn=1`}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

const ListItem = ({ name, url, setOpen }: ListItemProps) => {
    return (
        <li>
            <Link
                href={url}
                target='_blank'
                className='inline-block w-full px-2 py-2 font-semibold rounded-md text-nowrap hover:bg-brand-3'
                onClick={() => setOpen(false)}
            >
                {name}
            </Link>
        </li>
    );
};

export default InviteMenuItem;
