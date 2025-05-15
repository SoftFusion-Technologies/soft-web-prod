import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import { styles } from '../../styles';

const FaqsInstagram = () => {
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
        <h2 className={styles.sectionHeadText}>FRECUENTES DE INSTAGRAM</h2>
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
          <h2 className={styles.sectionHeadText}>HISTORIAS</h2>
          <div className="card__content">
            <p className="card__title">¿Qué es una Historia en Instagram?</p>
            <p className="card__description text-[18px] max-md:text-[16px]">
              Una Historia en Instagram es una publicación de foto o video que
              se muestra durante 24 horas desde el momento en que es subida. Es
              un formato ideal para compartir contenido espontáneo, mostrar el
              detrás de escena de tu negocio, anunciar promociones, novedades o
              generar interacción directa con tu audiencia.
              <br></br>
              📌 En nuestros planes, la cantidad de historias que subimos por
              semana depende del paquete contratado. Adaptamos el contenido y la
              frecuencia según tus objetivos y la estrategia definida para tu
              marca.{' '}
            </p>
          </div>
        </section>
        <section
          id="card2"
          className="card w-11/12 sm:w-5/6 mx-auto h-[600px] sm:h-[550px] md:h-[500px] lg:h-[400px] xl:h-[350px]"
        >
          <h2 className={styles.sectionHeadText}>POST</h2>
          <div className="card__content">
            <p className="card__title">¿Qué es un Post en Instagram?</p>
            <p className="card__description text-[18px] max-md:text-[16px]">
              Un Post en Instagram es una publicación permanente que se muestra
              en el perfil de tu cuenta. Puede tener fines informativos,
              educativos, promocionales o de posicionamiento de marca. Es ideal
              para comunicar contenido relevante, mostrar tus productos o
              servicios y fortalecer la identidad visual de tu negocio.
              <br></br>
              📌 En nuestros planes, la cantidad de publicaciones semanales
              varía según el paquete contratado. Nos enfocamos en crear
              contenido atractivo y estratégico para conectar con tu público,
              aumentar el alcance y generar conversiones.
            </p>
          </div>
        </section>
      </motion.div>
      <motion.div
        variants={textVariant(0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-5 flex lg:space-x-10 max-lg:flex-col max-lg:gap-5"
      >
        <section
          id="card3"
          className="card w-11/12 sm:w-5/6 mx-auto h-[600px] sm:h-[550px] md:h-[500px] lg:h-[400px] xl:h-[350px]"
        >
          <h2 className={styles.sectionHeadText}>REEL</h2>
          <div className="card__content">
            <p className="card__title"> ¿Qué es un Reel en Instagram?</p>
            <p className="card__description text-[18px] max-md:text-[16px]">
              Un Reel en Instagram es un video corto, vertical, de entre 15 y 90
              segundos, que la plataforma prioriza para alcanzar nuevas
              audiencias. Su estilo dinámico lo hace ideal para compartir
              contenido creativo, educativo o inspirador que capte la atención
              rápidamente.
              <br></br>
              📌 En nuestros planes, incluimos la grabación, edición y creación
              de guiones personalizados. Adaptamos cada Reel a tu marca,
              potenciando tu alcance y engagement con ideas como: presentación
              de productos, tips, detrás de escena, testimonios de clientes ¡y
              mucho más!
            </p>
          </div>
        </section>
        <section
          id="card4"
          className="card w-11/12 sm:w-5/6 mx-auto h-[600px] sm:h-[550px] md:h-[500px] lg:h-[400px] xl:h-[350px]"
        >
          <h2 className={styles.sectionHeadText}>META BUSINESS SUITE</h2>
          <div className="card__content">
            <p className="card__title">
              ¿Qué es Meta Business Suite y cómo me ayuda con Instagram?
            </p>
            <p className="card__description text-[18px] max-md:text-[16px]">
              Meta Business Suite es una plataforma gratuita de Meta (Facebook e
              Instagram) que permite gestionar de forma profesional tus redes
              sociales desde un solo lugar. Con ella podés: Programar
              publicaciones, historias y reels en Instagram y Facebook.
              Responder mensajes y comentarios desde una sola bandeja de
              entrada. Acceder a estadísticas sobre el rendimiento de tus
              publicaciones. Crear campañas publicitarias y segmentar
              audiencias.
              <br></br>
              🔧 En nuestros servicios incluimos la configuración de tu cuenta
              en Meta Business Suite, conectamos correctamente tus perfiles de
              Instagram y Facebook y te enseñamos a utilizarlo si querés
              manejarlo por tu cuenta. Según el plan contratado, incluso nos
              encargamos de programar y monitorear todo por vos.
            </p>
          </div>
        </section>
      </motion.div>
      <motion.div
        variants={textVariant(0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-5 flex lg:space-x-10 max-lg:flex-col max-lg:gap-5"
      >
        <section
          id="card5"
          className="card w-11/12 sm:w-5/6 mx-auto h-[600px] sm:h-[550px] md:h-[500px] lg:h-[400px] xl:h-[350px]"
        >
          <h2 className={styles.sectionHeadText}>FACEBOOK ADS</h2>
          <div className="card__content">
            <p className="card__title">
              ¿Por qué es importante usar Facebook Ads para promocionar mi
              Instagram?
            </p>
            <p className="card__description text-[18px] max-md:text-[16px]">
              Facebook Ads es la plataforma de publicidad que incluye Instagram
              y permite crear campañas segmentadas para llegar a tu público
              ideal. Así podés aumentar la visibilidad, conseguir seguidores y
              potenciar ventas. En nuestros planes, te ayudamos a configurar y
              gestionar campañas de Facebook Ads para maximizar tus resultados.{' '}
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default FaqsInstagram;
