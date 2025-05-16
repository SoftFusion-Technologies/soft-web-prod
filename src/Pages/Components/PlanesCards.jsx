import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

const cuentasGestionadas = [
  'TuruFitness',
  'Rubi Perfumería',
  'DogTorkain',
  'Farmacia San Martín',
  'Soft Fusion Technologies'
];

const sitiosWebDesarrollados = [
  'Conectate Group',
  'MM Skin Studio',
  'Corsanera',
  'Hammer',
  'Shell Shop Monteros',
  'Soft Fusion Technologies',
  'Farmacia Central 7',
  'El Garage - Calculadora',
  'TuruFitness'
];

const planes = [
  {
    id: 1,
    nombre: "Plan Emprendedor",
    beneficios: [
      "3 Historias semanales",
      "1 Post semanal",
      "No incluye Reel",
      "1 Capacitación mensual online personalizada (1h)",
      "Asesoramiento en la configuración de Instagram Empresas, Facebook para Negocios y WhatsApp Business",
      "Optimización de perfiles y biografías",
      "Diseño de imagen de marca para RRSS (colores, estilo, voz)",
    ],
    descripcion: `Plan básico de gestión de redes sociales ideal para emprendedores que quieren empezar a potenciar su presencia online.
    
Importante:
- No incluye creación de página web.
- ¡BONO ESPECIAL! A partir del tercer mes de suscripción ininterrumpida, Soft Fusion te obsequia una página web totalmente diseñada y adaptada a tu negocio, lista para potenciar tu presencia online.
- No incluye sistemas de gestión.
- ¡PREMIO A TU FIDELIDAD! A partir del cuarto mes de suscripción continua, accedés a un descuento exclusivo del 30% en el desarrollo de un sistema de gestión personalizado para tu emprendimiento.`,
    condiciones: [
      "El valor del plan es de $80.000 mensuales.",
      "Pago entre el día 1 y 10: $80.000",
      "Pago entre el 11 y 15: $82.000",
      "Desde el día 16: +$800 por día de recargo",
    ],
    objetivo:
      "Facilitar a emprendedores el inicio y crecimiento en redes sociales con asesoramiento y contenido personalizado.",
    instagram:
      "Ayudar a emprendedores a posicionar su marca en Instagram con contenido básico, capacitación y asesoramiento en herramientas.",
    contacto: "+54 9 381 543-0503",
  },
  {
    id: 4,
    nombre: 'Plan Premium',
    beneficios: [
      '7 Historias semanales',
      '5 Posts semanales',
      '4 Reels semanales',
      'Creación de página web',
      'Sistema de gestión a medida'
    ],
    descripcion:
      'Cobertura integral para tu negocio con soluciones digitales completas que impulsan tu marca.',
    condiciones: [
      'El valor del plan es de $200.000 mensuales.',
      'Pago entre el día 1 y 10: $200.000',
      'Pago entre el 11 y 15: $205.000',
      'Desde el día 16: +$1.000 por día de recargo'
    ],
    objetivo:
      'Brindar soluciones digitales integrales para mejorar la presencia online y potenciar el crecimiento.',
    instagram:
      'Generar contenido atractivo y relevante en Instagram para fortalecer la presencia de marca, aumentar la interacción con la audiencia y captar nuevos seguidores.',
    contacto: '+54 9 381 543-0503'
  }
  // Agregá más planes acá...
];

const PlanesCards = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {planes.map((plan) => (
          <motion.div
            key={plan.id}
            variants={fadeIn('up', 'spring', 0.2 * plan.id, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-[#FF006C] mb-2">
              {plan.nombre}
            </h3>
            <p className="text-white mb-4">{plan.descripcion}</p>

            <ul className="list-disc list-inside text-white space-y-1 mb-4">
              {plan.beneficios.map((item, idx) => (
                <li key={idx}>✅ {item}</li>
              ))}
            </ul>

            <p className="text-sm text-white italic mb-2 font-semibold">
              Condiciones:
            </p>
            <ul className="list-disc list-inside text-white space-y-1 mb-4">
              {plan.condiciones.map((cond, idx) => (
                <li key={idx}>📌 {cond}</li>
              ))}
            </ul>

            <p className="text-sm text-white italic mb-4">{plan.objetivo}</p>

            <p className="text-white font-semibold mb-1">
              Objetivo en Instagram:
            </p>
            <p className="text-white mb-2 italic">{plan.instagram}</p>

            <a
              href={`https://wa.me/${plan.contacto.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#1ebe5c] transition"
            >
              Consultar por WhatsApp
            </a>
          </motion.div>
        ))}
      </div>

      {/* Sección especial que aparece solo una vez */}
      <div className="mt-16 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 shadow-xl">
        <h3 className="text-2xl font-bold text-[#FF006C] mb-4">
          Cuentas gestionadas
        </h3>
        <ul className="list-disc list-inside text-white space-y-1 mb-8">
          {cuentasGestionadas.map((cuenta, idx) => (
            <li key={idx}>📷 {cuenta}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-bold text-[#FF006C] mb-4">
          Sitios web desarrollados
        </h3>
        <ul className="list-disc list-inside text-white space-y-1">
          {sitiosWebDesarrollados.map((web, idx) => (
            <li key={idx}>🌐 {web}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanesCards;
