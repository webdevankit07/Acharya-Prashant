import Container from '@/components/Container';
import Faq from '@/components/Faq';
import Hero from '@/components/Hero';
import VideoSeries from '@/components/VideoSeries';

const Home = () => {
    return (
        <main className='min-h-screen'>
            <Container>
                <Hero />
                {/* <VideoSeries />
                <Faq /> */}
            </Container>
        </main>
    );
};

export default Home;
