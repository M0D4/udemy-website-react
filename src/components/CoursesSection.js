import React from 'react'
import Cards from './Cards';
import './CoursesSection.css'


function CoursesSection(props) {
    const { cards, title, description, category } = props;
    return (
        <>
            <main className='courses-section mb-5'>
                <div className="font-weight-bold">
                    <h2>{title}</h2>
                </div>
                <div className="p-text m-2">
                    <p>{description}</p>
                </div>
                <div className='m-2'>
                    <button className="btn btn-md btn-explore font-weight-bold">Explore {category}</button>
                </div>
                <div className='m-2'>
                    <Cards cards={cards}></Cards>
                </div>
            </main>
        </>
    );
}

export default CoursesSection;