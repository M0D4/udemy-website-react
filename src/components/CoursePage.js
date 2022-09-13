import React, { useState } from 'react'
import './CoursePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faGlobe, faClosedCaptioning, faCheck, faMedal, faUserGroup, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Accordion from 'react-bootstrap/Accordion';
import { StickyContainer, Sticky } from 'react-sticky';



var courses;

var [course, setCourse] = [];

function CoursePage(props) {


    courses = props.courses;
    const courseId = useParams()["id"];

    if (!props.categories) return <></>;

    const category = props.categories[courseId];

    if (!category) return <PageNotFound></PageNotFound>

    console.log(courses[category]["courses"][courseId]);
    [course, setCourse] = useState(courses[category]["courses"][courseId]);



    return (
        <>

            <StickyContainer>
                <div className='slider-menu text-white'>
                    <h6 className='course-title-sm font-weight-bold mb-1'>{course.title}</h6>
                    {course.bestSeller && <span className='bestSeller badge mr-2'>Bestseller</span>}
                    <span className='font-weight-bold rating-light mr-2'>{course["rating"]["average"]}</span>
                    <span className={"fa fa-star star-light checked-light"}></span>
                    <span className='light-color-primary ml-2 '>({<span className='light-color-primary numberOfRatings'>{course.numberOfRatings + " ratings"}</span>})</span>
                    <span className='ml-2'>{course.students + " students"}</span>
                </div>
                <Sticky topOffset={100}>
                    {({ style }) => <div className='sidebar-outer-container'>
                        <div className='sidebar-inner-container'>
                            <div className='sidebar-container'>
                                <div className='sidebar-content-group'>
                                    <img className='sidebar-image' src={course["image"]}></img>
                                    <div className='purchase-section'>
                                        <div className='purchase-section-container'>
                                            <div className='price-box'>
                                                <div className='price-text'>
                                                    <span className='font-weight-bold' style={{ fontSize: 35 }}>{"E£" + course["price"]}</span>
                                                </div>
                                            </div>
                                            <div className='add-to-cart-container'>
                                                <div className='add-to-cart'>
                                                    <button className='add-to-cart-button font-weight-bold'>Add to cart</button>
                                                </div>
                                            </div>
                                            <div className='buy-now-container'>
                                                <div className='buy-now'>
                                                    <button className='buy-now-button font-weight-bold'>Buy Now</button>
                                                </div>
                                            </div>
                                            <div className='guarantee'>
                                                30-Day Money-Back Guarantee
                                            </div>
                                            <div className='share-gift-coupon-container mt-3'>
                                                <button className='font-weight-bold'>Share</button>
                                                <button className='font-weight-bold'>Gift this course</button>
                                                <button className='font-weight-bold'>Apply Coupon</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='purchase-section'>
                                        <div className='side-bar-udemy-business'>
                                            <div className='mt-4 font-weight-bold'>Training 5 or more people?</div>
                                            <div className='mt-2'>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</div>
                                            <button className='mt-3 buy-now-button font-weight-bold'>Try Udemy Business</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </Sticky>
                <div className='top-container'>
                    <div className='inner-container text-white'>
                        <div>
                            <div className='light-color-primary font-weight-bold path'>
                                <div className='topic-menu'>
                                    {"Development > " + course.category}
                                </div>
                            </div>
                            <div className='data-outer-container'>
                                <div className='data-inner-container'>
                                    <h1 className='course-title font-weight-bold mb-3'>{course.title}</h1>
                                    <h5 className='course-description mb-3'>{course.description}</h5>
                                    {course.bestSeller && <span className='bestSeller badge mr-2'>Bestseller</span>}
                                    <span className='font-weight-bold rating-light mr-2'>{course["rating"]["average"]}</span>
                                    {getStars(course["rating"]["average"]).map((star, idx) => <span key={idx} className={"fa fa-star star-light" + (star.checked > 0 ? " checked-light" : " notChecked-light")}></span>
                                    )}
                                    <span className='light-color-primary ml-2 '>({<span className='light-color-primary numberOfRatings'>{course.numberOfRatings + " ratings"}</span>})</span>
                                    <span className='ml-2'>{course.students + " students"}</span>
                                    <div className='text-white my-2'>Created by {<span className='light-color-primary instructor-link'>{course.instructor["name"]}</span>}</div>
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
                <Sticky topOffset={150}>
                    {({ style }) => <div className='navigation-group-wrapper'>
                        <div className="navigation-group-outer-container">
                            <div className='navigation-group-inner-container'>
                                <div className='navigation-group'>
                                    <a href="#overview"><button>Overview</button></a>
                                    <a href='#curriculum'><button>Curriculum</button></a>
                                    <a href="#instructor"><button>Instructor</button></a>
                                    <a href="#reviews"><button>Reviews</button></a>
                                </div>
                            </div>
                        </div>
                    </div>}
                </Sticky>
                <div className='page-body'>
                    <div className='overview-section' id="overview">
                        <div className='what-you-will-learn-wrapper'>
                            <h2 className='overview-section-title font-weight-bold'>What you'll learn</h2>
                            <div className='what-you-will-learn-container'>
                                <ul className='overview-list'>
                                    {course["what you will learn"].map((learnBenefit, idx) =>
                                        <li key={idx}>
                                            <div className='learnBenefit'>
                                                <FontAwesomeIcon icon={faCheck} className="check-icon" /> <div className='learnBenefit-text'><span>{learnBenefit}</span></div>
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='course-content-section' id="curriculum">
                        <div className='course-content-wrapper'>
                            <h2 className='course-content-section-title font-weight-bold mb-4'>Course content</h2>
                            <div className='before-content-section'>
                                <p className='course-length-details'>{course["length"]}</p>
                                <button href='#' className='expand-sections'><span className='font-weight-bold'>Expand all sections</span></button>
                            </div>
                            <Accordion className='mt-4 accordion' defaultActiveKey="0" alwaysOpen>
                                {course["content"].map((content, idx) =>
                                    <Accordion.Item className='accordion-item' key={idx} eventKey={idx}>
                                        <div style={{ width: "700" }}><Accordion.Header style={{ width: "100%", fontSize: 25, marginBottom: 0, border: "1px 1px 0 1px solid #d1d7dc", }} className='accordion-header'><div className='ml-2 font-weight-bold' style={{ width: "700px", textAlign: "left" }}>{"Chapter " + (idx + 1)}</div></Accordion.Header></div>
                                        <Accordion.Body className='ml-3' style={{ color: "#1c1d1f", backgroundColor: "#f7f9fa" }}>
                                            {content}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )}
                            </Accordion>
                        </div>
                        <div className='requirements mt-5'>
                            <h2 className='course-content-section-title font-weight-bold'>Requirements</h2>
                            <ul className='ml-4'>
                                {course["requirements"].map((requirement, idx) =>
                                    <li key={idx} className="mb-1">
                                        <div className='requirement'>
                                            <span>{requirement}</span>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className='description mt-5'>
                            <h2 className='course-content-section-title font-weight-bold'>Description</h2>
                            <span>{course.description}</span>
                        </div>
                    </div>
                    <div className='instructor-section mt-5' id='instructor'>
                        <div className='instructor-wrapper mb-2'>
                            <h2 className='course-content-section-title font-weight-bold mb-4'>Instructor</h2>
                        </div>
                        <div>
                            <a className='font-weight-bold instructor-name' href='#'>{course.instructor["name"]}</a>
                        </div>
                        <div className='instructor-title mb-1'>
                            <p>{course.instructor["title"]}</p>
                        </div>
                        <div className='instructor-card mb-3'>
                            <img className='instructor-image mr-3' src={course.instructor["image"]} />
                            <div className='instructor-ratings'>
                                <div>
                                    <span className='fa fa-star mr-3'></span>
                                    <span>{course.instructor["rating"] + " Instructor Rating"}</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faMedal} className="mr-3" />
                                    <span>{course.instructor["reviews"] + " Reviews"}</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faUserGroup} className="mr-3"></FontAwesomeIcon>
                                    <span>{course.instructor["students"] + " Students"}</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faCirclePlay} className="mr-3"></FontAwesomeIcon>
                                    <span>{course.instructor["courses"] + " Courses"}</span>
                                </div>
                            </div>
                        </div>
                        <div className='mb-5'>
                            <span>{course.instructor["description"]}</span>
                        </div>
                        <div>
                            <h2 className='course-content-section-title font-weight-bold mb-4'>Student feedback</h2>
                            <div className='feedback-card'>
                                <div className='left-part'>
                                    <div className='rating-lg font-weight-bold'>{course["rating"]["average"]}</div>
                                    {getStars(course["rating"]["average"]).map((star, idx) => <span key={idx} className={"fa fa-star star-lg" + (star.checked > 0 ? " checked-lg" : " notChecked-lg")}></span>
                                    )}
                                    <div className='font-weight-bold mt-2' style={{ color: "#b4690e", fontSize: 14 }}>Course Rating</div>
                                </div>
                                <div className='right-part mt-4 ml-4'>
                                    {getStars(5).map((star, idx) => <div key={idx} className='mb-1 rating-bar'>
                                        <div className="progress mr-2 mt-2">
                                            <div className="progress-bar" role="progressbar" style={{ width: course["rating"][5 - idx] + "%" }} aria-valuenow={course["rating"][5 - idx]} aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className='stars-rating mr-2'>
                                            {getStars(5 - idx).map((star, idx) => <span key={idx} className={"fa fa-star star-lg" + (star.checked > 0 ? " checked-lg" : " notChecked-lg")}></span>
                                            )}
                                        </div>
                                        <span className='light-color-prime'>{course["rating"][5 - idx] + "%"}</span>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='instructor-section mt-5' id="reviews">
                        <div className='instructor-wrapper mb-2'>
                            <h2 className='course-content-section-title font-weight-bold mb-4'>Reviews</h2>
                        </div>
                        {
                            course["reviews"].map((review, idx) =>
                                <div key={idx} className='reviewer-card mb-2'>
                                    <div className='mr-3 name-circle-wrapper'>
                                        <div className='name-circle'>
                                            <span className='font-weight-bold'>{getLetters(review["name"])}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='font-weight-bold mb-2'>{course["reviews"][idx]["name"]}</div>
                                        <div className='mb-2'>
                                            {getStars(review["rating"]).map((star, idx) => <span key={idx} className={"fa fa-star star" + (star.checked > 0 ? " checked" : " notChecked")}></span>
                                            )}
                                            <span className='ml-2 review-date'>{review["date"]}</span>
                                        </div>
                                        <div className='mb-2'>
                                            {review["description"]}
                                        </div>
                                        <div>
                                            <p className='rate-review-text'>Was this review helpful?</p>
                                        </div>
                                        <div className='rate-review'>
                                            <div className='thumbs-up mr-3'>
                                                <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                                            </div>
                                            <div className='thumbs-down mr-3'>
                                                <FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon>
                                            </div>
                                            <div className='report-review'>Report</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div style={{ height: 500 }}></div>
            </StickyContainer>
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

const getLetters = (name) => {
    if (name.indexOf(" ") === -1) return name[0];
    return name[0] + name[name.indexOf(" ") + 1];
}