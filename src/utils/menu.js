import { list, check, todo, home } from "./icons";

const menu = [
  {
    id: 1,
    title: "Todas as Tarefas",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Importante!",
    icon: list,
    link: "/importante",
  },
  {
    id: 3,
    title: "Completados!",
    icon: check,
    link: "/completados",
  },
  {
    id: 4,
    title: "A fazer",
    icon: todo,
    link: "/incompletos",
  },
];

export default menu;
