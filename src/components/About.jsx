import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, description, icon }) => (
  <div className="w-[250px]">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="relative bg-tertiary rounded-[20px] py-5 px-6 min-h-[320px] flex justify-start items-center flex-col transition-all duration-300 hover:scale-105 group"
      >
        <img
          src={icon}
          alt="service-icon"
          className="w-16 h-16 object-contain mb-4"
        />

        <h3 className="text-white text-[20px] font-bold text-center mb-2">
          {title}
        </h3>

        <p className="text-secondary text-[14px] text-center line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
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
          <h2 className={styles.sectionHeadText}>Visión General.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          En SoftFusion, nuestra misión es clara: brindar un apoyo integral a emprendedores ambiciosos como vos. Nos especializamos en ofrecer asesoramiento personalizado y soluciones adaptadas a tus necesidades individuales. Ya sea que estés en las etapas iniciales de tu negocio o busques expandirte en el mercado, estamos aquí para guiarte en cada paso del camino.
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10 justify-center'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
