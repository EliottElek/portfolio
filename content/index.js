import Kifekoi from "../public/assets/projects/kifekoi/kifekoi1.png";
import Wazzup from "../public/assets/projects/wazzup/wazzup1.png";
import Chateex from "../public/assets/projects/chateex/chateex1.png";
import Cds from "../public/assets/projects/couteaux-du-sud/cds1.png";
import Alliage from "../public/assets/projects/alliage/alliage1.png";
import MuiLogo from "../public/assets/logos/mui.png";
import ReactLogo from "../public/assets/logos/react.png";
import GraphQl from "../public/assets/logos/graphql.png";
import Apollo from "../public/assets/logos/apollo.png";
import Node from "../public/assets/logos/node.png";
import Babylon from "../public/assets/logos/babylon.png";
import SocketIoLogo from "../public/assets/logos/socketio.png";
import Trpc from "../public/assets/logos/trpc.png";
import Commercejs from "../public/assets/logos/commercejs.png";
import NextJs from "../public/assets/logos/nextjs.png";
import Tailwind from "../public/assets/logos/tailwind.png";
import Typescript from "../public/assets/logos/typescript.png";
import Prisma from "../public/assets/logos/prisma.png";
export const projects = [
  {
    slug: "kifekoi",
    name: "Kifekoi",
    image: Kifekoi,
    demo: "https://kifekoi.netlify.app",
    github: "https://github/eliottelek/kifekoi",
    hours: "400",
    backTechs: [
      { name: "NodeJS + Express", logo: Node },
      { name: "GraphQL", logo: GraphQl },
      { name: "Apollo Server", logo: Apollo },
    ],
    frontTechs: [
      { name: "ReactJS", logo: ReactLogo },
      { name: "Material UI", logo: MuiLogo },
      { name: "Apollo Client", logo: Apollo },
    ],
    description: `Kifekoi is a project management application, ment to be a collaborative platform. It features drag & drop features (with react-beautiful-dnd by Atlassian). The application works as follows : each client has projects, and each project has multiple panels. Each panel or "table" has status for each of their actions. You can add, delete and update actions, add panels to the project or status for each panel. You can change the state of each actions by drag & drop for example. `,
  },
  {
    slug: "wazzup",
    name: "Wazzup",
    image: Wazzup,
    hours: "70",
    // demo: "https://kifekoi.netlify.app",
    github: "https://github.com/EliottElek/chat-app-t3",
    backTechs: [
      { name: "Prisma", logo: Prisma },
      { name: "TRPC", logo: Trpc },
      { name: "Typescript", logo: Typescript },
    ],
    frontTechs: [
      { name: "NextJS", logo: NextJs },
      { name: "Tailwindcss", logo: Tailwind },
      { name: "Typescript", logo: Typescript },
    ],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nibh lorem, consectetur at ante facilisis, hendrerit sollicitudin nunc. Integer id sodales tellus, vitae venenatis tortor. Vivamus tincidunt nibh sed diam porta consectetur. Nullam sollicitudin, odio et ornare dictum, urna ex vulputate urna, nec tempor dolor quam ut nibh. Nullam non ligula eu tellus mattis vehicula vitae nec ipsum. Suspendisse eget ex metus. Quisque in molestie mauris. Quisque scelerisque magna et ante euismod egestas.
    Nam vulputate justo vitae elit viverra pellentesque. Sed tellus est, pulvinar in ipsum eget, volutpat convallis ligula. Donec at ullamcorper tortor. Donec dapibus ipsum id lacus molestie imperdiet. Fusce a felis fringilla, hendrerit sem vestibulum, sagittis turpis. Donec feugiat justo pharetra consectetur tempor. Duis eget pellentesque nunc, eget lacinia dui. Nulla dapibus, enim vitae finibus ullamcorper, nisi tortor consequat ligula, a malesuada leo ipsum eget est. Donec ut ex sed felis mattis luctus.`,
  },
  {
    slug: "chateex",
    name: "Chateex",
    image: Chateex,
    hours: "350",
    demo: "https://chateex.netlify.app/",
    github: "https://github.com/EliottElek/ChatAppEce",
    backTechs: [
      { name: "NodeJS + Express", logo: Node },
      { name: "GraphQL", logo: GraphQl },
      { name: "Socket.io (server)", logo: SocketIoLogo },
    ],
    frontTechs: [
      { name: "ReactJS", logo: ReactLogo },
      { name: "Material UI", logo: MuiLogo },
      { name: "Socket.io (client)", logo: SocketIoLogo },
    ],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nibh lorem, consectetur at ante facilisis, hendrerit sollicitudin nunc. Integer id sodales tellus, vitae venenatis tortor. Vivamus tincidunt nibh sed diam porta consectetur. Nullam sollicitudin, odio et ornare dictum, urna ex vulputate urna, nec tempor dolor quam ut nibh. Nullam non ligula eu tellus mattis vehicula vitae nec ipsum. Suspendisse eget ex metus. Quisque in molestie mauris. Quisque scelerisque magna et ante euismod egestas.
    Nam vulputate justo vitae elit viverra pellentesque. Sed tellus est, pulvinar in ipsum eget, volutpat convallis ligula. Donec at ullamcorper tortor. Donec dapibus ipsum id lacus molestie imperdiet. Fusce a felis fringilla, hendrerit sem vestibulum, sagittis turpis. Donec feugiat justo pharetra consectetur tempor. Duis eget pellentesque nunc, eget lacinia dui. Nulla dapibus, enim vitae finibus ullamcorper, nisi tortor consequat ligula, a malesuada leo ipsum eget est. Donec ut ex sed felis mattis luctus.`,
  },
  {
    slug: "couteaux-du-sud",
    name: "Couteaux du sud",
    hours: "250",
    demo: "https://couteaux-du-sud.netlify.app",
    github: "https://github.com/EliottElek/e-commerce",
    image: Cds,
    backTechs: [{ name: "CommerceJS", logo: Commercejs }],
    frontTechs: [
      { name: "ReactJS", logo: ReactLogo },
      { name: "Material UI", logo: MuiLogo },
      { name: "BabylonJS", logo: Babylon },
    ],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nibh lorem, consectetur at ante facilisis, hendrerit sollicitudin nunc. Integer id sodales tellus, vitae venenatis tortor. Vivamus tincidunt nibh sed diam porta consectetur. Nullam sollicitudin, odio et ornare dictum, urna ex vulputate urna, nec tempor dolor quam ut nibh. Nullam non ligula eu tellus mattis vehicula vitae nec ipsum. Suspendisse eget ex metus. Quisque in molestie mauris. Quisque scelerisque magna et ante euismod egestas.
    Nam vulputate justo vitae elit viverra pellentesque. Sed tellus est, pulvinar in ipsum eget, volutpat convallis ligula. Donec at ullamcorper tortor. Donec dapibus ipsum id lacus molestie imperdiet. Fusce a felis fringilla, hendrerit sem vestibulum, sagittis turpis. Donec feugiat justo pharetra consectetur tempor. Duis eget pellentesque nunc, eget lacinia dui. Nulla dapibus, enim vitae finibus ullamcorper, nisi tortor consequat ligula, a malesuada leo ipsum eget est. Donec ut ex sed felis mattis luctus.`,
  },
  {
    slug: "alliage",
    name: "Alliage",
    hours: "500",
    demo: "https://www.alliage.io/",
    image: Alliage,
    backTechs: [{ name: "NodeJS", logo: Node }],
    frontTechs: [
      { name: "NextJS", logo: NextJs },
      { name: "Tailwindcss", logo: Tailwind },
    ],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nibh lorem, consectetur at ante facilisis, hendrerit sollicitudin nunc. Integer id sodales tellus, vitae venenatis tortor. Vivamus tincidunt nibh sed diam porta consectetur. Nullam sollicitudin, odio et ornare dictum, urna ex vulputate urna, nec tempor dolor quam ut nibh. Nullam non ligula eu tellus mattis vehicula vitae nec ipsum. Suspendisse eget ex metus. Quisque in molestie mauris. Quisque scelerisque magna et ante euismod egestas.
    Nam vulputate justo vitae elit viverra pellentesque. Sed tellus est, pulvinar in ipsum eget, volutpat convallis ligula. Donec at ullamcorper tortor. Donec dapibus ipsum id lacus molestie imperdiet. Fusce a felis fringilla, hendrerit sem vestibulum, sagittis turpis. Donec feugiat justo pharetra consectetur tempor. Duis eget pellentesque nunc, eget lacinia dui. Nulla dapibus, enim vitae finibus ullamcorper, nisi tortor consequat ligula, a malesuada leo ipsum eget est. Donec ut ex sed felis mattis luctus.`,
  },
];
export const paths = [
  { params: { project: "kifekoi" } },
  { params: { project: "wazzup" } },
  { params: { project: "chateex" } },
  { params: { project: "couteaux-du-sud" } },
  { params: { project: "alliage" } },
];
