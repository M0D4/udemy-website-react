import React from 'react'
import Cards from './Cards';
import './CoursesSection.css'


function CoursesSection(props) {
    const { cards, title, description, category } = props;
    return (
        <>
            <div className='pre-courses-section'>
                <div className="courses-section-header">
                    <h1 className='font-weight-bold'>A broad selection of courses</h1>
                </div>
                <div className="courses-section-header-description">
                    <h3>Choose from 185,000 online video courses with new additions published every month</h3>
                </div>
                <div className="categories-tab">
                    <button className="category-button active-tab">Python</button>
                    <button className="category-button">Excel</button>
                    <button className="category-button">Web Development</button>
                    <button className="category-button">JavaScript</button>
                </div>
            </div>
            <main className='courses-section mb-5'>
                <div className="courses-section-title m-2">
                    <h2 className='font-weight-bold'>{title}</h2>
                </div>
                <div className="courses-section-description m-2">
                    <p>{description}</p>
                </div>
                <div className='m-2 mb-4'>
                    <button className="btn btn-md btn-explore font-weight-bold p-2">Explore {category}</button>
                </div>
                <div className='m-2'>
                    <Cards cards={cards}></Cards>
                </div>
            </main>
        </>
    );
}

export default CoursesSection;