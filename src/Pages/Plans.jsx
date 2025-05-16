import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import FaqsInstagram from './Components/FaqsInstagram';
import FaqsComunes from './Components/FaqsComunes';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import PlanesCards from './Components/PlanesCards.jsx';
const Plans = () => {
  const [mostrarFaqs, setMostrarFaqs] = useState(false);

  const faqsRef = useRef(null); // Referencia a la sección FAQ

  const handleMostrarFaqs = () => {
    setMostrarFaqs(true);
    setTimeout(() => {
      const topOffset =
        faqsRef.current?.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: topOffset + 20, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="bg-stars-bg bg-no-repeat bg-cover bg-bottom py-12 px-4 sm:px-8">
      {/* Título centrado */}
      <Navbar></Navbar>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-10 mt-10"
      >
        <p className={styles.sectionSubText}>Conocé</p>
        <h2 className={styles.sectionHeadText}>NUESTROS PLANES</h2>
      </motion.div>

      {/* Contenido alineado a la izquierda */}
      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <div className="w-full sm:w-[80%] lg:w-[60%] text-left">
          <h3 className="text-2xl text-[#FF006C] font-semibold uppercase mb-4">
            Quiénes Somos
          </h3>

          <p className="text-white text-[17px] leading-relaxed mb-4">
            Somos una empresa dedicada a potenciar negocios a través de
            soluciones digitales.
          </p>
          {/* Servicios */}
          <h4 className="uppercase text-xl font-semibold text-[#FFB800] mb-3">
            Ofrecemos:
          </h4>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>🧑💻 Desarrollo de Páginas Webs modernas y optimizadas</li>
            <li>
              📱 Gestión y creación de contenido estratégico en redes sociales
            </li>
            <li>
              📈 Consultoría en ventas y captación de clientes potenciales
            </li>
            <li>💼 Profesionalización de tu presencia digital</li>
            <li>
              ⚙️ Configuración y gestión de campañas en Facebook Ads y Google
              Ads
            </li>
            <li>📊 Optimización y administración de Meta Business Suite</li>
            <li>🚀 Impulso de marca y posicionamiento orgánico y pago</li>
          </ul>
          <h4 className="uppercase text-xl font-semibold text-[#5e1ca5] mb-3">
            Experiencia:
          </h4>
          <p className="text-white text-[17px] leading-relaxed">
            Contamos con varios años de experiencia en el mercado, trabajando
            con clientes en toda Argentina y en países de la región. Ofrecemos
            un servicio profesional, comprometido y adaptado a las necesidades
            de cada proyecto.
          </p>
        </div>
      </motion.div>

      {/* Pregunta y FAQs */}
      {/* Pregunta y FAQs */}
      <div className="mt-10 text-center">
        {!mostrarFaqs ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF006C] text-white px-6 py-3 rounded-full font-semibold transition"
            onClick={handleMostrarFaqs}
          >
            ¿Te gustaría ver las preguntas frecuentes?
          </motion.button>
        ) : (
          <motion.div
            ref={faqsRef}
            variants={fadeIn('', '', 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10"
          >
            <FaqsInstagram />
            <FaqsComunes />
          </motion.div>
        )}
      </div>

      <PlanesCards></PlanesCards>
      <Footer></Footer>
    </section>
  );
};

export default Plans;
