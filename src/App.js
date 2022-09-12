import './App.css';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home';
import NavBar from './components/NavBar';
import CoursePage from './components/CoursePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from './components/PageNotFound';


const course = {
  id: '1',
  title: 'Learn Python: The Complete Python Programming Course',
  "description": "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
  "Last Updated": "9/2015",
  "language": "English",
  "Closed Caption": "English",
  instructor: {
    "name": "maximlian",
    "title": "Head of Data Science at Pierian Training",
    "rating": "4.6",
    "reviews": "941,533",
    "students": "3,015,690",
    "courses": "54",
    "description": "Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science, Machine Learning and Python Programming. He has publications and patents in various fields such as microfluidics, materials science, and data science. Over the course of his career he has developed a skill set in analyzing data and he hopes to use his experience in teaching and data science to help other people learn the power of programming, the ability to analyze data, and the skills needed to present the data in clear and beautiful visualizations. Currently he works as the Head of Data Science for Pierian Training and provides in-person data science and python programming training courses to employees working at top companies, including General Electric, Cigna, The New York Times, Credit Suisse, McKinsey and many more. Feel free to check out the website link to find out more information about training offerings.",
    "image": "https://img-b.udemycdn.com/user/200_H/9685726_67e7_4.jpg"
  },
  rating: {
    "average": 4.4,
    "1": 2,
    "2": 3,
    "3": 13,
    "4": 36,
    "5": 64
  },
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
  ],
  "length": "15 sections • 110 lectures • 21h 5m total length",
  "requirements": [
    "Basic math skills.",
    "Basic to Intermediate Python Skills",
    "Have a computer (either Mac, Windows, or Linux)",
    "Desire to learn!",
  ],
  "content": [
    "Chapter 1",
    "Chapter 2",
    "Chapter 3"
  ],
  "reviews": [
    {
      "name": "Bryan P.",
      "rating": "3",
      "date": "a month ago",
      "description": "His voice in each video can either be audible or barely audible. If it was consistent then it would be fine, but I have to keep adjusting the volume."
    },
    {
      "name": "Redon D.",
      "rating": "4",
      "date": "a month ago",
      "description": "I found the course to be amazing, the instructor was clear and easy to follow. The instructions were easily available and covered almost every thing I could have asked for. The Q&A section was helpful as well. One negative aspect was that it did not exhaust all the topic especially from the data visualization were matplotlib did not even have a section."
    }
  ]
}
const course2 = {
  id: '2',
  title: 'Learning Python for Data Analysis and Visualization',
  "description": "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
  "Last Updated": "9/2015",
  "language": "English",
  "Closed Caption": "English",
  instructor: {
    "name": 'Jose Portilla',
    "title": "Head of Data Science at Pierian Training",
    "rating": "4.6",
    "reviews": "941,533",
    "students": "3,015,690",
    "courses": "54",
    "description": "Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science, Machine Learning and Python Programming. He has publications and patents in various fields such as microfluidics, materials science, and data science. Over the course of his career he has developed a skill set in analyzing data and he hopes to use his experience in teaching and data science to help other people learn the power of programming, the ability to analyze data, and the skills needed to present the data in clear and beautiful visualizations. Currently he works as the Head of Data Science for Pierian Training and provides in-person data science and python programming training courses to employees working at top companies, including General Electric, Cigna, The New York Times, Credit Suisse, McKinsey and many more. Feel free to check out the website link to find out more information about training offerings.",
    "image": "https://img-b.udemycdn.com/user/200_H/9685726_67e7_4.jpg"
  },
  rating: {
    "average": 4.4,
    "1": 2,
    "2": 3,
    "3": 13,
    "4": 36,
    "5": 64
  },
  students: 1000,
  price: 319.99,
  bestSeller: false,
  image: "https://img-b.udemycdn.com/course/240x135/396876_cc92_7.jpg",
  numberOfRatings: 950,
  category: "Python",
  "what you will learn": [
    "Have an intermediate skill level of Python programming.",
    "Use the Jupyter Notebook Environment.",
    "Use the numpy library to create and manipulate arrays.",
    "Use the pandas module with Python to create and structure data.",
    "Learn how to work with various data formats within python, including: JSON,HTML, and MS Excel Worksheets.",
    "Create data visualizations using matplotlib and the seaborn modules with python.",
    "Have a portfolio of various data analysis projects."
  ],
  "length": "15 sections • 110 lectures • 21h 5m total length",
  "requirements": [
    "Basic math skills.",
    "Basic to Intermediate Python Skills",
    "Have a computer (either Mac, Windows, or Linux)",
    "Desire to learn!",
  ],
  "content": [
    "Chapter 1",
    "Chapter 2",
    "Chapter 3"
  ],
  "reviews": [
    {
      "name": "Bryan P.",
      "rating": "3",
      "date": "a month ago",
      "description": "His voice in each video can either be audible or barely audible. If it was consistent then it would be fine, but I have to keep adjusting the volume."
    },
    {
      "name": "Redon D.",
      "rating": "4",
      "date": "a month ago",
      "description": "I found the course to be amazing, the instructor was clear and easy to follow. The instructions were easily available and covered almost every thing I could have asked for. The Q&A section was helpful as well. One negative aspect was that it did not exhaust all the topic especially from the data visualization were matplotlib did not even have a section."
    }
  ]
}

var courses = {
  "1": { ...course },
  "2": { ...course2 }
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

      <BrowserRouter>
        <NavBar onFilter={(searchText) => handleFilter(searchText)}></NavBar>
        <Routes>
          <Route path={"/"} element={<Home cards={cards}
            coursesSectionTitle={coursesSectionTitle}
            coursesSectionDescription={coursesSectionDescription}
            category={category}></Home>} />
          <Route path="/course/:id" element={<><CoursePage courses={courses}></CoursePage><div style={{ height: 1500 }}></div></>} />
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
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