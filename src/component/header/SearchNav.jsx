import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { Hidden } from '@mui/material';

const SearchNav = () => {
    const [active, setActive] = useState('');
    const [sticky, setSticky] = useState('');
    const { language } = useSelector((state) => state.AllData);
    const SearchInput = document.querySelector('#SearchInput');

    if (active === 'active') {
        SearchInput.autofocus = true;
    }

    // //! Sticky NavBar Function ....
    const navbar = document.querySelector('#navbar');
    const handleScroll = () => {
        if (window.scrollY >= navbar.offsetTop) {
            setSticky('sticky');
        }
        if (window.scrollY <= 90) {
            setSticky('');
        }
    };
    window.addEventListener('scroll', handleScroll);

    return (
        <Wrapper>
            <div id='navbar' className={`${sticky} ${active}`}>
                <div className='search-Bar-container relative flex justify-between z-30 bg-white items-center sm:container  md:container lg:container xl:container 2xl:container mx-auto'>
                    <div className='left flex justify-center items-center'>
                        <div className='img-section w-[9rem]'>
                            <img src='/ic_videoseries.png' alt='' />
                        </div>
                        <div className='search-bar-section flex justify-center items-center ml-10'>
                            <div className='input-group'>
                                <button className='btn btn-outline-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                    {language === 'en' ? 'All' : 'सभी'}
                                </button>
                                <ul className='dropdown-menu'>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            Action before
                                        </a>
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            Another action before
                                        </a>
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            Something else here
                                        </a>
                                    </li>
                                    <li>
                                        <hr className='dropdown-divider' />
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            Separated link
                                        </a>
                                    </li>
                                </ul>
                                <input type='text' className='form-control' placeholder={language === 'hi' ? 'वीडियो श्रृंखलाएँ खोजें' : ' Search for video series'} aria-label='Text input with 2 dropdown buttons' />
                                <button className='btn search-btn btn-outline-secondary' type='button' id='button-addon2'>
                                    <HiSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='right relative'>
                        <input type='text' id='SearchInput' className='md:hidden mbl-search border-0' />
                        <div className='block md:hidden absolute text-4xl right-48' onClick={() => setActive((prev) => (prev === 'active' ? '' : 'active'))}>
                            {active === 'active' ? <RxCross2 /> : <HiSearch />}
                        </div>
                        <a href='https://acharyaprashant.org/hi/login' target='_blank' rel='noreferrer' className='btn-right text-white'>
                            {language === 'en' ? 'Login' : 'लॉगिन करें'}
                        </a>
                    </div>
                </div>
                <hr />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    #navbar {
        background-color: #fff;
        width: 100%;
        z-index: 1111;
    }

    .sticky {
        position: fixed;
        top: 0;
        left: 0;
    }

    .search-Bar-container {
        font-size: 1.3rem;
        padding: 1rem 0;
        color: black;

        .search-bar-section {
            .btn {
                font-size: 1.3rem;
                font-weight: 600;
                padding: 0.8rem 1rem;
                border: 1px solid #bebebe;

                &:hover {
                    background-color: #fff;
                    color: black;
                }
            }
            .input-group {
                width: 800px;
                outline: none;

                .dropdown-menu {
                    font-size: 1.3rem;
                }

                .form-control {
                    width: 100%;
                    font-size: 1.3rem;
                    font-weight: 600;
                    box-shadow: none;
                    outline: none;
                    border: 1px solid #bebebe;

                    &:focus {
                        outline: none;
                        border: 1px solid #bebebe;
                    }
                }

                .search-btn {
                    outline: none;
                    border: none;
                    font-size: 2rem;
                    background-color: #fed7aa;
                    color: black;
                }
            }
        }

        .btn-right {
            font-size: 1.5rem;
            background-color: ${({ theme }) => theme.lightTheme};
            padding: 0.5rem 2rem;
            border-radius: 5px;
        }
    }

    hr {
        color: #8d8d8d;
    }

    .mbl-search {
        position: absolute;
        top: -1rem;
        right: 16rem;
        width: 0;
        padding: 0;
        outline: 1px solid #ffffff;
        height: 35px;
        margin-top: 4px;
        border-radius: 5px;
        font-size: 1.3rem;
        z-index: 99999;
        box-shadow: 0 0 0;
        border: 5px solid black;
        transition: all 0.5s ease;
    }

    .active .mbl-search {
        width: 300px;
        padding: 0.75rem 2rem;
        outline: 2px solid #ff5622;
        transition: all 0.5s ease;
    }

    ///! ...............Responsive..............
    @media (width <= 768px) {
        .search-Bar-container {
            padding-left: 2rem;
            padding-right: 2rem;
        }
        .search-bar-section {
            display: none;
        }

        .btn-right {
            font-size: 0.5rem;
        }
        .active .img-section img {
            opacity: 0;
        }
        .active .mbl-search {
            width: 240%;
        }
    }
`;

export default SearchNav;
