import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  shell,
  shelllogo,
  logofarmcentral,
  hammer,
  garage,
  farcentral,
  conectate,
  turufitness,
  rubiperfumeria,
  corsanera,
  muñequita,
  threejs,
  carlos
} from '../assets';

export const navLinks = [
  {
    id: 'home',
    title: 'Inicio'
  },
  {
    id: 'about',
    title: 'Acerca'
  },
  {
    id: 'services',
    title: 'Servicios'
  },
  {
    id: 'opiniones',
    title: 'Opiniones'
  },
  {
    id: 'work',
    title: 'Experiencia'
  },
  // {
  //   id: 'team',
  //   title: 'Equipo'
  // },
  {
    id: 'contact',
    title: 'Contacto'
  }
];

const services = [
  {
    title: 'Sistemas de Ventas y Gestión de Stock',
    description:
      'Optimizamos la operación de tu negocio con sistemas inteligentes que controlan ventas, stock, caja y clientes en tiempo real. Automatiza procesos y toma decisiones basadas en datos.',
    icon: mobile // cambia si tenés un ícono más representativo
  },
  {
    title: 'Sitios Web Gestionables y E-commerce',
    description:
      'Diseñamos sitios web autoadministrables, tiendas online y landing pages enfocadas en conversión. Control total del contenido y ventas desde cualquier dispositivo.',
    icon: backend
  },
  {
    title: 'Landing Pages que Venden',
    description:
      'Una buena primera impresión vende. Creamos landing pages estratégicas que potencian tus campañas y aumentan tus conversiones hasta un 300%.',
    icon: web
  },
  {
    title: 'Community Management & Filmmaker',
    description:
      'Gestionamos tus redes sociales de forma profesional, generamos contenido visual atractivo (videos, reels, fotografía) y aumentamos tu presencia digital.',
    icon: creator
  },
  {
    title: 'Crecimiento y Posicionamiento',
    description:
      'Aplicamos tecnología y estrategias de marketing digital para escalar tu negocio, fidelizar clientes y construir una marca sólida y memorable.',
    icon: creator // opcionalmente podés usar otro ícono para este
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'figma',
    icon: figma
  },
  {
    name: 'docker',
    icon: docker
  }
];

const testimonials = [
  {
    testimonial:
      'En primer lugar, destaco la presencia que tienen de darte soluciones en el momento, la apertura a los pedidos o cambios y el hecho de mantenerse en constante comunicación con nosotros. Por otro lado, la creatividad, el conocimiento técnico, seriedad y velocidad ya que en el caso nuestro que estamos haciendo un trabajo de tamaño importante lo hicimos bastante rápido a mi criterio, y también me sorprendió un poco el hecho de que cualquier solicitud que les hago, siempre hay una solución, a pesar de por ahí ser cosas que no son sencillas, Uds. no tienen dificultad para hacerlas efectivas. Por todo esto es que sin dudas  voy a seguir trabajando con ustedes y eligiendolos.',
    name: 'Carlos Garcia',
    designation: 'CEO',
    company: 'HAMMER X',
    image: carlos
  },
  {
    testimonial:
      'Queremos destacar lo increíble que ha sido trabajar con SoftFusion. Siempre atentos, disponibles para cualquier consulta o cambio, y sobre todo, comprometidos con brindar soluciones efectivas.',
    name: 'Constanza y Julieta',
    designation: 'Encargadas',
    company: 'SHELL SHOP',
    image: shelllogo
  },
  {
    testimonial:
      'Destacar que nos ayudaron a crear una página web que captura perfectamente la esencia de lo que significa la farmacia de mi papá para nosotros. Estuvieron siempre disponibles para cualquier cosa que necesitáramos, brindando un servicio cálido y profesional.',
    name: 'Ana Sofia',
    designation: 'Dermatóloga',
    company: 'Farmacia Central',
    image: logofarmcentral
  }
];

