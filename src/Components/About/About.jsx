import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import { useTranslation } from 'react-i18next';
import './About.scss';

const About = ({ id }) => {

    const [onScreen, setOnScreen] = useState(false);
    const aboutRef = useRef(null);
    const { t } = useTranslation();

    const items = [
        <div className="about-item">
            <h3>{t ("about.aboutHeader")}</h3>
            <p>{t ("about.aboutText1")}</p><br />
            <p>{t ("about.aboutText2")}</p>
        </div>,
        <div className="about-item">
            <h3>{t ("about.skillsHeader")}</h3>
            {t("about.skillsText1").split('\n').map((line, index) => (
                <p key={index}>{line}<br /></p>
            ))}
            <br />
            {t("about.skillsText2").split('\n').map((line, index) => (
                <p key={index}>{line}<br /></p>
            ))}
        </div>,
        <div className="about-item">
            <h3>{t ("about.experienceHeader")}</h3>
            <p>{t ("about.experienceText2")}</p>
            <p>{t ("about.experienceText1")}</p><br />
            {t("about.experienceText3").split('\n').map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>,
        <div className="about-item">
            <h3>{t ("about.educationHeader")}</h3>
            <p>{t ("about.educationText1")}</p>
            <p>{t ("about.educationText2")}</p><br />
            <p>{t ("about.educationText3")}</p>
            <p>{t ("about.educationText4")}</p>
        </div>
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setOnScreen(entry.isIntersecting);
            },
            {
                threshold: 0.1,
            }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
      }, []);

    const trail = useTrail(items.length, {
        opacity: onScreen ? 1 : 0,
        transform: onScreen ? 'translateY(0)' : 'translateY(100px)',
        from: { opacity: 0, transform: 'translateY(100px)' },
        delay: 400,
        config: { tension: 200, friction: 20 }
    });

    const halfLength = Math.ceil(items.length / 2);
    const firstColumnItems = items.slice(0, halfLength);
    const secondColumnItems = items.slice(halfLength);

    return (
        <div className='about-container' id={id} ref={aboutRef}>
            <div className="about-left">
                {trail.map((props, index) => (
                    index < halfLength && (
                        <animated.div key={index} style={props}>
                            {firstColumnItems[index]}
                        </animated.div>
                    )
                ))}
            </div>

            <div className="about-right">
                {trail.map((props, index) => (
                    index >= halfLength && (
                        <animated.div key={index} style={props}>
                            {secondColumnItems[index - halfLength]}
                        </animated.div>
                    )
                ))}
            </div>
        </div>
    );
};

export default About;