import React from 'react'
import './Card.css'

function Card(props) {
    const course = props.course;

    return (
        <>
            <span className='card course-card mr-2 mb-2'>
                <img className='card-img-top image d-block w-100' alt={course.title} src={course.image}></img>
                <div className='card-body'>
                    <h6 className='card-title font-weight-bold'>{course.title}</h6>
                    <p className='card-text light-color'>{course.instructor}</p>
                    <span className='font-weight-bold rating mr-2'>{course.stars}</span>
                    {getStars(course.stars).map((star, idx) => <span key={idx} className={"fa fa-star" + (star.checked > 0 ? " checked" : "")}></span>
                    )}
                    <span className='ml-2 light-color'>({course.students})</span>
                    <p className='price font-weight-bold mt-2'>E£{course.price}</p>
                    {course.bestSeller && <h5><span className='bestSeller badge'>Bestseller</span></h5>}
                </div>
            </span>
        </>
    );
}

export default Card;

const getStars = (stars) => {
    var list = [];
    for (var i = 0; i < 5; ++i) {
        list.push(i < stars ? { checked: 1 } : { checked: 0 });
    }
    return list;
}

