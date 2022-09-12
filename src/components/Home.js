import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import CoursesSection from './CoursesSection';
import FirstSection from './FirstSection';
import './Home.css'


function Home(props) {
    const { cards, coursesSectionTitle, coursesSectionDescription, category } = props;
    const s = useParams()["s"];

    var newCards = cards.filter((card) => s === undefined ||
        card["course"]["title"].toLowerCase().indexOf(s.trim().toLowerCase()) !== -1);
    return (
        <>
            <FirstSection></FirstSection>
            <div className='abc'>
                <CoursesSection cards={newCards}
                    title={coursesSectionTitle}
                    description={coursesSectionDescription}
                    category={category}></CoursesSection>
            </div>
        </>
    );
}

export default Home;