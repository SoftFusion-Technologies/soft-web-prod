import x from '../../public/x.svg';
import Logotipo from '../../public/Logotipo.svg';

const Footer = () => {
  return (
    <>
      <footer className="relative bg-primary z-10 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] pl-10 w-full">
        <div className="flex justify-center items-center">
          <div className=" flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <a href="/#" className="mb-6 block max-w-[160px]">
                  <img src={Logotipo} alt="logo" className="max-w-full" />
                </a>
                <p className="mb-7 text-base text-body-color dark:text-dark-6">
                  ᴅᴏɴᴅᴇ ʟᴀ ᴛᴇᴄɴᴏʟᴏɢíᴀ, ʟᴀ ɪɴɴᴏᴠᴀᴄɪóɴ ʏ ʟᴀꜱ ᴘᴇʀꜱᴏɴᴀꜱ ꜱᴇ ᴜɴᴇɴ.
                </p>
                <p className="flex items-center text-sm font-medium text-dark dark:text-white">
                  <span className="mr-3 text-primary">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_941_15626)">
                        <path
                          d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37502 3.46878C1.78127 4.12503 1.81252 5.46877 2.50002 7.18752C3.28127 9.15627 4.78127 11.3125 6.75002 13.2813C8.68752 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8438 18.2188 16.5313 17.625L18.0313 15.0625C18.0313 15.0313 18.0313 15.0313 18.0313 15L15.2813 13.1563C15.2813 13.1563 15.2188 13.1875 15.1563 13.2813L14.4688 14.2813C14.0313 14.9063 13.1875 15.0938 12.5625 14.6875C8.62502 12.25 6.18752 8.84377 5.31252 7.46877C4.90627 6.81252 5.06252 5.96878 5.68752 5.53128L6.81252 4.75002V4.71878L4.96877 1.96877C4.96877 1.93752 4.93752 1.93752 4.90627 1.96877L2.37502 3.46878Z"
                          fill="currentColor"
                        />
                        <path
                          d="M18.3125 8.90633C17.9375 8.90633 17.6563 8.62508 17.625 8.25008C17.375 5.09383 14.7813 2.56258 11.5938 2.34383C11.2188 2.31258 10.9063 2.00008 10.9375 1.59383C10.9688 1.21883 11.2813 0.906333 11.6875 0.937583C15.5625 1.18758 18.7188 4.25008 19.0313 8.12508C19.0625 8.50008 18.7813 8.84383 18.375 8.87508C18.375 8.90633 18.3438 8.90633 18.3125 8.90633Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15.2187 9.18755C14.875 9.18755 14.5625 8.93755 14.5312 8.56255C14.3437 6.87505 13.0312 5.56255 11.3437 5.3438C10.9687 5.31255 10.6875 4.93755 10.7187 4.56255C10.75 4.18755 11.125 3.9063 11.5 3.93755C13.8437 4.2188 15.6562 6.0313 15.9375 8.37505C15.9687 8.75005 15.7187 9.0938 15.3125 9.1563C15.25 9.18755 15.2187 9.18755 15.2187 9.18755Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_941_15626">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span>+54 9 3815 43-0503</span>
                </p>
              </div>
            </div>

            <LinkGroup header="Servicios">
              <NavLink link="#services" label="Desarrollo a Medida" />
              <NavLink link="#services" label="Gestión de Redes" />
              <NavLink link="#services" label="Software de Ventas" />
              <NavLink link="#services" label="Creación de Contenido" />
            </LinkGroup>

            <LinkGroup header="Empresa">
              <NavLink link="#about" label="Sobre Soft Fusion" />
              <NavLink link="#contact" label="Contacto y Soporte" />
              <NavLink link="#opiniones" label="Casos de Éxito" />
              <NavLink link="/politicas" label="Políticas y Privacidad" />
            </LinkGroup>

            <LinkGroup header="Enlaces Rápidos">
              <NavLink link="#work" label="Experiencia" />
              <NavLink link="#testimonial" label="Testimonios" />
              <NavLink link="/equipo" label="Conoce al Equipo" />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
                  Síguenos en
                </h4>
                <div className="mb-6 flex items-center">
                  {/* ICONO FACEBOOK */}
                  <a
                    href="https://www.facebook.com/share/1JAMUqUEaQ/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-[#1877F2] sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                      alt="Facebook"
                      width={14}
                      height={14}
                    />
                  </a>
                  {/* ICONO FACEBOOK */}

                  {/* ICONO WHATSAPP */}
                  <a
                    href="https://wa.me/5493815430503"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-green-500 hover:bg-green-500 hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-green-400 sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                      alt="WhatsApp"
                      width={14}
                      height={14}
                    />
                  </a>
                  {/* ICONO WHATSAPP */}

                  {/* ICONO INSTAGRAM */}
                  <a
                    href="https://www.instagram.com/softfusio ntechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark 
  hover:border-[#E1306C] hover:bg-[#E1306C] hover:text-white 
  dark:border-dark-3 dark:text-white dark:hover:border-pink sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                      alt="Instagram"
                      width={14}
                      height={14}
                    />
                  </a>
                  {/* ICONO INSTAGRAM */}

                  {/* ICONO LINKEDIN */}
                  <a
                    href="https://www.linkedin.com/in/soft-fusionsa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-blue-600 sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                      alt="LinkedIn"
                      width={14}
                      height={14}
                    />
                  </a>
                  {/* ICONO LINKEDIN */}
                </div>
                <p className="text-base text-body-color dark:text-dark-6">
                  &copy; 2025 SoftFusion
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-pink dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};
