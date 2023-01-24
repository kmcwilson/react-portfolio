import React from 'react';
import NavBar from './Navigation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {BsFillEnvelopeFill} from 'react-icons/bs';

const Header = ({ currentPage, setCurrentPage }) => {
    return (
        <header>
            <div className='container' style={{ marginBottom: '30px' }}>
                <h1 className='portfolio-title' style={{ paddingTop: '20px' }}>Katie Wilson <a href="https://github.com/kmcwilson" style={{ color: '#935c68ff' }}><FaGithub /></a> <a href=" https://www.linkedin.com/in/kathleen-wilson-2b2a8b54" style={{ color: '#935c68ff' }}><FaLinkedin /></a>  <a style={{ color: '#935c68ff' }} class="email" href="mailto:kmcwilson4@gmail.com"><BsFillEnvelopeFill/></a></h1>
                <NavBar setCurrentPage={setCurrentPage} currentPage={currentPage} id="navigation" className="flex-item nav-links-container" />
            </div>
        </header>
    )
}

export default Header;