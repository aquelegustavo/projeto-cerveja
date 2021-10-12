type Link = {
  id: string;
  path: string;
  name: string;
  icon: string;
  className?: string;
};

export const links: Array<Link> = [
  {
    id: "home",
    path: "/",
    name: "Início",
    icon: "home",
  },
  {
    id: "process",
    path: "/process",
    name: "Processo produção",
    icon: "developer_board",
  },
  {
    id: "profile",
    path: "/profile",
    name: "Perfil",
    icon: "account_circle",
  },

  {
    id: "logout",
    path: "/logout",
    name: "Sair",
    icon: "logout",
    className: "bottomLink",
  },
];
