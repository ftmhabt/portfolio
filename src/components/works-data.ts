// import calcImage from "../assets/calc.png";
import tableImage from "../assets/table.png";
// import todoImage from "../assets/todo.png";
import manager1 from "../assets/manager1.png";
import manager2 from "../assets/manager2.png";
import shop1 from "../assets/shop1.png";
import shop2 from "../assets/shop2.png";

const works = [
  {
    id: 6,
    name: "Full E-commerce Website [In Progress]",
    description:
      "A full-featured e-commerce platform with a user dashboard, admin panel, and integrated blog. Users can browse and purchase products, manage their accounts, and administrators can oversee products, orders, and content.",
    imageUrls: [shop1, shop2],
    tools: [
      "next.js",
      "typescript",
      "react",
      "tailwindcss",
      "shadcn/ui",
      "prisma",
      "postgresql",
    ],
    liveUrl: "https://shopftmh.vercel.app/",
    repoUrl: "https://github.com/ftmhabt/full-shop-prototype",
  },
  {
    id: 6,
    name: "Project Manager",
    description:
      "A project management tool designed to help teams plan, track, and collaborate on projects.",
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
    name: "Table Reservation",
    description:
      "A restaurant table reservation website where users can select a restaurant, check table availability, and book for a specific date and time. Includes secure user authorization.",
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
  // {
  //   id: 1,
  //   name: "unraveled shop",
  //   description:
  //     "An e-commerce web application offering a seamless shopping experience with product browsing, searching, cart management, checkout, and user account features.",
  //   imageUrls: [shopImage],
  //   tools: [
  //     "react",
  //     "react-router-dom",
  //     "react-toastify",
  //     "tailwindcss",
  //     "fake store api",
  //     "vite",
  //   ],
  //   liveUrl: "https://the-unraveled-shop.vercel.app/",
  //   repoUrl: "https://github.com/ftmhabt/unraveled-shop",
  // },
  // {
  //   id: 2,
  //   name: "cv builder",
  //   description:
  //     "A web application for creating and customizing resumes. Users can enter personal information, work experience, education, and skills, then download a PDF version.",
  //   imageUrls: [cvImage],
  //   tools: ["react", "css", "react-pdf"],
  //   liveUrl: "https://ftm-cv-builder.vercel.app/",
  //   repoUrl: "https://github.com/ftmhabt/cv-builder",
  // },
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
