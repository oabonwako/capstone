import Highlights from './Highlights';
import HeroSection from './HeroSection';
import Testmonials from './Testimonials';
import About from './About';

function HomePage() {
    return(
        <div>
            <HeroSection/>
            <Highlights/>
            <Testmonials/>
            <About/>
        </div>
    );
}

export default HomePage;