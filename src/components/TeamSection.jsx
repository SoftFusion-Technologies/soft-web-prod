import { styles } from "../styles";
import { balts, sabrina, benja, brito, rafa, rago, maxi } from "../assets";

const people = [
  {
    name: 'Benjamin Orellana',
    role: 'Founder / CEO / Technical Leader',
    imageUrl: benja
  },
  {
    name: 'Maximiliano Otta',
    role: 'Backend Developer / React ',
    imageUrl: maxi
  },
  {
    name: 'Lucas Brito',
    role: 'Backend Developer / .Net Developer',
    imageUrl: brito
  },
  {
    name: 'Benjamin Ragonese',
    role: 'Backend Developer / C# Developer',
    imageUrl: rago
  },
  {
    name: 'Rafael Peralta',
    role: 'Frontend Developer / Java Developer',
    imageUrl: rafa
  },
  {
    name: 'Baltazar Almiron',
    role: 'Backend Developer / React / Business ',
    imageUrl: balts
  },
  // {
  //   name: 'Ayllen Gramajo',
  //   role: 'Community Manager /Web Developer /',
  //   imageUrl: ayllen
  // },
  {
    name: 'Sabrina Paolini',
    role: 'Business / Marketing',
    imageUrl: sabrina
  }
  // More people...
];

export default function Team() {
  return (
    <div className="bg-primary max-sm:px-6 py-24 sm:py-32" id="team">
      <div className="w-full sm:px-16 mx-auto flex flex-col max-lg:grid max-w-7xl gap-x-8 gap-y-20 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className={`${styles.sectionHeadText}`}>Nuestro equipo.</h2>
          <p className={`text-secondary text-[17px] max-w-3xl leading-[30px]`}>
            Descubra quiénes son las personas detrás de nuestra misión y conozca
            cómo su experiencia y habilidades se combinan para hacer de
            SoftFusion un lugar exepcional para trabajar y colaborar.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid gap-x-8 gap-y-12 md:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-gray-500 hover:cursor-pointer hover:text-pink transition ease-in-out duration-200">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
