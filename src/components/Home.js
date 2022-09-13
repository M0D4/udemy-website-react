import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import CoursesSection from './CoursesSection';
import FirstSection from './FirstSection';
import './Home.css'


function Home(props) {
    const { cards, coursesSectionTitle, coursesSectionDescription, category } = props;
    let [searchParams, setSearchParams] = useSearchParams();

    let s = searchParams.get("search");

    var courses = cards[category.toLowerCase()]["courses"];
    if (!courses) return <div>Please wait</div>

    var newCourses = Object.values(courses).filter((course) => (s === null ||
        course["title"].toLowerCase().indexOf(s.trim().toLowerCase()) !== -1));

    return (
        <>
            <FirstSection></FirstSection>
            <div>
                <CoursesSection courses={newCourses}
                    title={coursesSectionTitle}
                    description={coursesSectionDescription}
                    category={category}></CoursesSection>
            </div>
        </>
    );
}

export default Home;