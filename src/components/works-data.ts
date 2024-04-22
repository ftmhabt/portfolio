import shopImage from '../assets/shop.png';
import todoImage from '../assets/todo.png';
import calcImage from '../assets/calc.png';

const works = [
  {
    id:1,
    name: 'unraveled shop',
    description: 'an e-commerce web application built with React and TypeScript. It offers a comprehensive shopping experience with features for browsing, searching, adding items to cart, managing the cart, checkout and account functionalities.',
    imageUrl: shopImage,
    tools:['vite','react','react-dom','react-router-dom','react-toastify','tailwindcss','fake store api'],
    liveUrl:'https://the-unraveled-shop.vercel.app/',
    repoUrl:'https://github.com/ftmhabt/unraveled-shop',
  },
  {
    id:2,
    name: 'todo app',
    description: 'This project offers a powerful to-do list application built entirely with JavaScript. It goes beyond basic create, read, delete operations by enabling you to organize your tasks with a tagging system.',
    imageUrl: todoImage,
    tools:['html','css','java script','webpack','moment'],
    liveUrl:'https://ftmhabt.github.io/todo-list/',
    repoUrl:'https://github.com/ftmhabt/todo-list',
  },
  {
    id:3,
    name: 'calculator',
    description: 'This app provides a user-friendly calculator built entirely with JavaScript. It offers a convenient way to perform basic mathematical operations without relying on external libraries or frameworks.',
    imageUrl: calcImage,
    tools:['html','css','pure java script'],
    liveUrl:'https://ftmhabt.github.io/calculator/',
    repoUrl:'https://github.com/ftmhabt/calculator',
  }
]

export default works;