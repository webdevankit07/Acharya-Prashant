'use client';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useData } from '@/context/DataContext';
import { useLanguage } from '@/context/languageContext';
import Image from 'next/image';
import { FaArrowLeftLong, FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa6';
import { AspectRatio } from './ui/aspect-ratio';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Hero = () => {
    const [expand, setExpand] = useState(false);
    const { language } = useLanguage();
    const { heroDetails } = useData();
    const router = useRouter();

    const description = expand ? heroDetails?.description : `${heroDetails?.description.slice(0, 155)}...`;

    return (
        <div>
            <Breadcrumb className='my-5 font-bold'>
                <BreadcrumbList>
                    <BreadcrumbItem className='font-normal'>
                        <BreadcrumbLink
                            href={`https://acharyaprashant.org/${language}/video-modules`}
                            target='_blank'
                            className='hover:text-brand-2'
                        >
                            {language === 'hi' ? 'होम' : 'Home'}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className='-mx-1' />
                    <BreadcrumbItem>
                        <BreadcrumbPage className='text-slate-600'>संतवाणी</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
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
                        <AspectRatio ratio={heroDetails?.thumbnail.aspectRatio} className='overflow-hidden rounded-md '>
                            <Image
                                layout='fill'
                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${heroDetails?.thumbnail.basePath}/10/image.jpg`}
                                alt='hero-image'
                            />
                            <div className='absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black'></div>
                            <div className='absolute bottom-3 right-4'>
                                <Image width={100} height={38} src={'/apsignature_hindi.png'} alt='ap_signature' />
                            </div>
                        </AspectRatio>
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
                        <h2 className='text-lg font-semibold text-slate-600'>{heroDetails?.subtitle}</h2>
                        <p className='text-[15px] md:hidden  text-justify text-slate-600'>
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
                        <p className='text-[15px] hidden md:block   text-justify text-slate-600'>
                            {heroDetails?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
