import LinkItem from '@/components/LinkItem';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LanguageType } from '@/types';
import React, { Dispatch, SetStateAction } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { BsYoutube, BsTwitter, BsInstagram, BsWikipedia, BsWhatsapp, BsThreads } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';
import { PiHandsPrayingBold } from 'react-icons/pi';

interface DrawerContentType {
    language: LanguageType;
    openLiveSection: boolean;
    setOpenLiveSection: Dispatch<SetStateAction<boolean>>;
}

type ListItemProps = {
    url: string;
    name?: string;
};

const MobileDrawerContent = ({ language, openLiveSection, setOpenLiveSection }: DrawerContentType) => {
    return (
        <ScrollArea className={`h-full text-xl -mx-3 block sm:hidden`}>
            {openLiveSection && (
                <>
                    <ListItem
                        name={language === 'hi' ? 'श्रीमद् भगवद् गीता' : 'Gita Samagam'}
                        url={`https://acharyaprashant.org/${language}/gita`}
                    />
                    <ListItem
                        name={'Vedanta: Basics to Classics'}
                        url={`https://acharyaprashant.org/${language}/sant-sarita`}
                    />
                </>
            )}
            {!openLiveSection && (
                <>
                    <div
                        onClick={() => setOpenLiveSection(true)}
                        className='flex items-center justify-between py-3 cursor-pointer group'
                    >
                        {language === 'hi' ? 'लाइव सत्र' : 'Live Sessions'}
                        <MdOutlineKeyboardArrowRight className='text-xl' />
                    </div>
                    <ListItem
                        name={language === 'hi' ? 'पुस्तकें' : 'AP Books'}
                        url={`https://acharyaprashant.org/${language}/books`}
                    />
                    <ListItem
                        name={language === 'hi' ? 'लेख' : 'AP Articles'}
                        url={`https://acharyaprashant.org/${language}/articles`}
                    />
                    <ListItem
                        name={language === 'hi' ? 'वीडियो श्रृंखलाएँ' : 'Video Series'}
                        url={`https://acharyaprashant.org/${language}/courses`}
                    />
                    <ListItem
                        name={language === 'hi' ? 'ए.पी. सर्किल' : 'AP Circle'}
                        url={`https://acharyaprashant.org/${language}/circle`}
                    />
                    <ListItem
                        name={language === 'hi' ? 'कॉलेज संवाद के लिए आमंत्रित करें' : 'Invite For Talk'}
                        url={`https://acharyaprashant.org/${language}/invite?tIn=0`}
                    />
                    <ListItem
                        name={language === 'hi' ? 'इंटरव्यू के लिए आमंत्रित करें' : 'Invite For an Interview'}
                        url={`https://acharyaprashant.org/${language}/invite?tIn=1`}
                    />
                    <ListItem
                        name={language === 'hi' ? 'सम्पर्क करें' : 'Contact Us'}
                        url={`https://acharyaprashant.org/${language}/enquiry`}
                    />
                    <ListItem
                        name={language === 'hi' ? 'करियर' : 'Careers'}
                        url={`https://acharyaprashant.org/${language}/hiring`}
                    />

                    <div className='w-32 my-2 mb-10'>
                        <Link
                            href={`https://acharyaprashant.org/${language}/contribute`}
                            target='_blank'
                            className='flex items-center justify-center gap-2 px-4 py-2 text-[15px] font-semibold rounded-md bg-brand-5 text-brand-2'
                        >
                            <PiHandsPrayingBold />
                            <span className='inline-block'>{language === 'hi' ? 'योगदान करें' : 'Donate'}</span>
                        </Link>
                    </div>

                    <div className='my-3'>
                        <hr />
                    </div>

                    <ListItem
                        name={language === 'hi' ? 'आचार्य प्रशांत के बारे में' : 'About Acharya Prashant'}
                        url={`https://acharyaprashant.org/${language}/about`}
                    />
                    <ListItem
                        name={language === 'hi' ? 'प्रशांतअद्वैत फाउंडेशन' : 'PrashantAdvait Foundation'}
                        url={`https://acharyaprashant.org/${language}/prashantadvait-foundation`}
                    />
                    <ListItem
                        name={language === 'hi' ? 'प्रेस प्रकाशनी' : 'In Media'}
                        url={`https://acharyaprashant.org/${language}/media`}
                    />
                    <div className='flex gap-3 mb-8'>
                        <a
                            href='https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks&pli=1'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <Image
                                width={112}
                                height={32}
                                src='/PlayStore logo.png'
                                alt='google-play-store'
                                className='mt-4 border border-white border-solid rounded-[5px]'
                            />
                        </a>
                        <a
                            href='https://apps.apple.com/in/app/acharya-prashant/id1603611866'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <Image
                                width={112}
                                height={32}
                                src='/AppStore logo.png'
                                alt='app-store'
                                className='mt-4 border border-white border-solid rounded-[5px]'
                            />
                        </a>
                    </div>
                    <div className='flex flex-col gap-3 mt-5 font-semibold text-slate-100 pb-10'>
                        <div>
                            <p className='text-base font-normal'>
                                {language === 'hi' ? 'अँग्रेजी के लिये' : 'For English'}
                            </p>
                            <div className='flex gap-7 py-2 *:hover:text-slate-100 *:text-2xl'>
                                <LinkItem icon={BsYoutube} url={`https://www.youtube.com/c/AcharyaPrashant`} />
                                <LinkItem icon={BsTwitter} url={`https://twitter.com/Prashant_Advait`} />
                                <LinkItem
                                    icon={BiLogoFacebook}
                                    url={`https://www.facebook.com/AdvaitAcharyaPrashant`}
                                />
                                <LinkItem icon={BsInstagram} url={`https://www.instagram.com/acharya_prashant_paf/`} />
                                <LinkItem icon={BsWikipedia} url={`https://en.wikipedia.org/wiki/Acharya_Prashant`} />
                            </div>
                        </div>
                        <div>
                            <p className='text-base font-normal'>{language === 'hi' ? 'हिंदी के लिये' : 'For Hindi'}</p>
                            <div className='flex gap-7 py-2 *:hover:text-slate-100 *:text-2xl'>
                                <LinkItem icon={BsYoutube} url={`https://www.youtube.com/c/ShriPrashant`} />
                                <LinkItem icon={BsTwitter} url={`https://twitter.com/Advait_Prashant`} />
                                <LinkItem icon={BsThreads} url={`https://www.threads.net/@acharya_prashant_ap`} />
                                <LinkItem
                                    icon={BiLogoFacebook}
                                    url={`https://www.facebook.com/Acharya.Prashant.Advait`}
                                />
                                <LinkItem icon={BsInstagram} url={`https://www.instagram.com/acharya_prashant_ap/`} />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </ScrollArea>
    );
};

const ListItem = ({ name, url }: ListItemProps) => {
    return (
        <a
            href={url}
            target='_blank'
            rel='noreferrer'
            className={`inline-block py-3 cursor-pointer text-nowrap w-full`}
        >
            {name}
        </a>
    );
};

export default MobileDrawerContent;
