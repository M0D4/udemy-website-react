import React from 'react'
import './FirstSection.css'

function FirstSection() {
    return (
        <>
            <section className="first-section">
                <img className="alarm big-screen"
                    src="https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/b8f46419-eca3-44c1-8ba0-ed2ca89f8884.jpg" />
                {/* <img className="alarm small-screen" src="../images/alaram-small.jpg" /> */}

                <div className="text-card">
                    <h1>Unlock the power of your people</h1>
                    <p>Udemy Business is trusted by 10.5K+ companies around the world. Find out what we can do for yours.</p>
                </div>
            </section>
        </>
    );
}

export default FirstSection;