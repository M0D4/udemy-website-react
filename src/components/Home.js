import React from 'react'
import NavBar from './NavBar';
import CoursesSection from './CoursesSection';
import FirstSection from './FirstSection';
import './Home.css'

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

const category = 'Python';

function Home() {
    return (
        <>
            <NavBar></NavBar>
            <FirstSection></FirstSection>
            <div className='abc'>
                <CoursesSection cards={initialCards}
                    title={coursesSectionTitle}
                    description={coursesSectionDescription}
                    category={category}></CoursesSection>
            </div>
        </>
    );
}

export default Home;