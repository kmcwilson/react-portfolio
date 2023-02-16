import React from 'react';

const AboutMe = () => {
    return (
        <div style={{ minHeight: '80vh', textAlign: 'center' }} className="container about-myself">
            <div>
                <img className="flex-item about-image"src="unstoppable.jpg" alt="Katie smiling with unstoppable sign behind"></img>
            </div>
            <div className="flex-item about-info">
                <h1>A brief history of me...</h1>
                <p >I was a teacher at the Ottawa Carleton District School Board for seven years. Although I cherished working with children, I eventually came to realize that my passion lies elsewhere. During my time teaching math, I was introduced to coding and was immediately drawn to it. I now work as a full-stack developer, utilizing my love for technology and desire to continuously learn. I am thrilled to be in this exciting and challenging field. </p>
            </div>
        </div>
    )
}

export default AboutMe