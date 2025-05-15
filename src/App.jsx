import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Plans from './Pages/Plans';
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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Navbar />
                  <Hero />
                </div>
                <About />
                <VideoTestimonials />
                <Works />
                <Works2 />
                <Feedbacks />
                <ContactButton />
                <Tech />
                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                  <Footer />
                </div>
              </>
            }
          />
          <Route path="/planes" element={<Plans />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
