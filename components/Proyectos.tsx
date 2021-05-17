import { CardProyecto } from "./CardProyecto";
import { Proyecto } from "../data";

export const Proyectos = ({ proyectos }: { proyectos: Proyecto[] }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-5">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {proyectos.map((pro) => (
          <CardProyecto key={pro.id} proyecto={pro} />
        ))}
      </div>
    </section>
  );
};
