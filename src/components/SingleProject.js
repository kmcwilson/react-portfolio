import React from 'react';


const ProjectCard = (props) => {
    const styles = {
        card: {      
            backgroundImage: `url('${props.image}')`,
            height: '350px', 
            width:'350px'
        },
    
    
    }
    return (
        <div className="card single-project" style={styles.card}>
            <div className="card-info" >
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.url}><button className="card-text card-button">Live Website</button></a>
                <a href={props.gitHub}><button className="card-text card-button">GitHub Repo</button></a>
            </div>

        </div>
    )
}

export default ProjectCard