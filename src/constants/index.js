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
  meta,
  starbucks,
  tesla,
  shopify,
  andina,
  hammer,
  garage,
  farcentral,
  travellive,
  ragnar,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Inicio",
  },
  {
    id: "about",
    title: "Acerca",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "team",
    title: "Equipo",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Sistemas de Gestión",
    description:
      "Incluye planear, controlar, y mejorar, aquellos elementos de tu organización con soluciones tecnológicas innovadoras y eficientes.",
    icon: mobile,
  },
  {
    title: "Paginas Web Gestionables",
    description:
      "Gestiona tu contenido sin complicaciones. Con nuestros sitios web administrables, mantén tu información siempre actualizada y relevante.",
    icon: backend,
  },
  {
    title: "Landing Page / E-commerce",
    description:
      "¿Sabías que una Landing Page bien diseñada puede aumentar tus conversiones hasta un 300%?",
    icon: web,
  },
  {
    title: "Crecimiento Sostenible",
    description:
      "Fomenta un crecimiento empresarial sólido y sostenible con nuestras soluciones tecnológicas.",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "La verdad, pensaba que armar un sitio web tan lindo como nuestro producto era imposible, pero con SoftFusion me demostraron que no hay imposibles. Estoy chocha con el resultado.",
    name: "Ana Rodríguez",
    designation: "CEO",
    company: "Onirico",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Mirá, en mi vida me crucé con pocas empresas que se preocupen posta por el éxito de sus clientes, y te juro que SoftFusion es una de ellas. Están siempre al pie del cañón, ¡un lujo!",
    name: "Martín González",
    designation: "Gerente",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Después de que SoftFusion le dio una manito mágica a nuestro sitio web, el tráfico se disparó un 50%. Ni te imaginás lo agradecidos que estamos. Estos pibes son unos genios, de verdad.",
    name: "Sandra Vazquez",
    designation: "CTO",
    company: "Pink Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HAMMERX ",
    description:
      "Creamos una página web personalizada que no solo refleja la esencia y la energía de HAMMER X, sino que también ofrece una experiencia de usuario impecable para atraer y retener clientes. .Además, desarrollamos un sistema interno innovador para el equipo de Hammer X",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hammer,
    source_code_link: "https://hammerx-sft-prod.netlify.app/",
  },
  {
    name: "GARAGE SHOWROOM",
    description:
      "Desarrollamos una aplicación personalizada que transforma la manera en que gestionan sus ventas y servicios.Nuestra aplicación incluye: Calculadora de Precios en Tiempo Real, obteniendo resultados precisos al instante. Facilita, Análiza y gráfica detallados de ventas",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: garage,
    source_code_link: "https://elgarage-calculadora.netlify.app/",
  },
  {
    name: "FARMACIA CENTRAL ",
    description:
      "Farmacia Central: Tu Aliada en Cuidado y Bienestar. Qué encontrarás en nuestra landing page?, ofrece a sus clientes valiosa información sobre cuidados de la piel y productos esenciales.Encontraras: Tips de Skincare: Consejos útiles y prácticos para el cuidado diario de la piel",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: farcentral,
    source_code_link: "https://main--farmcentralofi.netlify.app",
  },
];

const projects2 = [
  {
    name: "ANDINA",
    description:
      "Nuestra fábrica es un crisol de maestría y precisión, donde cada grano de azúcar es cuidadosamente creado para ofrecer la máxima calidad y sabor. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: andina,
    source_code_link: "https://azucar-andina.netlify.app/",
  },
  {
    name: "TRAVELLIVE",
    description:
      "Página oficial de Turismo y Hoteleria diseñada para ayudar a los viajeros a explorar diferentes destinos alrededor del mundo.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: travellive,
    source_code_link: "https://travelliveofficial.netlify.app/",
  },
  {
    name: "RAGNAR GYM",
    description:
      "Nuestra revolucionaria sala fitness tiene todo el equipamiento que necesitas para hacer deporte de una manera variada y sobre todo, efectiva.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: ragnar,
    source_code_link: "https://ragnar-gym.netlify.app/",
  },
];
export { services, technologies, experiences, testimonials, projects, projects2 };
