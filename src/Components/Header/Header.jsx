import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import './Header.css';
import svg from '../../images/about.svg'

const Header = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Router>
        <div className="header">
                <ul className="header-block">
                    <li className='link'><a href='/#' target="_blank" rel="noopener noreferrer"><IoIosMail size={26}/></a></li>
                    <li className='link'><a href='/#' target="_blank" rel="noopener noreferrer"><FaGithub size={26}/></a></li>
                    <li className='link'><a href='/#' target="_blank" rel="noopener noreferrer"><FaTelegram size={26}/></a></li>
                    <li><button className='cv-button'>Download  CV</button></li>
                </ul> 

                <ul className="header-block">
                    <li className='section'><img src={svg} alt="" /></li>
                    <li className='section'><Link to='/' onClick={() => scrollToSection('about')}>about me</Link></li>
                    <li className='section'><Link to='/' onClick={() => scrollToSection('projects')}>projects</Link></li>
                    <li className='section'><Link to='/'onClick={() => scrollToSection('contact')}>contact</Link></li>
                </ul> 
        </div>
        </Router>
    );
};

export default Header;