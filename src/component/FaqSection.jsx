import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Accordian from './Accordian';

const FaqSection = () => {
    const { faqData, language } = useSelector((state) => state.AllData);

    return (
        <Wrapper>
            <div className='sm:container  md:container lg:container xl:container 2xl:container mx-auto'>
                <div className='faq-container flex gap-8 p-24 bg-[#F9FBFD]'>
                    <div className='left w-1/3'>
                        <h3 className='font-bold text-xl md:text-2xl mb-3'>{language === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'FAQs'}</h3>
                        <div>
                            {language === 'hi' ? (
                                <div className='text-xl md:text-2xl md:pr-32 text-gray-600'>
                                    आप जिस उत्तर की तलाश कर रहे हैं वह नहीं मिल रहा है? कृपया हमारी{' '}
                                    <a href='https://acharyaprashant.org/en/technical-support' target='_blank' rel='noreferrer' className='text-orange-600'>
                                        सपोर्ट
                                    </a>{' '}
                                    टीम से संपर्क करे
                                </div>
                            ) : (
                                <div className='text-2xl pr-32'>
                                    Can’t find the answer you’re looking for? Reach out to our{' '}
                                    <a href='https://acharyaprashant.org/en/technical-support' target='_blank' rel='noreferrer' className='text-orange-600'>
                                        support
                                    </a>{' '}
                                    team
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='right'>
                        {faqData.map((elem, i) => {
                            return <Accordian key={i} {...elem} />;
                        })}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .answer {
        height: 0px;
        transition: all 0.3s ease;
    }

    .active .answer {
        height: 80px;
    }

    .drop-down {
        transition: all 0.5s ease;
    }

    .active .drop-down {
        transform: rotate(180deg);
    }

    ///! ..........Responsive................
    @media (width <= 768px) {
        .faq-container {
            padding: 3rem 2rem;
            flex-direction: column;
            /* width: 100%; */

            .left {
                width: 100%;
            }
        }

        .active .answer {
            height: 120px;
            padding: 0.5rem 0;
        }
    }
`;

export default FaqSection;
