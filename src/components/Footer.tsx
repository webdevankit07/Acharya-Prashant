'use client';
import { BsYoutube, BsTwitter, BsInstagram, BsWikipedia, BsWhatsapp, BsThreads } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { IoIosCall } from 'react-icons/io';
import Image from 'next/image';
import { useLanguage } from '@/context/languageContext';
import Container from './Container';
import LinkItem from './LinkItem';
import { MdDownloadForOffline } from 'react-icons/md';
import Link from 'next/link';

const Footer = () => {
    const { language } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <section className=' text-white bg-dark-1 md:py-10 py-5  max-lg:pb-20'>
            <Container>
                <div className='grid grid-cols-1 max-md:gap-8 m-auto text-base md:mb-20 md:grid-cols-3 lg:grid-cols-6 md:text-base px-5 md:px-10 max-md:py-8'>
                    <div>
                        <h3 className='mb-3 text-base font-semibold md:mb-6 text-slate-100'>
                            {language === 'hi' ? 'सजीव सत्र' : 'LIVE EVENTS'}
                        </h3>
                        <div className='flex flex-col gap-2 font-semibold md:gap-4 text-slate-300'>
                            <LinkItem
                                name={language === 'hi' ? 'गीता समागम' : 'Gita Samagam'}
                                url={`https://acharyaprashant.org/${language}/online-courses/gita`}
                            />
                            <LinkItem
                                name={'Vedanta: Basics to Classics'}
                                url={`https://acharyaprashant.org/${language}/sant-sarita`}
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className='mb-3 text-base font-semibold md:mb-6 text-slate-100'>
                            {language === 'hi' ? 'बोध साहित्य' : 'WISDOM CONTENT'}
                        </h3>
                        <div className='flex flex-col gap-2 font-semibold md:gap-4 text-slate-300'>
                            <LinkItem
                                name={language === 'hi' ? 'वीडियो श्रृंखलाएँ' : 'Video Series'}
                                url={`https://acharyaprashant.org/${language}/courses`}
                            />
                            <LinkItem
                                name={language === 'hi' ? 'पुस्तकें' : 'AP Books'}
                                url={`https://acharyaprashant.org/${language}/books`}
                            />
                            <LinkItem
                                name={language === 'hi' ? 'लेख' : 'AP Articles'}
                                url={`https://acharyaprashant.org/${language}/articles`}
                            />
                            <LinkItem
                                name={language === 'hi' ? 'ए.पी. सर्किल' : 'AP Circle'}
                                url={`https://acharyaprashant.org/${language}/circle`}
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className='mb-3 text-base font-semibold md:mb-6'>
                            {language === 'hi' ? 'अधिक जाने' : 'MORE'}
                        </h3>
                        <div className='flex flex-col gap-2 font-semibold md:gap-4 text-slate-300'>
                            <LinkItem
                                name={language === 'hi' ? 'आचार्य प्रशांत के बारे में' : 'About Acharya Prashant'}
                                url={`https://acharyaprashant.org/${language}/about`}
                            />
                            <LinkItem
                                name={language === 'hi' ? 'उनको आमंत्रित करें' : 'Invite Him'}
                                url={`https://acharyaprashant.org/${language}/invite?tIn=0`}
                            />
                            <LinkItem
                                name={language === 'hi' ? 'उनके संग साक्षात्कार' : 'Interview Him'}
                                url={`https://acharyaprashant.org/${language}/invite?tIn=1`}
                            />
                            <LinkItem
                                name={language === 'hi' ? 'घर घर उपनिषद' : 'Ghar Ghar Upanishad'}
                                url={`https://acharyaprashant.org/${language}/vedant`}
                            />
                            <LinkItem
                                name={language === 'hi' ? 'मीडिया व प्रेस प्रकाशनी' : 'Media and Public Interaction'}
                                url={`https://acharyaprashant.org/${language}/media`}
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className='mb-3 text-base font-semibold md:mb-6 text-slate-100'>
                            {language === 'hi' ? 'सोशल मीडिया' : 'SOCIAL MEDIA'}
                        </h3>
                        <div className='flex flex-col gap-2 font-semibold md:gap-4 text-slate-300'>
                            <div>
                                <p>{language === 'hi' ? 'अँग्रेजी के लिये' : 'For English'}</p>
                                <div className='flex gap-2 py-2'>
                                    <LinkItem icon={BsYoutube} url={`https://www.youtube.com/c/AcharyaPrashant`} />
                                    <LinkItem icon={BsTwitter} url={`https://twitter.com/Prashant_Advait`} />
                                    <LinkItem
                                        icon={BiLogoFacebook}
                                        url={`https://www.facebook.com/AdvaitAcharyaPrashant`}
                                    />
                                    <LinkItem
                                        icon={BsInstagram}
                                        url={`https://www.instagram.com/acharya_prashant_paf/`}
                                    />
                                    <LinkItem
                                        icon={BsWikipedia}
                                        url={`https://en.wikipedia.org/wiki/Acharya_Prashant`}
                                    />
                                </div>
                            </div>
                            <div>
                                <p>{language === 'hi' ? 'हिंदी के लिये' : 'For Hindi'}</p>
                                <div className='flex gap-2 py-4'>
                                    <LinkItem icon={BsYoutube} url={`https://www.youtube.com/c/ShriPrashant`} />
                                    <LinkItem icon={BsTwitter} url={`https://twitter.com/Advait_Prashant`} />
                                    <LinkItem icon={BsThreads} url={`https://www.threads.net/@acharya_prashant_ap`} />
                                    <LinkItem
                                        icon={BiLogoFacebook}
                                        url={`https://www.facebook.com/Acharya.Prashant.Advait`}
                                    />
                                    <LinkItem
                                        icon={BsInstagram}
                                        url={`https://www.instagram.com/acharya_prashant_ap/`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='mb-3 text-base font-semibold md:mb-6 text-slate-100'>
                            {language === 'hi' ? 'डाउनलोड ऐप' : 'DOWNLOAD APP'}
                        </h3>
                        <div className='flex items-center gap-3 my-2'>
                            <Image width={24} height={24} src='/favicon.ico' alt='' />
                            <h3 className='font-semibold name text-slate-300'>
                                {language === 'hi' ? 'आचार्य प्रशांत' : 'Acharya Prashant'}
                            </h3>
                        </div>
                        <div className='flex flex-row md:flex-col gap-4 mt-3'>
                            <a
                                href='https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks&pli=1'
                                target='_blank'
                            >
                                <Image
                                    width={112}
                                    height={32}
                                    src='/PlayStore logo.png'
                                    alt='google-play-store'
                                    className='border border-white border-solid rounded-[5px]'
                                />
                            </a>
                            <a href='https://apps.apple.com/in/app/acharya-prashant/id1603611866' target='_blank'>
                                <Image
                                    width={112}
                                    height={32}
                                    src='/AppStore logo.png'
                                    alt='app-store'
                                    className='border border-white border-solid rounded-[5px]'
                                />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className='mb-3 text-base font-semibold md:mb-6'>
                            {language === 'hi' ? 'सम्पर्क करें' : 'CONTACT US'}
                        </h3>
                        <div className='flex flex-col gap-4 font-semibold text-slate-300'>
                            <div className='flex items-center gap-2'>
                                <HiOutlineMail className='inline-block text-2xl min-w-6' />
                                <a href='mailto:support@advait.org.in' className='hover:text-brand-1'>
                                    support@advait.org.in
                                </a>
                            </div>
                            <div className='flex items-center gap-2'>
                                <BsWhatsapp className='text-2xl' />
                                <a
                                    href='https://api.whatsapp.com/send/?phone=%2B919643750710&text&type=phone_number&app_absent=0'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='hover:text-brand-1'
                                >
                                    +91 9650585100
                                </a>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IoIosCall className='text-2xl' />
                                <a href='tel:9650585100' className='hover:text-brand-1'>
                                    +91 9650585100
                                </a>
                            </div>
                            <div className='group grid p-2 my-4 border border-white hover:bg-brand-1 hover:border-brand-1 transition duration-200 border-solid rounded-[5px] form-btn place-items-center'>
                                <LinkItem
                                    name={language === 'hi' ? 'जुडने के लिए फॉर्म भरें' : 'Fill Form To Connect'}
                                    url={`https://acharyaprashant.org/${language}/enquiry`}
                                    clasName={'group-hover:text-slate-100'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-auto mt-3 mb-5 text-white'>
                    <hr />
                </div>
                <div className='flex-col w-full md:flex-row gap-4 md:w-[80%] m-auto flex justify-between items-center'>
                    <p className='w-full text-xs text-center md:text-sm text-slate-300'>
                        {language === 'hi'
                            ? `कॉपीराइट © ${year} प्रशांतअद्वैत फाउंडेशन`
                            : `Copyright © ${year} PrashantAdvait Foundation`}
                    </p>
                    <div className='w-full space-x-3 text-xs text-center md:text-sm text-slate-300'>
                        <LinkItem
                            name={language === 'hi' ? 'नियम एवं शर्तें ' : 'Terms & Conditions'}
                            url={`https://acharyaprashant.org/${language}/terms-and-conditions`}
                        />
                        <span>|</span>
                        <LinkItem
                            name={language === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy'}
                            url={`https://acharyaprashant.org/${language}/privacy-policy`}
                        />
                        <span>|</span>
                        <LinkItem
                            name={language === 'hi' ? 'अंडरटेकिंग' : 'Undertaking'}
                            url={`https://acharyaprashant.org/${language}/undertaking`}
                        />
                    </div>
                </div>
            </Container>
            <div className='fixed lg:hidden bottom-0 z-[99999] w-full py-2.5 bg-brand-5'>
                <Container>
                    <div className='flex items-center justify-between w-full h-full'>
                        <p className='text-base text-slate-900'>
                            {language === 'hi' ? '130+ ईबुक्स ऍप में पढ़ें' : 'Read 130+ eBooks in App'}
                        </p>
                        <Link
                            href={`https://acharyaprashant.org/app`}
                            target='_blank'
                            className='flex items-center justify-center px-4 py-3.5 text-xs rounded-3xl bg-brand-2'
                        >
                            <MdDownloadForOffline className='mr-1 text-base rounded-full' />
                            {language === 'hi' ? 'ऐप डाउनलोड करें' : 'Download App'}
                        </Link>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Footer;
