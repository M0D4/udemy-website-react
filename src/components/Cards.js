import React from 'react'
import Card from './Card';
import './Cards.css'

function Cards(props) {
    const courses = props.courses;
    return (
        <>
            <div className='cards'>
                {courses.map((course, idx) => <Card key={course["id"]} course={course}></Card>)}
            </div>
        </>
    );
}

export default Cards;