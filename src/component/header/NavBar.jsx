import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setLanguage } from '../../store/AllDataSlice';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import UserSvg from '../UserSvg';
import { useState } from 'react';

const Nav = () => {
    const { language } = useSelector((state) => state.AllData);
    const [active, setActive] = useState('');
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <div className='navbar relative'>
                <div className=' flex  justify-between  container  md:container lg:container xl:container 2xl:container mx-auto'>
                    <div className='left flex justify-center items-center gap-2'>
                        {/* //! ......Logo....... */}
                        <div className='logo'>
                            <img className='logo-img' src='/Acharya_Prashant_favicon.png' alt='logo' />
                        </div>

                        {/* //! .......NavItems.......  */}
                        <div className={`${active} navitems flex justify-center items-center text-2xl`}>
                            {/* //! mobile-sectin  */}
                            <div className='py-10 flex md:hidden justify-between items-center w-[80%] fixed top-0 bg-[#d24115]'>
                                <div className='border border-white py-2 px-6 rounded-lg'>
                                    <a href='https://acharyaprashant.org/hi/login?page=https%3A%2F%2Facharyaprashant.org%2Fhi%2Fcourses%2Fseries%2Fcourse-series-eeb9d3' target='_blank' rel='noreferrer'>
                                        {language === 'en' ? 'Login' : 'लॉगिन करें'}
                                    </a>
                                </div>
                                <div className='text-4xl' onClick={() => setActive('')}>
                                    <RxCross2 />
                                </div>
                            </div>

                            <div className='navitem mt-20 md:mt-0'>
                                <Link to={'/'}>{language === 'en' ? 'Home' : 'होम'}</Link>
                            </div>
                            <div className='navitem'>
                                <a href='https://acharyaprashant.org/en/online-courses/gita' target='_blank' rel='noreferrer'>
                                    {language === 'en' ? 'Live Sessions' : 'लाइव सत्र'}
                                </a>
                            </div>
                            <div className='navitem'>
                                <Link to={`/`}>{language === 'en' ? 'Video Series' : 'वीडियो शृंखलाएँ'}</Link>
                            </div>
                            <div className='navitem'>
                                <a href='https://acharyaprashant.org/en/books' target='_blank' rel='noreferrer'>
                                    {language === 'en' ? 'AP Books' : 'पुस्तकें'}
                                </a>
                            </div>
                            <div className='navitem'>
                                <a href='https://acharyaprashant.org/en/articles' target='_blank' rel='noreferrer'>
                                    {language === 'en' ? 'AP Articles' : 'लेख'}
                                </a>
                            </div>
                            <div className='navitem'>
                                <a href='#'>{language === 'en' ? 'Invite' : 'आमंत्रित करें'}</a>
                            </div>
                            <div className='navitem'>
                                <a href='https://acharyaprashant.org/en/media' target='_blank' rel='noreferrer'>
                                    {language === 'en' ? 'In Media' : 'प्रेस प्रकाशिनी'}
                                </a>
                            </div>
                            <div className='navitem'>
                                <a href='https://acharyaprashant.org/en/contribute' target='_blank' rel='noreferrer'>
                                    {language === 'en' ? 'Donate' : 'योगदान करें'}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='right'>
                        <div className='border border-white py-2 px-4 rounded-xl block md:hidden'>
                            <a className='font-semibold' href='https://acharyaprashant.org/en/contribute' target='_blank' rel='noreferrer'>
                                {language === 'en' ? 'Donate' : 'योगदान करें'}
                            </a>
                        </div>
                        <div className='language-control mr-8'>
                            <div className='dropdown-center'>
                                <button className='btn text-white border-white dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                    {language && language === 'en' ? 'EN' : 'HI'}
                                </button>
                                <ul className='dropdown-menu text-center shadow-lg'>
                                    <li className='p-2 font-semibold' onClick={() => dispatch(setLanguage('hi'))}>
                                        <a className={`${language === 'en' ? '' : 'active'}`} href='#'>
                                            हिन्दी
                                        </a>
                                    </li>
                                    <li className='p-2 font-semibold' onClick={() => dispatch(setLanguage('en'))}>
                                        <a className={`${language === 'en' ? 'active' : ''}`} href='#'>
                                            English
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='contact hidden md:block'>
                            <a href='tel:9650585100'>
                                <FiPhoneCall />
                            </a>
                        </div>
                        <div className='mbl-menu-bar block md:hidden  text-4xl' onClick={() => setActive('active')}>
                            <AiOutlineMenu />
                        </div>
                        <div className='menu-bar relative'>
                            <button className='flex items-center gap-3' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasRight' aria-controls='offcanvasRight'>
                                <div className='toggle-Menu hidden md:block text-4xl'>
                                    <AiOutlineMenu />
                                </div>
                            </button>

                            <div className='offcanvas offcanvas-end text-gray-800 p-5' tabIndex='-1' id='offcanvasRight' aria-labelledby='offcanvasRightLabel'>
                                <div className='offcanvas-header cursor-pointer '>
                                    <div id='offcanvasRightLabel' className='flex items-center gap-4 px-2 py-1 mb-2 text-[#d24115] hover:text-[#ad3c19]'>
                                        <div className='text-6xl'>
                                            <UserSvg />
                                        </div>
                                        <div className='font-semibold text-xl'>Login</div>
                                    </div>
                                    <button type='button' className='bg-white text-gray-600 p-2 absolute text-4xl -left-20 top-7 rounded-full ' data-bs-dismiss='offcanvas' aria-label='Close'>
                                        <RxCross2 />
                                    </button>
                                </div>
                                <hr />
                                <div className='list mb-4'>
                                    <a>{language === 'en' ? 'Bhagavad Gita' : 'श्रीमद्भगवद्गीता'}</a>
                                    <a>{language === 'en' ? 'Sant Sarita' : 'संत सरिता'}</a>
                                    <a>{language === 'en' ? 'Ashtavakra Samhita' : 'अष्टावक्र संहिता'}</a>
                                    <a>{language === 'en' ? 'Bodh Pratyusha' : 'बोध प्रत्यूषा'}</a>
                                    <a>{language === 'en' ? 'AP Books' : 'पुस्तकें'}</a>
                                    <a>{language === 'en' ? 'AP Articles' : 'लेख'}</a>
                                    <a>{language === 'en' ? 'AP Circle' : 'ए.पी. सर्किल'}</a>
                                    <a>{language === 'en' ? 'Invite For Talk' : 'कॉलेज संवाद के लिए आमंत्रित करें'}</a>
                                    <a>{language === 'en' ? 'Invite For an Interview' : 'इंटरव्यू के लिए आमंत्रित करें'}</a>
                                    <a>{language === 'en' ? 'Media and Public Interaction' : 'मीडिया व प्रेस प्रकाशनी'}</a>
                                    <a>{language === 'en' ? 'Contact Us' : 'सम्पर्क करें'}</a>
                                    <a>{language === 'en' ? 'Donate' : 'योगदान करें'}Donate</a>
                                </div>
                                <hr />
                                <div className='list mb-4'>
                                    <h3>{language === 'en' ? 'MORE' : 'अधिक जानें'}</h3>
                                    <a>{language === 'en' ? 'PrashantAdvait Foundation' : 'प्रशांतअद्वैत फाउंडेशन'}</a>
                                    <a>{language === 'en' ? 'Ghar Ghar Upanishad' : 'घर घर उपनिषद'}</a>
                                    <a>{language === 'en' ? 'Bodh Pratyusha' : 'आचार्य प्रशांत के बारे में'}</a>
                                </div>
                                <hr />
                                <div className='list mb-4'>
                                    <h3>{language === 'en' ? 'EXPLORE CATEGORIES' : 'विषयों को देखें'}</h3>
                                    <a>{language === 'en' ? 'Vedant - Upanishads' : 'वेदांत - उपनिषद'}</a>
                                    <a>{language === 'en' ? 'Other Scriptures' : 'वेदांत - श्रीमद्भगवद्गीता'}</a>
                                    <a>{language === 'en' ? 'Saints and Masters' : 'संत और दार्शनिक'}</a>
                                    <a>{language === 'en' ? 'Other streams' : 'अन्य ग्रन्थ'}</a>
                                    <a>{language === 'en' ? 'Technical Support' : 'तकनीकी सहायता'}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    .navbar {
        background-color: ${({ theme }) => theme.mainTheme};
        padding: 0.7rem 0;
    }

    ///!  ..................left Div............... ///
    .logo img {
        width: 3.2rem;
    }

    .navitem a {
        font-size: 1.5rem;
        padding: 1.5rem;
        transition: all 0.2s linear;
    }

    .navitem a:hover {
        background-color: #ea580c;
    }

    //! .............Right Div........... ///
    .navbar .right {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    //!drop-down....
    .dropdown-toggle {
        padding: 0px 1rem;
        min-width: 40px;
        height: 25px;
        font-size: 1.3rem;
    }

    .dropdown-toggle::after {
        position: absolute;
        left: 40px;
        top: 1px;
        margin-top: 10px;
        font-size: 25px;
        transition: all 0.5s ease;
    }

    .show.dropdown-toggle::after {
        transform: rotate(180deg);
        transition: all 0.5s ease;
    }

    .dropdown-menu {
        margin-top: 15px;
        border-radius: 10px;
        font-size: 1.5rem;
    }

    .dropdown-item {
        font-weight: 500;
    }

    .active {
        color: ${({ theme }) => theme.lightTheme};
        background-color: #fff;
    }

    //! contact..
    .contact {
        font-size: 20px;
        margin-left: 20px;
    }

    //!menuBar..
    .menu-bar {
        font-size: 20px;
    }

    ///! .................0ffCanvas Section.......................
    .list {
        a {
            display: block;
            font-size: 1.4rem;
            font-weight: 600;
            padding: 1rem 0.8rem;
            cursor: pointer;
            border-radius: 1rem;
            color: #656565;

            &:hover {
                background-color: #f1f5f9;
            }
        }

        h3 {
            padding: 1rem 0.8rem 0;
            font-size: 1.5rem;
            font-weight: bold;
        }
    }

    .offcanvas.offcanvas-end {
        width: 500px;
    }

    ///! ..........responsive...........
    @media (width <= 768px) {
        .logo img {
            width: 4rem;
            margin-left: 1rem;
        }

        .navitems {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            color: white;
            flex-direction: column;
            background-color: #d24115;
            transform: translateX(100%);
            z-index: 9999;
            transition: all 0.5s ease;

            .navitem {
                font-size: 10rem;

                a {
                    font-size: 2rem;
                }
            }
        }

        .active.navitems {
            transform: translateX(0);
        }
    }
`;

export default Nav;
