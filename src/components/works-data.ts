// import calcImage from "../assets/calc.png";
import cvImage from "../assets/cv.png";
import shopImage from "../assets/shop.png";
import tableImage from "../assets/table.png";
// import todoImage from "../assets/todo.png";
import manager1 from "../assets/manager1.png";
import manager2 from "../assets/manager2.png";
const works = [
  {
    id: 6,
    name: "project manager",
    description:
      "A comprehensive project management tool that helps teams plan, track, and collaborate on projects effectively.",
    imageUrls: [manager2, manager1],
    tools: [
      "next.js",
      "typescript",
      "react",
      "tailwindcss",
      "shadcn/ui",
      "prisma",
      "postgresql",
    ],
    liveUrl: "https://project-manager-ftm.vercel.app/",
    repoUrl: "https://github.com/ftmhabt/project-manager",
  },
  {
    id: 5,
    name: "find a table",
    description:
      "A table reservation website that allows users to select a restaurant and check table availability for a specific date and time. Implemented user authorization for secure access.",
    imageUrls: [tableImage],
    tools: [
      "next.js",
      "typescript",
      "react",
      "tailwindcss",
      "supabase",
      "prisma",
      "postgressql",
    ],
    liveUrl: "https://find-a-table.vercel.app/",
    repoUrl: "https://github.com/ftmhabt/find-a-table",
  },
  {
    id: 1,
    name: "unraveled shop",
    description:
      "an e-commerce web application built with React and TypeScript. It offers a comprehensive shopping experience with features for browsing, searching, adding items to cart, managing the cart, checkout and account functionalities.",
    imageUrls: [shopImage],
    tools: [
      "react",
      "react-router-dom",
      "react-toastify",
      "tailwindcss",
      "fake store api",
      "vite",
    ],
    liveUrl: "https://the-unraveled-shop.vercel.app/",
    repoUrl: "https://github.com/ftmhabt/unraveled-shop",
  },
  {
    id: 2,
    name: "cv builder",
    description:
      "This project is a web application built using React and react-pdf that allows users to create and customize their resumes. It provides a user-friendly interface for entering information such as contact details, work experience, education, and skills. The generated resume can be downloaded as a PDF document, ready for sharing with potential employers.",
    imageUrls: [cvImage],
    tools: ["react", "css", "react-pdf"],
    liveUrl: "https://ftm-cv-builder.vercel.app/",
    repoUrl: "https://github.com/ftmhabt/cv-builder",
  },
  // {
  //   id: 3,
  //   name: "todo app",
  //   description:
  //     "This project offers a powerful to-do list application built entirely with JavaScript. It goes beyond basic create, read, delete operations by enabling you to organize your tasks with a tagging system.",
  //   imageUrls: [todoImage],
  //   tools: ["html", "css", "pure js", "webpack", "moment"],
  //   liveUrl: "https://ftmhabt.github.io/todo-list/",
  //   repoUrl: "https://github.com/ftmhabt/todo-list",
  // },
  // {
  //   id: 4,
  //   name: "calculator",
  //   description:
  //     "This app provides a user-friendly calculator built entirely with JavaScript. It offers a convenient way to perform basic mathematical operations without relying on external libraries or frameworks.",
  //   imageUrls: [calcImage],
  //   tools: ["html", "css", "pure js"],
  //   liveUrl: "https://ftmhabt.github.io/calculator/",
  //   repoUrl: "https://github.com/ftmhabt/calculator",
  // },
];

export default works;
