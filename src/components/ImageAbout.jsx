import { android } from "../assets";
import { styles } from "../styles";

const features = [
  {
    name: "Push to deploy.",
    description:
      " En nuestro futuro, vemos la colaboración como clave, forjando asociaciones estratégicas sólidas que trasciendan expectativas y construyan relaciones a largo plazo. ",
  },
  {
    name: "SSL certificates.",
    description:
      "Anticipamos y abrazamos la evolución tecnológica, aspirando a ser pioneros en adaptabilidad e implementar nuevas tendencias para ofrecer soluciones siempre un paso adelante. ",
  },
  {
    name: "Database backups.",
    description:
      "La visión de SoftFusion es ser líderes en el desarrollo de software de calidad, destacándonos por la excelencia en cada línea de código. ",
  },
];

export default function ImageAbout() {
  return (
    <div className="bg-primary py-24 sm:py-32 lg:px-8">
        <div className="w-full sm:px-16 mx-auto flex max-lg:flex-col">
          <div className="max-w-2xl">
            <p className={styles.sectionHeadText}>Visión a Futuro.</p>
            <div className="mt-6 max-w-xl space-y-8 text-secondary text-[17px] leading-[30px] text-gray-400 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="">
                  <dd className="">{feature.description}</dd>
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm leading-8 text-red-200">
              En el horizonte de 5 años, forjaremos una nueva visión, con la
              certeza de haber conquistado las metas propuestas.
            </p>
          </div>
          <div className="mt-20 w-full flex justify-between items-center">
            <img
              src={android}
              alt="Product screenshot"
              className="sm:w-full  mx-auto rounded-2xl"
            />
          </div>
        </div>
    </div>
  );
}
