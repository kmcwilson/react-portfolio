import React from 'react';

const Home = ({setCurrentPage}) => {
    return (
        <div className="container" style={{ minHeight: '60vh' }}>
            <div className="home-info flex-item">
            <img className="flex-item home-image"src="whistler.jpg" alt="Katie smiling" height="300px" width="300px" style={{float:'left', borderRadius: '50%', margin:'5px'}}></img>
                <h2>Hey! I'm Katie</h2>
                <p className="home-description">As a full stack web developer with a background in education, I bring a unique combination of skills and experience to the table. My passion for creating visually appealing and responsive web applications is matched by my dedication to delivering functional and user-friendly designs. Whether it's building a website from scratch or optimizing an existing one, I have the skills and experience to help bring your project to life.</p>
                <a href='Kathleen-Wilson-Resume_2022 (10).pdf' download='Kathleen-Wilson-Resume_2022 (12).pdf'><button className="card-button">Download Resume</button></a>
                <button className="card-button" type='submit' onClick={()=>setCurrentPage('about')}>More About Me</button>
            </div>
        </div>
    )
}

export default Home