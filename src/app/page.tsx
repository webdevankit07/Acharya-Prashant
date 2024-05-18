import Container from '@/components/Container';
import Hero from '@/components/Hero/Hero';
import VideoSeries from '@/components/VideoSeries';
import Faq from '@/components/Faq';

const Home = () => {
    return (
        <main className='min-h-screen'>
            <Container>
                <Hero />
                {/* <VideoSeries /> */}
                <Faq />
            </Container>
        </main>
    );
};

export default Home;
