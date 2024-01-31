import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const OtherVideos = ({ setDataId }) => {
    const { otherVideos, language, isLoading } = useSelector((state) => state.AllData);
    const Language = language;

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Wrapper className='otherVideo m-0 xl:m-[10rem]'>
            <div className='sm:container  md:container lg:container xl:container 2xl:container mx-auto'>
                <div>
                    <div>
                        <h3 className='title mb-8 font-semibold'>{language === 'hi' ? `अन्य सहायक वीडियो श्रृंखलाएँ (${otherVideos.length})` : `Other Helpful Video Series (${otherVideos.length})`}</h3>
                        <hr />
                    </div>
                    <div className='other-container grid grid-three-column gap-16'>
                        {otherVideos.map((elem) => {
                            const { id, title, subtitle, thumbnail, coursesCount } = elem;
                            const img_url = `${import.meta.env.VITE_IMAGES_BASE_PATH}${thumbnail.id}/${thumbnail.qualities[0]}/${import.meta.env.VITE_IMAGE_KEY}`;

                            return (
                                <div key={elem.id}>
                                    <Link
                                        to={'/'}
                                        onClick={() => {
                                            setDataId(id);
                                            window.scrollTo(0, 0);
                                        }}
                                    >
                                        <div className='cursor-pointer flex gap-4 md:gap-5 py-4 md:py-10 px-1 md:px-3 hover:bg-[#F1F5F9] rounded-md'>
                                            <div className='imageWrapper relative w-2/5 md:w-[150px] h-[90px] md:h-[80px]'>
                                                <img src={img_url} className='absolute h-full w-full scale-90 -mt-6 rounded-lg border-t-2 border-white' />
                                                <img src={img_url} className='absolute h-full w-full scale-95 -mt-3 rounded-lg border-t-2 border-white' />
                                                <img src={img_url} className='absolute h-full w-full  rounded-lg border-t-2 border-white' />
                                            </div>
                                            <div className='h-[100px]'>
                                                <h1 className='text-xl md:text-2xl font-semibold text-gray-700'>{title}</h1>
                                                <h3 className='text-xl md:text-2xl text-gray-700 my-3'>{subtitle}</h3>
                                                <h3 className='text-xl md:text-2xl text-gray-700'>
                                                    {coursesCount} {Language === 'en' ? 'Video Serise' : 'विडियो शृंखलाएँ'}
                                                </h3>
                                            </div>
                                        </div>
                                        <hr />
                                    </Link>
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
    @media (width < 768px) {
        .other-container {
            gap: 2rem;
        }
        .title {
            font-size: 1.5rem;
        }
    }
`;

OtherVideos.propTypes = {
    setDataId: PropTypes.func.isRequired,
};

export default OtherVideos;
