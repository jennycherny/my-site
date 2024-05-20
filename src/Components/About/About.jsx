import React, { useState, useEffect } from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = ({ id }) => {

    const [isScrolled, setIsScrolled] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          if (scrollY > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const { opacity, transform } = useSpring({
        opacity: isScrolled ? 1 : 0,
        transform: isScrolled ? 'translateY(0px)' : 'translateY(0)',
      });

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
            {/* <p>{t ("about.experienceText3")}</p> */}
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

    const trail = useTrail(items.length, {
        opacity: isScrolled ? 1 : 0,
        transform: isScrolled ? 'translateY(0)' : 'translateY(100px)',
        from: { opacity: 0, transform: 'translateY(0px)' },
        delay: 400
    });

    const halfLength = Math.ceil(items.length / 2);
    const firstColumnItems = items.slice(0, halfLength);
    const secondColumnItems = items.slice(halfLength);

    const { opacity: leftOpacity, transform: leftTransform } = useSpring({
        opacity: isScrolled ? 1 : 0,
        transform: isScrolled ? 'translateY(0)' : 'translateY(100px)',
    });

    const { opacity: rightOpacity, transform: rightTransform } = useSpring({
        opacity: isScrolled ? 1 : 0,
        transform: isScrolled ? 'translateY(0)' : 'translateY(100px)',
    });

    return (
        <animated.div style={{ opacity, transform }} id={id}>
            <div className='about-container'>
                <div className="about-left" style={{ opacity: leftOpacity, transform: leftTransform }}>
                    {trail.map((props, index) => (
                        index < halfLength && (
                            <animated.div key={index} style={props}>
                                {firstColumnItems[index]}
                            </animated.div>
                        )
                    ))}
                </div>

                <div className="about-right" style={{ opacity: rightOpacity, transform: rightTransform }}>
                    {trail.map((props, index) => (
                        index >= halfLength && (
                            <animated.div key={index} style={props}>
                                {secondColumnItems[index - halfLength]}
                            </animated.div>
                        )
                    ))}
                </div>
            </div>
        </animated.div>
    );
};

export default About;