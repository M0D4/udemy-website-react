import React from 'react'
import './CoursePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faClosedCaptioning, faCheck } from '@fortawesome/free-solid-svg-icons'
import NavBar from './NavBar';

var course;

function CoursePage(props) {
    course = props.course;

    return (
        <>
            <div className='slider-menu text-white'>
                <h6 className='course-title-sm font-weight-bold mb-1'>{course.title}</h6>
                {course.bestSeller && <span className='bestSeller badge mr-2'>Bestseller</span>}
                <span className='font-weight-bold rating mr-2'>{course.stars}</span>
                <span className={"fa fa-star star checked"}></span>
                <span className='light-color ml-2 '>({<span className='light-color numberOfRatings'>{course.numberOfRatings + " ratings"}</span>})</span>
                <span className='ml-2'>{course.students + " students"}</span>
            </div>
            <div className='top-container'>
                <div className='inner-container text-white'>
                    <div>
                        <div className='light-color font-weight-bold path'>
                            <div className='topic-menu'>
                                {"Development > " + course.category}
                            </div>
                        </div>
                        <div className='data-outer-container'>
                            <div className='data-inner-container'>
                                <h1 className='course-title font-weight-bold mb-3'>{course.title}</h1>
                                <h5 className='course-description mb-3'>{course.description}</h5>
                                {course.bestSeller && <span className='bestSeller badge mr-2'>Bestseller</span>}
                                <span className='font-weight-bold rating mr-2'>{course.stars}</span>
                                {getStars(course.stars).map((star, idx) => <span key={idx} className={"fa fa-star star" + (star.checked > 0 ? " checked" : " notChecked")}></span>
                                )}
                                <span className='light-color ml-2 '>({<span className='light-color numberOfRatings'>{course.numberOfRatings + " ratings"}</span>})</span>
                                <span className='ml-2'>{course.students + " students"}</span>
                                <div className='text-white my-2'>Created by {<span className='light-color instructor-link'>{course.instructor}</span>}</div>
                                <i className="fa fa-exclamation-circle mr-2" aria-hidden="true"></i>
                                <span className='mr-4'>Last updated {course["Last Updated"]}</span>
                                <span className='mr-4'>
                                    <FontAwesomeIcon icon={faGlobe} className="mr-2 lang-icon" /><span>{course.language}</span>
                                </span>
                                <FontAwesomeIcon icon={faClosedCaptioning} className="mr-2" /><span className=''>{course["Closed Caption"]}</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navigation-group-wrapper'>
                <div class="navigation-group-outer-container">
                    <div className='navigation-group-inner-container'>
                        <div className='navigation-group'>
                            <button href="#overview">Overview</button>
                            <button>Curriculum</button>
                            <button>Instructor</button>
                            <button>Reviews</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='page-body'>
                <div className='overview-section' id="overview">
                    <div className='what-you-will-learn-wrapper'>
                        <h2 className='overview-section-title font-weight-bold'>What you'll learn</h2>
                        <div className='what-you-will-learn-container'>
                            <ul className='overview-list'>
                                {course["what you will learn"].map(learnBenefit =>
                                    <li>
                                        <div className='learnBenefit'>
                                            <FontAwesomeIcon icon={faCheck} className="check-icon" /> <div className='learnBenefit-text'><span>{learnBenefit}</span></div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CoursePage;

const getStars = (stars) => {
    var list = [];
    for (var i = 0; i < 5; ++i) {
        list.push(i < parseInt(stars) ? { checked: 1 } : { checked: 0 });
    }
    return list;
}
