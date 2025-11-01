import { ListItem } from "@/components/list-item";
;

export const socialLinks = {
  Github: "https://github.com/chann44",
  Twitter: "https://twitter.com/44_chann",
  Linkedin: "https://www.linkedin.com/in/vikash-manda-69a231200/",
};

export const work: ListItem[] = [
  {
    title: "Qiro",
    description: "Full Stack Engineer",
    right: "Feb-2024 - present",
    detailedDescription:
      "Building Qiro Finance, a DeFi platform focused on yield optimization and liquidity management. Working on full-stack development using Next.js, React, and TypeScript for the frontend, and developing robust backend services. Implementing smart contract integrations and creating seamless user experiences for complex financial operations.",
  },
  {
    title: "Levitate",
    description: "Full Stack Engineer",
    logo: "/work/levi.jpeg",
    right: "2023 - 2024",
    detailedDescription:
      "Building Inflection Network - a next-generation blockchain network accelerating stablecoin adoption for the next billion users. Developed a comprehensive ecosystem enabling instant onboarding with just mobile numbers (no complex wallets or gas fees), gasless global stablecoin transactions, and economic identity profiles. Architected scalable infrastructure supporting worldwide adoption across multiple countries with 10K+ stablecoin miners. Implemented reward systems allowing users to earn USDC directly in their wallets through ecosystem engagement.",
    link: "https://www.inflection.network/",
  },
  {
    title: "Webloominc",
    description: "Frontend Engineer (Freelance)",
    logo: "/work/webloom.jpeg",
    right: "June-2023 - Dec-2023",
    detailedDescription:
      "Delivered high-quality frontend solutions for various client projects as a freelance engineer. Built responsive web applications using React, Next.js, and Tailwind CSS. Collaborated with designers and backend teams to create pixel-perfect implementations. Optimized application performance and ensured cross-browser compatibility.",
  },
  {
    title: "Fetch",
    description: "Frontend Engineer",
    logo: "/work/fetch.jpeg",
    right: "Aug-2022 - Jan-2023",
    detailedDescription:
      "Developed and maintained frontend features for Fetch's web platform. Worked extensively with React and modern JavaScript frameworks to build interactive user interfaces. Implemented state management solutions, optimized bundle sizes, and improved overall application performance. Collaborated in an agile environment with cross-functional teams.",
  },
  {
    title: "Komet",
    description: "Frontend Engineer Intern",
    right: "Feb-2022 - June-2022",
    logo: "/work/komet.jpeg",
    detailedDescription:
      "Gained hands-on experience in frontend development while contributing to Komet's web applications. Learned industry best practices, participated in code reviews, and implemented UI components following design specifications. Worked with React, TypeScript, and modern development tools to deliver features in a collaborative team environment.",
  },
];

export const projects = [
  {
    name: "Pollor",
    link: "https://github.com/chann44/pollor",
    Icon: "/project/pollor.svg",
    desc: " New Generation of polls ",
  },
  {
    name: "4-4chan",
    link: "https://github.com/chann44/4-4chan",
    Icon: "/project/chan.svg",
    desc: " Modren 4 chan with best ui ",
  },

  {
    name: "Drox",
    link: "https://www.npmjs.com/package/drox",
    Icon: "/project/drox.svg",
    desc: "Deal with all public assets in a react project as javascript objects no need of typing long paths ",
  },
  {
    name: ".gitignore",
    link: "https://www.npmjs.com/package/@chan44/gitignore",
    Icon: "/project/git.svg",
    desc: "a package to genrate git ignore files for your project",
  },
  {
    name: "The Info",
    link: "https://github.com/chann44/TheInfo",
    Icon: "/project/news.svg",
    desc: " a website to get latest news ",
  },
];
