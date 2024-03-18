import { MOCK, THEME } from ".";

export type Project = {
  title: string;
  date?: string;
  description: string;
  image: string;
  share?: {
    external?: string;
    instagram?: string;
    album?: string;
  };
  color: string;
};

export const PROJECTS: Array<Project> = [
  {
    title: "World Cafe",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
    image: "/project/world-cafe.png",
    color: THEME.COLORS.NASSA[100],
  },

  {
    title: "Playground",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    image: "/project/playground.png",
    color: THEME.COLORS.NASSA[200],
  },

  {
    title: "Sextival",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    image: "/project/sextival.png",
    color: THEME.COLORS.NASSA[300],
    share: {
      external: "https://sextival.it",
      instagram: "https://www.instagram.com/_sextival/",
    },
  },

  {
    title: "Prebuggiun",
    description:
      "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
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
