import styled from 'styled-components';
import VideoCource from './VideoCource';
import { BiDownArrowCircle } from 'react-icons/bi';

const Home = () => {
    return (
        <Wrapper>
            <VideoCource />
            <div className='app-download-section flex justify-between md:justify-start items-center py-3 px-10 w-full'>
                <div className='left md:hidden text-3xl font-semibold text-gray-600'>Open in App</div>
                <div className='right flex justify-center items-center gap-2 text-2xl font-semibold bg-[#f64d1a] text-white py-3 px-4 rounded-full'>
                    <div className='text-3xl md:text-4xl cursor-pointer'>
                        <a href='https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks' target='_blank' rel='noreferrer'>
                            <BiDownArrowCircle />
                        </a>
                    </div>
                    <a className='md:hidden' href='https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks' target='_blank' rel='noreferrer'>
                        Download App
                    </a>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .app-download-section {
        float: right;
        width: 100px;
        position: sticky;
        bottom: 30rem;
        background-color: #ffedd5;
        border-radius: 2rem 0 0 2rem;
    }
    @media (width<768px) {
        .app-download-section {
            width: 100%;
            float: none;
            position: sticky;
            bottom: 0;
            left: 0;
            background-color: #ffedd5;
            border-radius: 0;
        }
    }
`;

export default Home;
