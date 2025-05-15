import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  VideoTestimonials,
  Works,
  Works2,
  StarsCanvas,
  ContactButton
} from './components';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Valores /> */}
        {/* <ImageAbout /> */}
        <VideoTestimonials />
        <Works />
        <Works2 />
        {/* <Team /> */}
        <Feedbacks />
        <ContactButton />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
