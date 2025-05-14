import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';

const About_v2 = () => {
  return (
    <div className="sm:mt-20 bg-stars-bg bg-no-repeat bg-cover bg-bottom">
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className={styles.sectionSubText}>NUESTRO</p>
        <h2 className={styles.sectionHeadText}>OBJETIVO</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', 'spring', 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        En Soft queremos construir una empresa impulsada por el compromiso y la
        excelencia del equipo humano que hay detrás. Nuestro principal objetivo
        es el de favorecer la unión entre software y personas, para contribuir
        hacia un mundo donde la tecnología no suponga barreras sino facilidades
        en el día a día.
      </motion.p>

      <br />

      <motion.div
        variants={textVariant(0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
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
              Simplificar la vida de las personas con soluciones tecnológicas
              innovadoras y personalizadas, ofreciendo experiencias de usuario
              excepcionales que generen valor e impacto positivo en la sociedad.
            </p>
          </div>
        </section>
        <section
          id="card2"
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
  );
};

export default About_v2;
