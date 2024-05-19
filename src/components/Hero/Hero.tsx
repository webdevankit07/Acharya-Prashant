'use client';
import { useData } from '@/context/DataContext';
import { useLanguage } from '@/context/languageContext';
import { FaArrowLeftLong, FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa6';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import HeroImage from './HeroImage';
import HeroBreadcrumb from './HeroBreadcrumb';
import HeroLoadingSkeleton from './HeroLoadingSkeleton';
import { useAction } from '@/context/ActionContext';

const Hero = () => {
    const [expand, setExpand] = useState(false);
    const { language } = useLanguage();
    const { heroDetails } = useData();
    const { bottomHeaderSticky } = useAction();
    const router = useRouter();

    const description = expand ? heroDetails?.description : `${heroDetails?.description.slice(0, 155)}...`;

    return !heroDetails ? (
        <HeroLoadingSkeleton />
    ) : (
        <section className={`${bottomHeaderSticky && 'mt-[67px] md:mt-[69px]'}`}>
            <HeroBreadcrumb language={language} />
            <div>
                <div className='flex items-center gap-4'>
                    <FaArrowLeftLong
                        className='text-base cursor-pointer text-brand-2 lg:hidden'
                        onClick={() => router.back()}
                    />
                    <h2 className='text-lg font-semibold lg:text-xl'>{heroDetails?.title}</h2>
                </div>
                <div className='flex flex-col gap-4 my-4 md:flex-row'>
                    <div className='w-[100%] md:w-[40%] flex flex-col'>
                        <HeroImage imageBasePath={heroDetails?.thumbnail.basePath} />
                        <div className='hidden mt-3 md:block'>
                            <h3 className='text-[14px] mb-1'>
                                {language === 'hi' ? 'इस श्रृंखला को साझा करें:' : 'Share this series:'}
                            </h3>
                            <div className='flex items-center gap-5 ml-1 text-2xl'>
                                <a
                                    href='https://www.facebook.com/'
                                    target='_blank'
                                    className='text-[#3e6fa7] hover:bg-[#3e6fa7] hover:text-white p-1.5 rounded-full transition'
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href='https://x.com/intent/post?url=https%3A%2F%2Facharyaprashant.org%2Fhi%2Fvideo-modules%2Fseries%2Fcourse-series-eeb9d3&text=%0A&hashtags=AcharyaPrashant%2CVideoSeries%2Cwisdom%2Cspirituality'
                                    target='_blank'
                                    className='text-[#08bbee] hover:bg-[#08bbee] hover:text-white p-1.5 rounded-full transition'
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    href={`https://api.whatsapp.com/send/?text=%0Ahttps%3A%2F%2Facharyaprashant.org%2Fhi%2Fvideo-modules%2Fseries%2Fcourse-series-eeb9d3&type=custom_url&app_absent=0`}
                                    target='_blank'
                                    className='text-[#06ba27] hover:bg-[#06ba27] hover:text-white p-1.5 rounded-full transition'
                                >
                                    <FaWhatsapp />
                                </a>
                                <a
                                    href='https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=https%3A%2F%2Facharyaprashant.org%2Fhi%2Fvideo-modules%2Fseries%2Fcourse-series-eeb9d3'
                                    target='_blank'
                                    className='text-[#0a66c2] hover:bg-[#0a66c2] hover:text-white p-1.5 rounded-full transition'
                                >
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 px-2 pt-1'>
                        <h2 className='text-lg font-[500] text-slate-900'>{heroDetails?.subtitle}</h2>
                        <div className='text-[15px] md:hidden text-justify text-slate-600'>
                            <p>
                                {description}
                                <span
                                    className='ml-1 cursor-pointer text-brand-2 hover:text-brand-1'
                                    onClick={() => setExpand(!expand)}
                                >
                                    {language === 'hi'
                                        ? expand
                                            ? 'कम दिखाएं'
                                            : 'और पढ़ें'
                                        : expand
                                        ? 'Read less'
                                        : 'Read more'}
                                </span>
                            </p>
                        </div>
                        <p className='text-[15px] hidden md:block   text-justify text-slate-600'>
                            {heroDetails?.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
