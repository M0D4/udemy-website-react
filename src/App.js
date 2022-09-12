import './App.css';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home';
import NavBar from './components/NavBar';
import CoursePage from './components/CoursePage';


const course = {
  id: '1',
  title: 'Learn Python: The Complete Python Programming Course',
  "description": "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
  "Last Updated": "9/2015",
  "language": "English",
  "Closed Caption": "English",
  instructor: 'maximlian',
  stars: 4.4,
  students: 19000,
  price: 199.99,
  bestSeller: true,
  image: "https://img-b.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
  category: "Python",
  numberOfRatings: 18000,
  "what you will learn": [
    "Have an intermediate skill level of Python programming.",
    "Use the Jupyter Notebook Environment.",
    "Use the numpy library to create and manipulate arrays.",
    "Use the pandas module with Python to create and structure data.",
    "Learn how to work with various data formats within python, including: JSON,HTML, and MS Excel Worksheets.",
    "Create data visualizations using matplotlib and the seaborn modules with python.",
    "Have a portfolio of various data analysis projects."
  ]
}
const course2 = {
  id: '2',
  title: 'Learning Python for Data Analysis and Visualization',
  "description": "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
  "Last Updated": "9/2015",
  "language": "English",
  "Closed Caption": "English",
  instructor: 'Jose Portilla',
  stars: "3",
  students: 1000,
  price: 319.99,
  bestSeller: false,
  image: "https://img-b.udemycdn.com/course/240x135/396876_cc92_7.jpg",
  numberOfRatings: 950
}


const initialCards = [
  { id: 1, course: { ...course } },
  { id: 2, course: { ...course } },
  { id: 3, course: { ...course } },
  { id: 4, course: { ...course2 } },
  { id: 5, course: { ...course2 } }
];

const coursesSectionTitle = "Expand your career opportunities with Python";

const coursesSectionDescription = `Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful
 language.
 Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine
 learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of
 courses that will appeal to...`;

const category = 'Python';


var [cards, setCards] = [];

function App() {
  [cards, setCards] = useState(initialCards);

  return (
    <>

      <NavBar onFilter={(searchText) => handleFilter(searchText)}></NavBar>
      {/* <Home cards={cards}
        coursesSectionTitle={coursesSectionTitle}
        coursesSectionDescription={coursesSectionDescription}
        category={category}></Home> */}
      <CoursePage course={course}></CoursePage>
      <div style={{ height: 1500 }}></div>
    </>
  );
}

export default App;


const handleFilter = (searchText) => {
  var newCards = { ...cards };
  newCards = newCards.filter((card) => /*card.category.trim().toLowerCase() === category.trim().toLowerCase()
      && */card.title.toLowerCase().indexOf(searchText.trim().toLowerCase()) !== -1);
  setCards(newCards);
}