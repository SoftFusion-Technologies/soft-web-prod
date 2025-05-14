import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const testimonials = [
  {
    name: 'Nubia',
    role: 'Propietaria en Turu Fitness',
    text: 'SoftFusion se encargó de toda nuestra presencia digital: gestionaron nuestras redes, crearon contenido increíble y desarrollaron una página web que nos representa al 100%.',
    video: '/videos/nubia.mp4'
  },
  {
    name: 'Brisa',
    role: 'Coordinadora en HammerX',
    text: 'Gracias a SoftFusion ahora tenemos una plataforma que conecta con nuestros clientes y mejora la organización interna de nuestro gimnasio.',
    video: '/videos/brisa_reducido.mp4'
  },
  {
    name: 'Melisa e Ivanna',
    role: 'Farmacia San Martín',
    text: 'El trabajo con redes, diseño y presencia digital de SoftFusion transformó nuestra imagen y aumentó la conexión con nuestros clientes.',
    video: '/videos/melisa_ivanna_reducido.mp4'
  }
];

// Hook para detectar mobile
const useIsMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

const VideoTestimonialCard = ({ item, index, videoRefs, onPlay }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const direction = isMobile ? 100 : index % 2 === 0 ? -200 : 200;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isMobile ? 0 : direction,
        y: isMobile ? direction : 0
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ type: 'spring', duration: 0.8, delay: index * 0.3 }}
      viewport={{ once: true, amount: 0.4 }}
      className="rounded-xl overflow-hidden shadow-2xl w-[360px] h-[640px] relative"
    >
      <video
        ref={(el) => (videoRefs.current[index] = el)}
        src={item.video}
        className="w-full h-full object-cover"
        controls
        playsInline
        muted={index !== 0}
        autoPlay={index === 0}
        preload="auto"
        onPlay={() => onPlay(index)}
        aria-label={`Testimonio en video de ${item.name}`}
      />
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-left pointer-events-none">
        <p className="text-sm italic">"{item.text}"</p>
        <p className="font-semibold">{item.name}</p>
        <p className="text-sm text-gray-300">{item.role}</p>
      </div>
    </motion.div>
  );
};

const VideoTestimonials = () => {
  const videoRefs = useRef(new Array(testimonials.length).fill(null));

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  return (
    <section className="py-24 px-5 text-white" id="opiniones">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className={styles.sectionHeadText}>
          LO QUE OPINAN NUESTROS CLIENTES
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((item, index) => (
          <VideoTestimonialCard
            key={index}
            item={item}
            index={index}
            videoRefs={videoRefs}
            onPlay={handlePlay}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoTestimonials;
