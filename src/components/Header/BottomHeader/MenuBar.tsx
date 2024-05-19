import { useData } from '@/context/DataContext';
import { useLanguage } from '@/context/languageContext';
import { TagType } from '@/types';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface MenuBarProps {
    childTags: TagType[] | null;
    setChildTags: Dispatch<SetStateAction<TagType[] | null>>;
    menuBarRef: React.MutableRefObject<null>;
    childListMenuRef: React.MutableRefObject<null>;
}

const MenuBar = ({ childTags, setChildTags, childListMenuRef, menuBarRef }: MenuBarProps) => {
    const [activeChildDrawer, setACtiveChildDrawer] = useState(false);
    const { language } = useLanguage();
    const { tags } = useData();

    const setTags = (tagId: number | null) => {
        const childTags = tags && tags[1].filter((tag) => tag.parent === tagId);
        setChildTags(childTags);
    };

    useEffect(() => {
        if (childTags && childTags.length > 0) {
            setACtiveChildDrawer(true);
        } else {
            setACtiveChildDrawer(false);
        }
    }, [childTags]);

    return (
        <div
            ref={menuBarRef}
            className='absolute py-5 rounded-md px-4 text-slate-500 font-medium min-w-64 h-[600px] bg-white cursor-pointer left-32 lg:left-44 xl:left-52 2xl:left-96 top-28'
        >
            {/* <div className='text-slate-500 font-medium'> */}
            <Link href={`https://acharyaprashant.org/${language}/video-modules/`} target='_blank' className='w-full'>
                <div className='flex items-center justify-between w-full py-2 hover:text-brand-2'>
                    <span className='text-sm'>{language === 'hi' ? `सभी` : `All`}</span>
                </div>
            </Link>
            {tags &&
                tags[0].map((tag) => (
                    <div key={tag.tagId}>
                        <div
                            className='relative flex items-center justify-between'
                            onMouseEnter={() => {
                                setTags(tag.tagId);
                            }}
                        >
                            <Link
                                href={`https://acharyaprashant.org/${language}/video-modules/tags/${tag.tagId}`}
                                target='_blank'
                                className='w-full'
                            >
                                <div
                                    className='flex items-center justify-between w-full py-2 hover:text-brand-2'
                                    onMouseOver={() => tag.hasChildren && setTags(tag.tagId)}
                                >
                                    <span className='text-sm'>
                                        {language === 'hi' ? `${tag.name.hindi}` : `${tag.name.english}`}
                                    </span>
                                    <span>
                                        {tag.hasChildren && <MdOutlineKeyboardArrowRight className='text-xl' />}
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div
                            className={`block absolute top-0 px-4 py-5 overflow-y-scroll rounded-r-md border-l left-[96%] min-w-64 h-[600px] bg-white ${
                                !activeChildDrawer && 'hidden'
                            }`}
                            ref={childListMenuRef}
                        >
                            {childTags?.map((tag) => (
                                <div key={tag.tagId} className='group flex items-center justify-between'>
                                    <Link
                                        href={`https://acharyaprashant.org/${language}/video-modules/tags/${tag.tagId}`}
                                        target='_blank'
                                        className='w-full'
                                    >
                                        <div className='flex items-center text-sm justify-between w-full py-2 hover:text-brand-2'>
                                            {language === 'hi' ? `${tag.name.hindi}` : `${tag.name.english}`}
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default MenuBar;
