import React from 'react';

const AboutMe = () => {
    return (
        <div style={{ minHeight: '60vh', textAlign: 'center' }} className="container about-myself">
            <div>
                <img className="flex-item about-image"src="unstoppable.jpg" alt="Katie smiling with unstoppable sign behind"></img>
            </div>
            <div className="flex-item about-info">
                <h1>A brief history of me...</h1>
                <p >I am a former educator with the Ottawa Carleton District School Board. I have taught for seven years and although I loved working with kids, in time I realized that working as a public school teacher was not my passion. </p>
                <p >While teaching math I was introduced to coding and was very intrigued. I enjoy working with technology and learning new skills. I am now a full stack developer and am excited to work in this exciting and challenging field! </p>
            </div>
        </div>
    )
}

export default AboutMe