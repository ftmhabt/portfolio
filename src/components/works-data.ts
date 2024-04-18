import shopImage from '../assets/shop.png';
import todoImage from '../assets/todo.png';
import calcImage from '../assets/calc.png';

const works = [
  {
    id:0,
    name: 'unraveled shop',
    description: 'an e-commerce web application built with React and TypeScript. It offers a comprehensive shopping experience with features for browsing, searching, adding items to cart, managing the cart, checkout and account functionalities.',
    imageUrl: shopImage
  },
  {
    id:1,
    name: 'todo app',
    description: 'This project offers a powerful to-do list application built entirely with JavaScript. It goes beyond basic create, read, delete operations by enabling you to organize your tasks with a tagging system.',
    imageUrl: todoImage
  },
  {
    id:2,
    name: 'calculator',
    description: 'This app provides a user-friendly calculator built entirely with JavaScript. It offers a convenient way to perform basic mathematical operations without relying on external libraries or frameworks.',
    imageUrl: calcImage
  }
]

export default works;