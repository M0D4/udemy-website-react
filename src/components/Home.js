import React, { useState } from 'react'
import NavBar from './NavBar';
import CoursesSection from './CoursesSection';
import FirstSection from './FirstSection';
import './Home.css'

const course = {
    id: '1',
    title: 'Learn Python: The Complete Python Programming Course',
    instructor: 'maximlian',
    stars: "4",
    students: 1432,
    price: 199.99,
    bestSeller: true,
    image: "https://img-b.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
    category: "Python"
}
const course2 = {
    id: '2',
    title: 'Learning Python for Data Analysis and Visualization',
    instructor: 'Jose Portilla',
    stars: "3",
    students: 1000,
    price: 319.99,
    bestSeller: false,
    image: "https://img-b.udemycdn.com/course/240x135/396876_cc92_7.jpg",
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

function Home() {
    [cards, setCards] = useState(initialCards);

    return (
        <>
            <NavBar onFilter={(searchText) => handleFilter(searchText)}></NavBar>
            <FirstSection></FirstSection>
            <div className='abc'>
                <CoursesSection cards={cards}
                    title={coursesSectionTitle}
                    description={coursesSectionDescription}
                    category={category}></CoursesSection>
            </div>
        </>
    );
}

export default Home;

const handleFilter = (searchText) => {
    var newCards = { ...cards };
    newCards = newCards.filter((card) => /*card.category.trim().toLowerCase() === category.trim().toLowerCase()
        && */card.title.toLowerCase().indexOf(searchText.trim().toLowerCase()) !== -1);
    setCards(newCards);
}