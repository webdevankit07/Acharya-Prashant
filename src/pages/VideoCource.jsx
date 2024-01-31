import HeroSection from '../component/videoCources/HeroSection';
import VideoSection from '../component/videoCources/VideoSection';
import OtherVideos from '../component/videoCources/OtherVideos';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourceTags, getFaqData, getVideoData } from '../store/AllDataSlice.jsx';
import FaqSection from '../component/FaqSection';
import { Oval } from 'react-loader-spinner';
import styled from 'styled-components';

const VideoCource = () => {
    document.title = 'संतवाणी श्रृंखला | आचार्य प्रशांत';
    const { language, isLoading } = useSelector((state) => state.AllData);
    const [dataId, setDataId] = useState('course-series-eeb9d3');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideoData(dataId));
        dispatch(getFaqData(language === 'en' ? 'english' : 'hindi'));
        dispatch(getCourceTags());
    }, [dispatch, dataId, language]);

    if (isLoading) {
        return (
            <div className='h-[90vh] grid place-items-center'>
                <Oval
                    height={80}
                    width={80}
                    color='#d24115'
                    wrapperStyle={{}}
                    wrapperClass=''
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor='#d24115'
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
            </div>
        );
    }

    return (
        <Wrapper>
            <HeroSection />
            <VideoSection />
            <OtherVideos setDataId={setDataId} />
            <FaqSection />
        </Wrapper>
    );
};

const Wrapper = styled.section`
    ///! ...... Responsive .......
    @media (width<768px) {
        padding: 0 2rem;
    }
`;

export default VideoCource;
