import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'

function Card(props) {
    const course = props.course;

    return (
        <>
            <span className='card course-card mr-2 mb-2'>
                <Link to={"/course/" + course["id"]} className="link-no-decoration">
                    <img className='card-img-top image d-block w-100' alt={course.title} src={course.image}></img>
                    <div className='card-body'>
                        <h6 className='card-title mt-1 font-weight-bold'>{course.title}</h6>
                        <p className='card-text light-color'>{course.instructor["name"]}</p>
                        <span className='font-weight-bold rating mr-2'>{course["rating"]["average"]}</span>
                        {getStars(course["rating"]["average"]).map((star, idx) => <span key={idx} className={"fa fa-star star" + (star.checked > 0 ? " checked" : " notChecked")}></span>
                        )}
                        <span className='ml-2 light-color'>({course.numberOfRatings})</span>
                        <p className='price font-weight-bold mt-2'>E£{course.price}</p>
                        {course.bestSeller && <h5><span className='bestSeller badge'>Bestseller</span></h5>}
                    </div>

                </Link>
            </span>
        </>
    );
}

export default Card;

const getStars = (stars) => {
    var list = [];
    for (var i = 0; i < 5; ++i) {
        list.push(i < parseInt(stars) ? { checked: 1 } : { checked: 0 });
    }
    return list;
}

