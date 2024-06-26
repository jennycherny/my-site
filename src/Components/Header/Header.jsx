import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import './Header.scss';
import svg from '../../images/about.svg'

const Header = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();


    const changeLanguage = (lng) => {
        console.log('Changing language to', lng);
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
        navigate(`/${lng}`);
    };

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="header">
                <ul className="header-block">
                    <li className='link'><a href='https://www.linkedin.com/in/evgeniyachern/' target="_blank" rel="noopener noreferrer"><BsLinkedin size={24}/></a></li>
                    <li className='link'><a href='https://github.com/jennycherny' target="_blank" rel="noopener noreferrer"><FaGithub size={26}/></a></li>
                    {/* <li className='link'><a href='#' target="_blank" rel="noopener noreferrer"><FaTelegram size={26}/></a></li> */}
                    {/* <li><button className='cv-button'>{t("header.DownloadCV")}</button></li> */}
                </ul> 

                <div className="header-block right">
                    <ul className="header-block header-right">
                        <li className='section'><img src={svg} alt="" /></li>
                        <li className='section'><Link to='/' onClick={() => scrollToSection('about')}>{t("header.aboutMe")}</Link></li>
                        <li className='section'><Link to='/' onClick={() => scrollToSection('projects')}>{t("header.projects")}</Link></li>
                        <li className='section'><Link to='/'onClick={() => scrollToSection('contact')}>{t("header.contact")}</Link></li>
                    </ul> 

                    <div className="toggle-wrapper header-right">
                        <input 
                            id="toggle-on" 
                            class="toggle toggle-left" 
                            name="toggle" 
                            value="false" 
                            type="radio" 
                            checked={i18n.language === 'en'}
                        />
                            <label for="toggle-on" class="btn" onClick={() => changeLanguage('en')}>EN</label>
                        <input 
                            id="toggle-off" 
                            class="toggle toggle-right" 
                            name="toggle" 
                            value="true" 
                            type="radio"
                            checked={i18n.language === 'ru'}
                        />
                            <label for="toggle-off" class="btn" onClick={() => changeLanguage('ru')}>RU</label>
                    </div>
                </div>
                
        </div>
    );
};

export default Header;