import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const HeroSection = () => {
    const { heroSection, language } = useSelector((state) => state.AllData);
    const [readmore, setReadmore] = useState(true);
    const { title, subtitle, description, thumbnail } = heroSection;
    const image_url = `${import.meta.env.VITE_IMAGES_BASE_PATH}${thumbnail?.id}/${thumbnail?.qualities[1]}/${import.meta.env.VITE_IMAGE_KEY}`;
    const lessDescription = description?.slice(0, 150);
    return (
        <Wrapper>
            <div className='sm:container  md:container lg:container xl:container 2xl:container mx-auto'>
                <div className='hero-section'>
                    <h1 className='text-gray-700 title'>{title}</h1>
                    <div className='hero-container'>
                        <div className='thumbnail'>
                            <LazyLoadImage effect='blur' src={image_url} alt='thumbnail' className='thumbnail-img' />
                            <div className='shadow'></div>
                            <img src='/ic_apsignature_hindi.png' alt='ap_signature' className='ap_signature_logo' />
                        </div>
                        <div className='details'>
                            <h3 className='text-gray-700 subtitle'>{subtitle}</h3>
                            <p className='text-gray-700 hidden md:block description'>{description}</p>
                            <p className='text-gray-700 description md:hidden' onClick={() => setReadmore((prev) => (prev === true ? false : true))}>
                                {readmore ? `${lessDescription}...` : description} <span className=' text-xl  text-orange-500 font-semibold'>{readmore === true ? (language === 'en' ? 'Read more' : 'और पढ़ें') : language === 'en' ? 'Read less' : 'कम पढ़ें'}</span>
                            </p>
                        </div>
                    </div>
                    <div className='share-icons'>
                        <h3>{language === 'hi' ? 'इस श्रृंखला को साझा करें:' : 'Share this series:'} </h3>
                        <div className='icons'>
                            <a href='https://www.facebook.com/' target='_blank' rel='noreferrer' className='facebook'>
                                <FaFacebookF />
                            </a>
                            <a href='https://twitter.com/i/flow/login' target='_blank' rel='noreferrer' className='twiter'>
                                <FaTwitter />
                            </a>
                            <a href='https://web.whatsapp.com/' target='_blank' rel='noreferrer' className='whatsapp'>
                                <FaWhatsapp />
                            </a>
                            <a href='https://www.linkedin.com/login' target='_blank' rel='noreferrer' className='linkdien'>
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    margin-top: 30px;

    .hero-section {
        h1 {
            font-size: 2.2rem;
            margin-bottom: 2rem;
        }

        .hero-container {
            display: flex;
            justify-content: center;
            gap: 3rem;

            .thumbnail {
                position: relative;
                border-radius: 0.5rem;
                overflow: hidden;

                .thumbnail-img {
                    width: 2000px;
                }

                .shadow {
                    position: absolute;
                    top: 0;
                    height: 100%;
                    width: 100%;
                    background: linear-gradient(rgba(0, 0, 0, 0) 70%, black);
                }

                .ap_signature_logo {
                    position: absolute;
                    bottom: 1rem;
                    right: 1.5rem;
                    width: 10rem;
                }
            }

            .details {
                h3 {
                    margin-top: 1rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }
                p {
                    color: ${({ theme }) => theme.black};
                }
            }
        }

        .share-icons {
            margin: 2.5rem 0;

            h3 {
                font-size: 1.4rem;
                font-weight: 600;
            }

            .icons {
                padding: 2rem 1rem;
                display: flex;
                align-items: center;
                gap: 3rem;

                a {
                    font-size: 2.7rem;
                    padding: 0.8rem;
                    border-radius: 50%;
                    transition: all 0.1s linear;
                }
                .facebook {
                    color: #3e6fa7;

                    &:hover {
                        background-color: #3e6fa7;
                        color: white;
                    }
                }
                .twiter {
                    color: #08bbee;

                    &:hover {
                        background-color: #08bbee;
                        color: white;
                    }
                }
                .whatsapp {
                    color: #06ba27;

                    &:hover {
                        background-color: #06ba27;
                        color: white;
                    }
                }
                .linkdien {
                    color: #0a66c2;

                    &:hover {
                        background-color: #0a66c2;
                        color: white;
                    }
                }
            }
        }

        ////! .. Responsive......
        @media (width < 768px) {
            .title,
            .subtitle,
            .description {
                font-size: 1.5rem;
            }
            .hero-container {
                flex-direction: column;
            }
            .share-icons {
                display: none;
            }
        }
    }
`;

export default HeroSection;
