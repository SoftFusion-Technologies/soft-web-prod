import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, projects2 } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 400,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-[280px]'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
            loading="lazy"
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Algunos Trabajos</p>
        <h2 className={`${styles.sectionHeadText}`}>Proyectos.</h2>
      </motion.div>

      <div className="w-full flex bg-stars-bg bg-no-repeat bg-cover bg-center">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Los siguientes proyectos muestran nuestros conocimientos y experiencia
          a través de ejemplos reales. Cada proyecto se describe brevemente con
          enlaces a repositorios de código y demostraciones en vivo. Refleja
          nuestra capacidad para resolver problemas complejos, trabajar con
          distintas tecnologías y gestionar proyectos con eficacia.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center px-4 min-h-screen">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-7 justify-center px-4">
        {projects2.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
