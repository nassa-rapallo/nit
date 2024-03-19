import { MOCK, THEME } from ".";

export type ProjectShare = {
  external: string;
  instagram: string;
  album: string;
};

export type Project = {
  title: string;
  dates?: Array<string>;
  description: string;
  image: string;
  share?: Partial<ProjectShare>;
  color: string;
};

// TODO: complete Nassaland entry

export const PROJECTS: Array<Project> = [
  {
    title: "World Cafè",
    dates: ["4 Settembre 2021"],
    description: `Come per tutte le Nasse, il World Cafè è stato il nostro **evento fondativo**. Un incontro tra persone, idee e progetti.  Un’occasione per parlare della nostra città, dei suoi problemi, dei suoi pregi e di ciò che vorremmo fare per migliorarla (E anche per ballare, mangiare e bere, ovviamente!)`,
    image: "/project/world-cafe.png",
    color: THEME.COLORS.NASSA[100],
  },

  {
    title: "Playground",

    dates: ["11 Novembre 2021"],
    description: `
Il playground è la più grande opera di riqualificazione urbana a cui Nassa Rapallo ha partecipato, eseguita all'interno del progetto **CA.R.U.GI**.

Il lavoro inizia dalla primavera, con una co-progettazione con alcunə ragazzə del Centro Giovani. Durante i mesi estivi il campo viene prima ripulito, poi tracciato con il disegno ideato e infine colorato.
`,
    image: "/project/playground.png",
    color: THEME.COLORS.NASSA[200],
  },

  {
    title: "Sextival",
    dates: ["25 & 26 Giugno 2022", "17 & 18 Giugno 2023"],
    description: `
Dal nostro **World Cafè** una delle necessità che più chiaramente esce è quella della salute sessuale. Nei mesi successivi, in modo organico e (forse) un po' pazzo nasce il Sextival. Un appuntamento, anzi una giornata, anzi due giorni di interventi, workshop e panel sul tema della salute sessuale.

Il **Sextival** è un successo sia per il suo contenuto didattico sia per quello aggregativo; si è ripetuto nella seconda edizione del 2023 e si ripeterà nella sua terza edizione. 
`,
    image: "/project/sextival.png",
    color: THEME.COLORS.NASSA[300],
    share: {
      external: "https://sextival.it",
      instagram: "https://www.instagram.com/_sextival/",
    },
  },

  {
    title: "Prebuggiun",
    dates: ["17 settembre 2022"],
    description: `
All'inizio dell'estate del 2022, con il Sextival alle spalle, organizziamo il **Prebuggiun**, *un festival spontaneo sulla crisi climatica*.

È il primo grande evento che organizziamo a più mani - e sono tante: il Prebuggiun è organizzato insieme alle altre due **Nasse (Chiavari e Sestri)**, **Fridays For Future Genova** e **Extinction Rebellion Genova**.
`,
    image: "/project/prebuggiun.png",
    color: THEME.COLORS.NASSA[400],
    share: {
      instagram: "https://www.instagram.com/prebuggiun/",
    },
  },

  {
    title: "Nassaland",
    description:
      "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
    image: MOCK.IMAGE,
    color: THEME.COLORS.NASSA[500],
  },
];
