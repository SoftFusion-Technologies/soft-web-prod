import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import { styles } from '../../styles';

const FaqsComunes = () => {
  return (
    <div className="sm:mt-20 bg-stars-bg bg-no-repeat bg-cover bg-bottom">
      {/* Título centrado */}
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-10"
      >
        <p className={styles.sectionSubText}>PREGUNTAS</p>
        <h2 className={styles.sectionHeadText}>FRECUENTES DE NOSOTROS</h2>
      </motion.div>
      <motion.div
        variants={textVariant(0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-5 flex lg:space-x-10 max-lg:flex-col max-lg:gap-5"
      >
        <section
          id="card1"
          className="card w-11/12 sm:w-5/6 mx-auto h-[600px] sm:h-[550px] md:h-[500px] lg:h-[400px] xl:h-[350px]"
        >
          <h2 className={styles.sectionHeadText}>PÁGINAS WEBS</h2>
          <div className="card__content">
            <p className="card__title">¿Qué páginas webs hacemos?</p>
            <p className="card__description text-[18px] max-md:text-[16px]">
              Nos especializamos en el desarrollo de páginas web sencillas,
              eficientes y adaptadas a las necesidades de cada negocio.
              Ofrecemos:
              <ul className="list-disc list-inside mt-2 mb-4 space-y-1">
                <li>
                  <strong>Landing Pages:</strong> Páginas diseñadas
                  específicamente para aumentar ventas y captar leads de manera
                  efectiva.
                </li>
                <li>
                  <strong>Páginas Web Administrables:</strong> Permiten al
                  cliente gestionar y actualizar el contenido de manera fácil y
                  rápida, sin necesidad de conocimientos técnicos.
                </li>
                <li>
                  <strong>Páginas Web Informativas:</strong> Ideales para
                  empresas que buscan presentar su negocio, servicios o
                  productos de manera clara y atractiva.
                </li>
              </ul>
              Cada página web que desarrollamos está pensada para mejorar la
              presencia online de tu negocio, facilitar la interacción con tus
              clientes y potenciar las conversiones.
            </p>
          </div>
        </section>
        <section
          id="card2"
          className="card w-11/12 sm:w-5/6 mx-auto h-[600px] sm:h-[550px] md:h-[500px] lg:h-[400px] xl:h-[350px]"
        >
          <h2 className={styles.sectionHeadText}>SISTEMAS</h2>
          <div className="card__content">
            <p className="card__title">
              ¿Qué sistemas computacionales hacemos?
            </p>
            <p className="card__description text-[18px] max-md:text-[16px]">
              También desarrollamos sistemas de gestión a medida para optimizar
              y automatizar procesos clave en tu empresa. Ofrecemos soluciones
              personalizadas para mejorar el control y la eficiencia en áreas
              como:
              <ul className="list-disc list-inside mt-2 mb-4 space-y-1">
                <li>
                  <strong>Gestión de Ventas:</strong> Control de ventas,
                  clientes, facturación y reportes.
                </li>
                <li>
                  <strong>Gestión de Stock:</strong> Control de inventarios,
                  pedidos automáticos y alertas.
                </li>
                <li>
                  <strong>Gestión de Clientes (CRM):</strong> Administración de
                  contactos, historial y seguimiento.
                </li>

                <li>
                  <strong>Gestión de Proyectos:</strong> Asignación de tareas,
                  coordinación y seguimiento.
                </li>
              </ul>
              Estos sistemas te ayudan a reducir tareas manuales, evitar errores
              y tomar decisiones más informadas.
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default FaqsComunes;
