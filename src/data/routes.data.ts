export type Route = {
  path: string;
  label: string;
  hidden?: boolean;
  disabled?: boolean;
};

export const ROUTES: Array<Route> = [
  {
    path: "/",
    label: "Home",
    hidden: true,
  },
  {
    path: "/chi-siamo",
    label: "Chi Siamo",
  },
  {
    path: "/contatti",
    label: "Contatti",
  },
  {
    path: "/associazione",
    label: "Associazione",
  },
];
