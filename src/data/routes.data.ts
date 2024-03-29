export type RouteIcon = "phone" | "book-marked" | "users";

export type Route = {
  path: string;
  label: string;
  hidden?: boolean;
  disabled?: boolean;
  icon?: RouteIcon;
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
    icon: "users",
  },
  {
    path: "/contatti",
    label: "Contatti",
    icon: "phone",
  },
  {
    path: "/associazione",
    label: "Associazione",
    icon: "book-marked",
  },
];
