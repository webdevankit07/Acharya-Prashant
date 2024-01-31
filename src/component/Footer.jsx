import styled from 'styled-components';
import { BsYoutube, BsTwitter, BsInstagram, BsWikipedia, BsWhatsapp } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { IoIosCall } from 'react-icons/io';
import { useSelector } from 'react-redux';

const Footer = () => {
    const { language } = useSelector((state) => state.AllData);

    return (
        <Wrapper className='text-white bg-[#0F172A] py-16'>
            <div className='sm:container  md:container lg:container xl:container 2xl:container mx-auto'>
                <div className='footer-container m-auto flex justify-center gap-5'>
                    <div className='list'>
                        <h3 className='heading'>{language === 'hi' ? 'सजीव सत्र' : 'LIVE EVENTS'}</h3>
                        <a href='https://acharyaprashant.org/hi/online-courses/gita' target='_blank' rel='noreferrer'>
                            {language === 'hi' ? 'श्रीमद्भगवद्गीता' : 'Bhagavad Gita'}
                        </a>
                        <a href='https://acharyaprashant.org/hi/sant-sarita' target='_blank' rel='noreferrer'>
                            {language === 'hi' ? 'संत सरिता' : 'Sant Sarita'}
                        </a>
                        <a href='https://acharyaprashant.org/hi/ashtavakra-samhita' target='_blank' rel='noreferrer'>
                            {language === 'hi' ? 'अष्टावक्र संहिता' : 'Ashtavakra Samhita'}
                        </a>
                        <a href='https://acharyaprashant.org/hi/bodh-pratyusha' target='_blank' rel='noreferrer'>
                            {language === 'hi' ? 'बोध प्रत्यूषा' : 'Bodh Pratyusha'}
                        </a>
                    </div>
                    <div className='list'>
                        <h3 className='heading'>{language === 'hi' ? 'बोध साहित्य' : 'WISDOM CONTENT'}</h3>
                        <a href='https://acharyaprashant.org/hi/courses' target='_blank' rel='noreferrer'>
                            {language === 'hi' ? 'वीडियो श्रृंखलाएँ' : 'Video Series'}
                        </a>
                        <a href='https://acharyaprashant.org/hi/books' target='_blank' rel='noreferrer'>
                            {language === 'hi' ? 'पुस्तकें' : 'AP Books'}
                        </a>
                        <a href='https://acharyaprashant.org/hi/articles' target='_blank' rel='noreferrer'>
                            {language === 'hi' ? 'लेख' : 'AP Articles'}
                        </a>
                        <a href='https://acharyaprashant.org/hi/circle' target='_blank' rel='noreferrer'>
                            {language === 'hi' ? 'ए.पी. सर्किल' : 'AP Circle'}
                        </a>
                    </div>
                    <div className='list'>
                        <h3 className='heading'>{language === 'hi' ? 'अधिक जाने' : 'MORE'}</h3>
                        <a href='https://acharyaprashant.org/hi/about' target='_blank' rel='noreferrer'>
                            {language === 'hi' ? 'आचार्य प्रशांत के बारे में' : 'About Acharya Prashant'}
                        </a>
                        <a href='https://acharyaprashant.org/hi/invite?tIn=0' target='_blank' rel='noreferrer'>
                            {language === 'hi' ? 'उनको आमंत्रित करें' : 'Invite Him'}
                        </a>
                        <a href='https://acharyaprashant.org/hi/invite?tIn=1' target='_blank' rel='noreferrer'>
                            {language === 'hi' ? 'उनके संग साक्षात्कार' : 'Interview Him'}
                        </a>
                        <a href='https://acharyaprashant.org/hi/vedant' target='_blank' rel='noreferrer'>
                            {language === 'hi' ? 'घर घर उपनिषद' : 'Ghar Ghar Upanishad'}
                        </a>
                    </div>
                    <div className='list'>
                        <h3 className='heading'>{language === 'hi' ? 'सोशल मीडिया' : 'SOCIAL MEDIA'}</h3>
                        <div className='social-icon'>
                            <p>{language === 'hi' ? 'अँग्रेजी के लिये' : 'For English'}</p>
                            <div className='icons flex gap-4'>
                                {' '}
                                <a href='https://www.youtube.com/c/AcharyaPrashant' target='_blank' rel='noreferrer'>
                                    <BsYoutube />
                                </a>
                                <a href='https://twitter.com/Prashant_Advait' target='_blank' rel='noreferrer'>
                                    <BsTwitter />
                                </a>
                                <a href='https://www.facebook.com/AdvaitAcharyaPrashant' target='_blank' rel='noreferrer'>
                                    <BiLogoFacebook />
                                </a>
                                <a href='https://www.instagram.com/acharya_prashant_paf/' target='_blank' rel='noreferrer'>
                                    <BsInstagram />
                                </a>
                                <a href='https://en.wikipedia.org/wiki/Acharya_Prashant' target='_blank' rel='noreferrer'>
                                    <BsWikipedia />
                                </a>
                            </div>
                        </div>
                        <div className='social-icon'>
                            <p>{language === 'hi' ? 'हिंदी के लिये' : 'For Hindi'}</p>
                            <div className='icons flex gap-4'>
                                <a href='https://www.youtube.com/c/ShriPrashant' target='_blank' rel='noreferrer'>
                                    <BsYoutube />
                                </a>
                                <a href='https://twitter.com/Advait_Prashant' target='_blank' rel='noreferrer'>
                                    <BsTwitter />
                                </a>
                                <a href='https://www.facebook.com/Acharya.Prashant.Advait' target='_blank' rel='noreferrer'>
                                    <BiLogoFacebook />
                                </a>
                                <a href='https://www.instagram.com/acharya_prashant_ap/' target='_blank' rel='noreferrer'>
                                    <BsInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='list'>
                        <h3 className='heading'>{language === 'hi' ? 'डाउनलोड ऐप' : 'DOWNLOAD APP'}</h3>
                        <div className='logo flex items-center gap-3 my-2'>
                            <img className='w-[3rem]' src='/src/assets/Acharya_Prashant_favicon.png' alt='' />
                            <h3 className='name'>{language === 'hi' ? 'आचार्य प्रशांत' : 'Acharya Prashant'}</h3>
                        </div>
                        <div className='download-icons'>
                            <a href='https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks&pli=1' target='_blank' rel='noreferrer'>
                                <img src='https://acharyaprashant.org/images/ic_googleplay.png' alt='google-play-store' />
                            </a>
                            <a href='https://apps.apple.com/in/app/acharya-prashant/id1603611866' target='_blank' rel='noreferrer'>
                                <img src='https://acharyaprashant.org/images/ic_appstore.png' alt='app-store' />
                            </a>
                        </div>
                    </div>
                    <div className='list'>
                        <h3 className='heading'>{language === 'hi' ? 'सम्पर्क करें' : 'CONTACT US'}</h3>
                        <div className='flex items-center gap-3 py-[.8rem]'>
                            <div className='text-4xl'>
                                <HiOutlineMail />
                            </div>
                            <a className='text-2xl'>support@advait.org.in</a>
                        </div>
                        <div className='flex items-center gap-3 py-[.8rem]'>
                            <div className='text-3xl'>
                                <BsWhatsapp />
                            </div>
                            <a href='https://api.whatsapp.com/send/?phone=%2B919643750710&text&type=phone_number&app_absent=0' target='_blank' rel='noreferrer' className='text-2xl'>
                                +91 9650585100
                            </a>
                        </div>
                        <div className='flex items-center gap-3 py-[.8rem]'>
                            <div className='text-3xl'>
                                <IoIosCall />
                            </div>
                            <a href='tel:9650585100' className='text-2xl'>
                                +91 9650585100
                            </a>
                        </div>
                        <div className='form-btn grid place-items-center'>
                            <a href='https://acharyaprashant.org/hi/enquiry' target='_blank' rel='noreferrer'>
                                {language === 'hi' ? 'जुडने के लिए फॉर्म भरें' : 'Fill Form To Connect'}
                            </a>
                        </div>
                    </div>
                </div>
                <div className='hr-line'>
                    <hr />
                </div>
                <div className='copyright w-[50%] m-auto flex justify-between items-center'>
                    <p className='text-xl'>{language === 'hi' ? `कॉपीराइट © ${new Date().getFullYear()} प्रशांतअद्वैत फाउंडेशन` : `Copyright © ${new Date().getFullYear()} PrashantAdvait Foundation`}</p>
                    <div>
                        <a href='https://acharyaprashant.org/hi/terms-and-conditions' target='_blank' rel='noreferrer' className='hover:text-red-700 cursor-pointer text-xl'>
                            {language === 'hi' ? 'नियम एवं शर्तें ' : 'Terms & Conditions'}
                        </a>
                        <span className='mx-3 '>|</span>
                        <a href='https://acharyaprashant.org/hi/privacy-policy' target='_blank' rel='noreferrer' className='hover:text-red-700 cursor-pointer text-xl'>
                            {language === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy'}
                        </a>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .list {
        margin: 0 1em;
        h3 {
            font-weight: bold;
            margin-bottom: 1rem;
        }

        a {
            padding: 0.5rem 0;
            font-size: 1.5rem;
            display: block;
            cursor: pointer;

            &:hover {
                color: red;
            }
        }

        .social-icon {
            p {
                margin: 1rem 0 0 0;
            }
            .icons {
                padding: 1rem 0;
                a {
                    font-size: 2rem;
                }
            }
        }

        .name {
            margin: 0;
            font-size: 1.5rem;
        }
        .download-icons {
            a {
                img {
                    margin-top: 1rem;
                    border: 1px solid white;
                    border-radius: 5px;
                    width: 15rem;
                }
            }
        }

        .form-btn {
            margin: 1rem 0;
            padding: 0.5rem;
            border: 1px solid white;
            border-radius: 5px;

            &:hover {
                border: 1px solid red;
            }
        }
    }

    .hr-line {
        margin: 3rem auto;
        width: 70%;
        color: white;
    }

    ///! ........... Responsive .................
    @media (width < 768px) {
        .footer-container {
            padding: 2rem 4rem;
            flex-direction: column;
        }
        .copyright {
            flex-direction: column;
            gap: 1rem;
        }
    }
`;

export default Footer;
