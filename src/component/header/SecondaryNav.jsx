import { useSelector } from 'react-redux';
import styled from 'styled-components';

const SecondaryNav = () => {
    const { language } = useSelector((state) => state.AllData);

    return (
        <Wrapper>
            <div className='bottom-bar z-10 block md:grid place-items-center px-5'>
                <div className='bar-container flex justify-between mdjustify-center items-center'>
                    <div className='text flex items-center gap-2'>
                        <div className='circle'></div>
                        <p>{language === 'en' ? 'Get access to all 350+ video series at once!' : 'सभी 350+ वीडियो श्रृंखला पाएँ एक साथ!'}</p>
                    </div>
                    <div className='click-btn'>
                        <a href='https://acharyaprashant.org/en/login?page=https%3A%2F%2Facharyaprashant.org%2Fen%2Fpacks%2Fall-video-series' target='_blank' rel='noreferrer' className='barBtn'>
                            {language === 'en' ? 'Click Here' : 'यहाँ क्लिक करें'}
                        </a>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .bottom-bar {
        background-color: #1e293b;
        padding: 1.5rem 0;
    }
    .text p {
        font-size: 1.7rem;
    }

    .circle {
        width: 15px;
        height: 15px;
        background-color: ${({ theme }) => theme.lightTheme};
        border-radius: 50%;
        border: 1px solid white;
    }

    .barBtn {
        font-size: 1.3rem;
        color: white;
        border: 1px solid white;
        padding: 0.8rem 1rem;
        border-radius: 7px;
        margin-left: 20px;
    }

    .btnBar:active {
        border: none;
        outline: none;
    }

    ///! .......... Responsive ...........
    @media (width < 768px) {
        .bar-container {
            .text p {
                font-size: 1.2rem;
            }

            .click-btn a {
                font-size: 1rem;
                padding: 0.5rem 0.8rem;
            }
        }
    }
`;

export default SecondaryNav;
