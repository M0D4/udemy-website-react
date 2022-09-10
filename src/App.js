import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Cards from './components/Cards';
import CoursesSection from './components/CoursesSection';

const course = {
  id: 'aseafe2',
  title: 'Learn Python: The Complete Python Programming Course',
  instructor: 'jose portila',
  stars: "4",
  students: 1432,
  price: 199.99,
  bestSeller: true,
  image: "https://img-b.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
}

const initialCards = [
  { id: 1, course: { ...course } },
  { id: 2, course: { ...course } },
  { id: 3, course: { ...course } },
  { id: 4, course: { ...course } }
];

const coursesSectionTitle = "Expand your career opportunities with Python";

const coursesSectionDescription = `Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful
 language.
 Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine
 learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of
 courses that will appeal to...`;

function App() {
  return (
    <>
      <CoursesSection cards={initialCards}
        title={coursesSectionTitle}
        description={coursesSectionDescription}></CoursesSection>
    </>
  );
}

export default App;
