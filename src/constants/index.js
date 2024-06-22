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
    title: "Asesoramiento Estratégico",
    description: "Recibe orientación experta para desarrollar estrategias efectivas que impulsen el éxito de tu negocio.",
    icon: web,
  },
  {
    title: "Desarrollo de Sistemas",
    description: "Crea soluciones tecnológicas innovadoras y eficientes con nuestro equipo de desarrolladores de sistemas.",
    icon: mobile,
  },
  {
    title: "Capacitación en Ventas",
    description: "Potencia tus habilidades de ventas con nuestro programa de capacitación especializado.",
    icon: backend,
  },
  {
    title: "Crecimiento Sostenible",
    description: "Fomenta un crecimiento empresarial sólido y sostenible con nuestras soluciones integrales.",
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
    name: "Andina",
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
    name: "Travellive",
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
    name: "Ragnar",
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

export { services, technologies, experiences, testimonials, projects };
