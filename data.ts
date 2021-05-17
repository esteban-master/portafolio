export const tecnologiasData: TecnologiasData = {
  react: {
    name: "React",
    link: "https://reactjs.org/",
  },
  "react-query": {
    name: "React-Query",

    link: "https://react-query.tanstack.com/",
  },
  nestjs: { name: "NestJs", link: "https://nestjs.com/" },
  tailwind: {
    name: "Tailwind",

    link: "https://tailwindcss.com/",
  },
  redux: {
    name: "Redux",

    link: "https://redux.js.org/",
  },
};

export interface TecnologiasData {
  [key: string]: {
    name: string;
    link: string;
  };
}

export type Tecnologias =
  | "react"
  | "react-query"
  | "nestjs"
  | "tailwind"
  | "redux";

export type Proyecto = {
  id: number;
  title: string;
  img: string;
  link: string;
  description: string;
  tecnologias: Tecnologias[];
};

export const proyectos: Proyecto[] = [
  {
    id: 1,
    title: "Clon de pagina web Ripley.cl",
    img: "https://images.ctfassets.net/aq13lwl6616q/6udavWr92VjiqMM6NQIhRv/ac773f5ac629045efbd0453582a927fb/deno_cover_photo.png?w=800&h=451&q=50&fm=webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit undeminus ratione! Rerum odit optio similique dolorem, quod voluptatum explicabo sint quos cum?",
    link: "https://martket-ts-nestjs.vercel.app/productos/609615b9bc8b7410d78f7c0d",
    tecnologias: ["react", "nestjs", "react-query"],
  },
  {
    id: 2,
    title: "Clon de pagina web Ripley.cl",
    img: "https://images.ctfassets.net/aq13lwl6616q/6udavWr92VjiqMM6NQIhRv/ac773f5ac629045efbd0453582a927fb/deno_cover_photo.png?w=800&h=451&q=50&fm=webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ",
    link: "https://martket-ts-nestjs.vercel.app/productos/609615b9bc8b7410d78f7c0d",
    tecnologias: ["react", "nestjs", "react-query", "redux", "tailwind"],
  },
  {
    id: 3,
    title: "Clon de pagina web Ripley.cl",
    img: "https://images.ctfassets.net/aq13lwl6616q/6udavWr92VjiqMM6NQIhRv/ac773f5ac629045efbd0453582a927fb/deno_cover_photo.png?w=800&h=451&q=50&fm=webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impeditasd asdas das das sad ddadsdasdasdad asdasdas dasdasdasd aadassa aaaasasdasdasdass ",
    link: "https://martket-ts-nestjs.vercel.app/productos/609615b9bc8b7410d78f7c0d",
    tecnologias: ["react", "nestjs", "react-query"],
  },
  {
    id: 4,
    title: "Clon de pagina web Ripley.cl",
    img: "https://images.ctfassets.net/aq13lwl6616q/6udavWr92VjiqMM6NQIhRv/ac773f5ac629045efbd0453582a927fb/deno_cover_photo.png?w=800&h=451&q=50&fm=webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impeditasd asdas das das sad ddadsdasdasdad asdasdas dasdasdasd aadassa aaaasasdasdasdass ",
    link: "https://martket-ts-nestjs.vercel.app/productos/609615b9bc8b7410d78f7c0d",
    tecnologias: ["react", "nestjs", "react-query"],
  },
];
