import React, { useState, useEffect } from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import './About.css';

const About = ({ id }) => {

    const [isScrolled, setIsScrolled] = useState(false);

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
            <h3>About me</h3>
            <p>
                Hello, I'm Evgeniia Cherniavskaia, a passionate Junior Web Developer with a knack for turning designs into responsive and visually appealing websites. In my work I use HTML, CSS, JavaScript, React and Node JS. 
                <br /><br />
                I previously worked as a journalist and got the necessary soft skills: communication and emotional intelligence, the ability to work in a team. I'm a creative thinker and can work with a lot of information.
            </p>
        </div>,
        <div className="about-item">
            <h3>Experience</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula justo bibendum dolor auctor aliquam. Morbi et tellus lacinia, sagittis mi sit amet, cursus purus. Integer vehicula augue porttitor, mattis nunc in, vestibulum turpis. Nullam justo dui, ullamcorper eu tincidunt non, pharetra in ante. Cras in est nulla. 
            </p>
        </div>,
        <div className="about-item">
            <h3>Skills</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula justo bibendum dolor auctor aliquam. Morbi et tellus lacinia, sagittis mi sit amet, cursus purus. Integer vehicula augue porttitor, mattis nunc in, vestibulum turpis. Nullam justo dui, ullamcorper eu tincidunt non, pharetra in ante. Cras in est nulla. 
            </p>
        </div>,
        <div className="about-item">
            <h3>Education</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula justo bibendum dolor auctor aliquam. Morbi et tellus lacinia, sagittis mi sit amet, cursus purus. Integer vehicula augue porttitor, mattis nunc in, vestibulum turpis. Nullam justo dui, ullamcorper eu tincidunt non, pharetra in ante. Cras in est nulla. 
            </p>
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