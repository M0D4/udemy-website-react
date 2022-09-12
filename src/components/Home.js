import React, { useState } from 'react'
import CoursesSection from './CoursesSection';
import FirstSection from './FirstSection';
import './Home.css'


function Home(props) {
    const { cards, coursesSectionTitle, coursesSectionDescription, category } = props;

    return (
        <>
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