import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas, StarsCanvas } from './canvas';
import Logo3d from '../assets/LogoRosaBR.svg';
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';
import { StarsCanvas2 } from '../components/canvas';
import BannerVideo from '/videos/softvideo.mp4';

const Hero = () => {
  return (
    <section
      className="relative w-5/6 h-screen mx-auto bg-stars-bg bg-no-repeat bg-cover bg-fixed"
      id="home"
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center gap-5`}
      >
        <StarsCanvas2 />

        <div className="w-full">
          <h1
            className={`${styles.heroHeadText} text-white text-center lg:text-left`}
          >
            Hi <span className="text-pink">!</span> we're
            <Typewriter
              options={{ wrapperClassName: 'text-[#FF006C]', loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('SOFTFUSION')
                  .pauseFor(2000)
                  .deleteChars(9)
                  .pauseFor(1000)
                  .typeString('OFTFUSION')
                  .pauseFor(1000)
                  .start();
              }}
            />
          </h1>
          <p className="mt-2 text-white-100 text-center lg:text-left text-[20px]">
            ¡Impulsá tu negocio y llevalo al mundo digital con nosotros!
          </p>
        </div>

        {/* Video dentro del mockup tipo iPhone PRO MEJORADO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative w-[260px] md:w-[320px] lg:w-[420px] flex justify-center items-center group"
        >
          {/* Glow dinámico detrás */}
          <div className="absolute inset-0 rounded-[3rem] bg-pink opacity-20 blur-3xl group-hover:opacity-40 transition-all duration-700"></div>

          {/* Contenedor del iPhone */}
          <div className="relative w-full rounded-[2.5rem] bg-gradient-to-b from-gray-900 to-black p-3 shadow-2xl border-[6px] border-gray-800">
            {/* Notch superior */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gradient-to-b from-gray-600 to-gray-800 rounded-b-2xl z-20 shadow-md"></div>

            {/* Botones laterales simulados */}
            <div className="absolute left-[-6px] top-1/3 w-1.5 h-10 bg-gray-700 rounded-r-full"></div>
            <div className="absolute right-[-6px] top-1/2 w-1.5 h-16 bg-gray-700 rounded-l-full"></div>

            {/* Pantalla / Video */}
            <div className="rounded-[2rem] overflow-hidden">
              <motion.video
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                autoPlay
                loop
                muted
                playsInline
                src={BannerVideo}
                className="w-full h-auto block relative z-10 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
