import {
  GoBriefcase,
  GoSignOut,
  GoChevronDown,
  GoChevronUp,
  GoRepoClone,
  GoHome,
  GoGraph,
} from "react-icons/go";
import { AiFillCreditCard,AiFillHome,AiOutlineHistory,AiFillExclamationCircle } from "react-icons/ai";
import { BiTransferAlt } from "react-icons/bi";


export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiFillHome />,
    iconClosed: <GoChevronDown />,
    iconOpened: <GoChevronUp />,
    /*subMenu: [
      {
        title: "Planes",
        path: "/home",
        icon: <AiOutlineHistory />,
      },
      {
        title: "Empresas",
        path: "/home",
        icon: <GoHome />,
      },
      {
        title: "Ayuda",
        path: "/home",
        icon: <AiFillExclamationCircle />,
      },
    ],*/
  },
  {
    title: "Mi cuenta",
    path: "cuenta",
    icon: <AiFillCreditCard />,
  },
  {
    title: "Transferir",
    path: "transferir",
    icon: <BiTransferAlt/>,
  },
  {
    title: "Historial",
    path: "historial",
    icon: <AiOutlineHistory/>,
  },


  /*{
    title: "Reportes",
    path: "/home",
    icon: <GoGraph />,
    iconClosed: <GoChevronDown />,
    iconOpened: <GoChevronUp />,
      subMenu: [
      {
        title: "Viajes ",
        path: "/home",
        icon: <GoRepoClone />,
      },
      {
        title: "Deliberys",
        path: "/home",
        icon: <GoHome />,
      },
      {
        title: "Encargos",
        path: "/home",
        icon: <GoBriefcase />,
      },
    ],
  },*/
  {
    title: "Cerrar Sesión",
    path: "/logout",
    icon: <GoSignOut />,
  },
];
