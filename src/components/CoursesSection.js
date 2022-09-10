import React from 'react'
import Cards from './Cards';
import './CoursesSection.css'


function CoursesSection(props) {
    const { cards, title, description } = props;
    return (
        <>
            <main className='courses-section m-2'>
                <div className="font-weight-bold m-2">
                    <h2>{title}</h2>
                </div>
                <div className="p-text m-2">
                    <p>{description}</p>
                </div>
                <div className='m-2'>
                    <button className="btn btn-md btn-explore font-weight-bold">Explore Python</button>
                </div>
                <div className='m-2'>
                    <Cards cards={cards}></Cards>
                </div>
            </main>
        </>
    );
}

export default CoursesSection;