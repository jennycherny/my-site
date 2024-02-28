import React from 'react';

import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import './Header.css';
import svg from '../../images/about.svg'

const Header = () => {
    return (
        <div className="header">
                <ul className="header-block">
                    <li className='link'><a href='/#' target="_blank" rel="noopener noreferrer"><IoIosMail size={26}/></a></li>
                    <li className='link'><a href='/#' target="_blank" rel="noopener noreferrer"><FaGithub size={26}/></a></li>
                    <li className='link'><a href='/#' target="_blank" rel="noopener noreferrer"><FaTelegram size={26}/></a></li>
                    <li><button className='cv-button'>Download  CV</button></li>
                </ul> 

                <ul className="header-block">
                    <li className='section'><img src={svg} alt="" /></li>
                    <li className='section'><a href='/#'>about me</a></li>
                    <li className='section'><a href='/#'>projects</a></li>
                    <li className='section'><a href='/#'>contact</a></li>
                </ul> 
        </div>
    );
};

export default Header;