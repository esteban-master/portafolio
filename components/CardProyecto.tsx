import { Proyecto, tecnologiasData } from "../data";

export const CardProyecto = ({ proyecto }: { proyecto: Proyecto }) => {
  return (
    <div className="flex flex-col bg-white rounded-md overflow-hidden shadow-md">
      <div className="">
        <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
          <img
            src={proyecto.img}
            className="object-cover"
            alt="Foto de proyecto"
          />
        </a>
      </div>
      <div className="p-5 h-0 flex-1 flex flex-col ">
        <div className="h-0 flex-1">
          <a
            className="block text-xl font-bold hover:underline "
            href={proyecto.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {proyecto.title}
          </a>

          <p className="text-gray-700 font-light tracking-wide my-3">
            {proyecto.description}
          </p>
        </div>

        <Tecnologias tecnologias={proyecto.tecnologias} />
        <a
          className="bg-purple-500 hover:bg-purple-600 text-white uppercase w-full rounded-md p-2 text-center"
          href={proyecto.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir a Ver
        </a>
      </div>
    </div>
  );
};

const Tecnologias = ({ tecnologias }: any) => {
  return (
    <div className="flex flex-wrap my-3">
      {tecnologias.map((tec: string, i: number) => (
        <a
          key={i}
          target="_blank"
          rel="noopener noreferrer"
          href={tecnologiasData[tec].link}
          className={`${tecnologiasData[tec].color} block mr-1 my-1 text-white  text-xs font-semibold tracking-wide py-0.5 px-1 rounded-md`}
        >
          {tecnologiasData[tec].name}
        </a>
      ))}
    </div>
  );
};
