import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, description, icon }) => (
  <div className="w-[270px]">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 p-[2px] rounded-[20px] shadow-2xl hover:shadow-yellow-500/50 transition-shadow duration-300"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1.05,
          speed: 450
        }}
        className="relative bg-tertiary bg-opacity-80 backdrop-blur-sm rounded-[20px] py-6 px-6 min-h-[360px] flex flex-col justify-start items-center transition-all duration-300 hover:scale-[1.07] group"
      >
        {/* Icono */}
        <div className="w-16 h-16 flex justify-center items-center mb-4 p-4 bg-white rounded-full shadow-lg group-hover:scale-110 transition-all duration-300">
          <img
            src={icon}
            alt="service-icon"
            className="w-10 h-10 object-contain transition-transform transform group-hover:rotate-12 group-hover:scale-110"
          />
        </div>

        {/* Titulo */}
        <h3 className="text-white text-[22px] font-extrabold text-center mb-3 tracking-wide group-hover:text-yellow-400 transition-colors">
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-secondary text-[15px] text-center leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>

        {/* Botón "Saber más" con enlace a WhatsApp */}
        <a
          href="https://wa.me/543815430503?text=Hola, vengo desde la web para más información."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition-colors duration-300 mt-6">
            Saber más
          </button>
        </a>
      </Tilt>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <div className="sm:mt-20 bg-stars-bg bg-no-repeat bg-cover bg-bottom">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introducción</p>
          <h2 className={styles.sectionHeadText}>VISIÓN GENERAL</h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          En SoftFusion, nuestra misión es clara: brindar un apoyo integral a
          emprendedores ambiciosos como vos. Nos especializamos en ofrecer
          asesoramiento personalizado y soluciones adaptadas a tus necesidades
          individuales. Ya sea que estés en las etapas iniciales de tu negocio o
          busques expandirte en el mercado, estamos aquí para guiarte en cada
          paso del camino.
        </motion.p>

        <div className="sm:mt-20 bg-stars-bg bg-no-repeat bg-cover bg-bottom">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>NUESTRO</p>
            <h2 className={styles.sectionHeadText}>OBJETIVO</h2>
          </motion.div>

          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            En Soft queremos construir una empresa impulsada por el compromiso y
            la excelencia del equipo humano que hay detrás. Nuestro principal
            objetivo es el de favorecer la unión entre software y personas, para
            contribuir hacia un mundo donde la tecnología no suponga barreras
            sino facilidades en el día a día.
          </motion.p>
          <br></br>
          <motion.div
            variants={textVariant()}
            className="mt-5 flex lg:space-x-10 max-lg:flex-col max-lg:gap-5"
          >
            <section
              id="card1"
              className="card lg:w-1/2 lg:h-[250px] h-[300px] sm:w-5/6 mx-auto w-11/12"
            >
              <h2 className={styles.sectionHeadText}>MISIÓN</h2>
              <div className="card__content">
                <p className="card__title">Misión</p>
                <p className="card__description text-[18px] max-md:text-[16px]">
                  Simplificar la vida de las personas con soluciones
                  tecnológicas innovadoras y personalizadas, ofreciendo
                  experiencias de usuario excepcionales que generen valor e
                  impacto positivo en la sociedad.
                </p>
              </div>
            </section>
            <section
              id="card1"
              className="card lg:w-1/2 lg:h-[250px] h-[300px] sm:w-5/6 mx-auto w-11/12"
            >
              <h2 className={styles.sectionHeadText}>VISIÓN</h2>
              <div className="card__content">
                <p className="card__title">Visión</p>
                <p className="card__description text-[18px] max-md:text-[16px]">
                  Ser un referente en desarrollo de software, destacándonos por
                  nuestros productos y servicios diferenciales. Queremos ser la
                  opción preferida como proveedor tecnológico y como lugar de
                  trabajo.
                </p>
              </div>
            </section>
          </motion.div>
        </div>

        <div className="-mt-10" id="services"></div>

        <motion.div variants={textVariant()} className="mt-20">
          <p className={styles.sectionSubText}>Nuestros</p>
          <h2 className={styles.sectionHeadText}>SERVICIOS</h2>
        </motion.div>
        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