const projects = [
  {
    name: 'HAMMERX ',
    description:
      'Creamos una página web personalizada que no solo refleja la esencia y la energía de HAMMER X, sino que también ofrece una experiencia de usuario impecable para atraer y retener clientes. .Además, desarrollamos un sistema interno innovador para el equipo de Hammer X',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mysql',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: hammer,
    source_code_link: 'https://www.hammer.ar/'
  },
  {
    name: 'CONECTATE GROUP',
    description:
      'Desarrollamos la página oficial de la empresa líder en servicios de Internet, con un diseño exclusivo de Soft Fusion. La plataforma ofrece soluciones de conectividad confiables para hogares y negocios, asegurando una experiencia accesible e intuitiva.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mysql',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: conectate,
    source_code_link: 'https://conectategroup.ar/'
  },
  {
    name: 'FARMACIA CENTRAL ',
    description:
      'Farmacia Central: Tu Aliada en Cuidado y Bienestar. Qué encontrarás en nuestra landing page?, ofrece a sus clientes valiosa información sobre cuidados de la piel y productos esenciales.Encontraras: Tips de Skincare: Consejos útiles y prácticos para el cuidado diario de la piel',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mysql',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: farcentral,
    source_code_link: 'https://farmaciacentral7.com.ar/'
  }
];

const projects2 = [
  {
    name: 'SHELL SHOP MONTEROS',
    description:
      'Descubre la combinación perfecta de café, comodidad y servicio en Shell Shop, en soft, diseñamos una página interactiva, intuitiva y muy atractiva para SHELL SHOP.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'css',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: shell,
    source_code_link: 'https://shellshopmonteros.com.ar/'
  },
  {
    name: 'GARAGE SHOWROOM',
    description:
      'Desarrollamos una aplicación personalizada que transforma la manera en que gestionan sus ventas y servicios.Nuestra aplicación incluye: Calculadora de Precios en Tiempo Real, obteniendo resultados precisos al instante. Facilita, Análiza y gráfica detallados de ventas',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient'
      },
      {
        name: 'css',
        color: 'pink-text-gradient'
      }
    ],
    image: garage,
    source_code_link: 'https://elgarage-calculadora.netlify.app/'
  },
  {
    name: 'TURU FITNESS GYM',
    description:
      'Nuestra revolucionaria sala fitness tiene todo el equipamiento que necesitas para hacer deporte de una manera variada y sobre todo, efectiva.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient'
      },
      {
        name: 'css',
        color: 'green-text-gradient'
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient'
      }
    ],
    image: turufitness,
    source_code_link: 'https://turufitness.netlify.app/'
  },
  {
    name: 'RUBI PERFUMERÍA',
    description:
      'Diseñamos una tienda online elegante y funcional para Rubi Perfumería, especializada en productos capilares, perfumería y marroquinería.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'tailwindcss', color: 'green-text-gradient' },
      { name: 'ecommerce', color: 'pink-text-gradient' }
    ],
    image: rubiperfumeria, // Asegurate de importar esta imagen arriba
    source_code_link: 'https://rubiperfumeria.com.ar/'
  },
  {
    name: 'CORSANERA INDUMENTARIA',
    description:
      'Corsanera es una tienda de ropa con identidad propia. Creamos una web moderna que potencia su presencia y facilita la experiencia de compra.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'css', color: 'green-text-gradient' },
      { name: 'ecommerce', color: 'pink-text-gradient' }
    ],
    image: corsanera, // Asegurate de importar esta imagen arriba
    source_code_link: 'https://corsanera.com.ar/'
  },
  {
    name: 'MUÑEQUITA - ALQUILER DE VESTIDOS',
    description:
      'Diseñamos una web estética y funcional para Muñequita, especializada en alquiler de vestidos y ropa femenina. Simple, rápida y visual.',
    tags: [
      { name: 'html', color: 'blue-text-gradient' },
      { name: 'css', color: 'green-text-gradient' },
      { name: 'javascript', color: 'pink-text-gradient' }
    ],
    image: muñequita, // Asegurate de importar esta imagen arriba
    source_code_link: 'https://xn--muequita-e3a.com.ar/'
  }
];


export {
  services,
  technologies,
  testimonials,
  projects,
  projects2
};
