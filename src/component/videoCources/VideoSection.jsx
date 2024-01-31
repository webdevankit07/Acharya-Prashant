import { useSelector } from 'react-redux';
import styled from 'styled-components';

const VideoSection = () => {
    const { videoSeries, language } = useSelector((state) => state.AllData);
    const Language = language;

    return (
        <Wrapper>
            <div className='sm:container  md:container lg:container xl:container 2xl:container mx-auto'>
                <div className='seriesSection mt-11 md:mt-0'>
                    <div className='heading-section'>
                        <h3 className='mb-3'>{language === 'hi' ? `वीडियो श्रृंखलाएँ (${videoSeries.length})` : `Video Series (${videoSeries.length})`}</h3>
                        <hr />
                    </div>
                    <div className='seriese-container grid grid-four-column'>
                        {videoSeries.map((elem) => {
                            const { id, title, subtitle, courseHours, amount, originalAmount, language } = elem;
                            const seq = elem.series.order.seq;
                            const courseDuration = courseHours * 60;

                            return (
                                <div key={elem.id}>
                                    <div className='seriese'>
                                        <a href={`https://acharyaprashant.org/en/courses/course/${id}`} target='_blank' rel='noreferrer'>
                                            <span className='inline-flex items-center px-3 py-1 rounded bg-gray-600 text-white font-medium text-xl'>{`भाग ${seq}`}</span>
                                            <div className='details'>
                                                <h1 className='text-gray-700'>{title}</h1>
                                                <h3>{subtitle}</h3>
                                                <h3>{`${Math.floor(courseDuration / 60)} ${Language === 'hi' ? 'घंटा' : 'Hours'} ${Math.round(courseDuration % 60)} ${Language === 'hi' ? 'मिनट' : 'Minutes'}`}</h3>
                                                <div className='flex gap-3 mb-2'>
                                                    <h3>{Language === 'hi' ? 'सहयोग राशि:' : 'Contribution:'}</h3>
                                                    <h3>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount)}</h3>
                                                    <h3>
                                                        <del>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(originalAmount)}</del>
                                                    </h3>
                                                </div>
                                                <span className='inline-flex items-center px-4 py-1 my-2 rounded text-lg font-semibold '>{Language === 'hi' ? (language === 'hindi' ? 'हिन्दी' : 'अँग्रेजी') : language === 'hindi' ? 'Hindi' : 'English'}</span>
                                                <div className='flex items-center gap-3 mt-3'>
                                                    <h3 className='text-orange-700 enroll'>{Language === 'hi' ? 'कार्ट मे जोड़ें' : 'ADD TO CART'}</h3>
                                                    <h3>|</h3>
                                                    <h3 className='text-orange-700 enroll'>{Language === 'hi' ? 'एनरोल करें' : 'ENROLL'}</h3>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <hr />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    margin-bottom: 10rem;

    .seriesSection {
        cursor: pointer;

        .heading-section h3 {
            font-weight: 600;
        }

        .seriese-container {
            gap: 5rem;

            .seriese {
                padding: 1rem 3rem;
                border-radius: 1rem;

                span {
                    background-color: #94a3b8;
                }

                &:hover {
                    background-color: #f1f5f9;
                }

                .details {
                    padding: 1rem 0;

                    span {
                        background-color: #c7e6f8;
                        color: #484848;
                    }

                    h1 {
                        font-size: 1.5rem;
                        margin: 1rem 0;
                        color: #464646;
                        font-weight: 600;
                    }
                    h3 {
                        font-size: 1.4rem;
                        margin: 0.5rem 0;
                        color: #616161;
                    }

                    .enroll {
                        color: ${({ theme }) => theme.lightTheme};
                        cursor: pointer;
                        font-size: 1.2rem;

                        &:hover {
                            color: ${({ theme }) => theme.mainTheme};
                        }
                    }
                }
            }
        }

        ///! ............... Responsive ............
        @media (width <= 768px) {
            .seriese-container {
                gap: 2rem;

                .seriese {
                    padding: 1rem 0.5rem;
                }
            }
            .heading-section h3 {
                font-size: 1.4rem;
            }
        }
    }
`;

export default VideoSection;
