import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about-container'>
            <div className="about-left">
                <div className="about-item">
                    <h3>About me</h3>
                    <p>
                        Hello, I'm Evgeniia Cherniavskaia, a passionate Junior Web Developer with a knack for turning designs into responsive and visually appealing websites. In my work I use HTML, CSS, JavaScript, React and Node JS. 
                        <br /><br />
                        I previously worked as a journalist and got the necessary soft skills: communication and emotional intelligence, the ability to work in a team. I'm a creative thinker and can work with a lot of information.
                    </p>
                </div>
                <div className="about-item">
                    <h3>Experience</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula justo bibendum dolor auctor aliquam. Morbi et tellus lacinia, sagittis mi sit amet, cursus purus. Integer vehicula augue porttitor, mattis nunc in, vestibulum turpis. Nullam justo dui, ullamcorper eu tincidunt non, pharetra in ante. Cras in est nulla. 
                    </p>
                </div>
            </div>
            <div className="about-right">
                <div className="about-item">
                    <h3>Skills</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula justo bibendum dolor auctor aliquam. Morbi et tellus lacinia, sagittis mi sit amet, cursus purus. Integer vehicula augue porttitor, mattis nunc in, vestibulum turpis. Nullam justo dui, ullamcorper eu tincidunt non, pharetra in ante. Cras in est nulla. 
                    </p>
                </div>
                <div className="about-item">
                    <h3>Education</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula justo bibendum dolor auctor aliquam. Morbi et tellus lacinia, sagittis mi sit amet, cursus purus. Integer vehicula augue porttitor, mattis nunc in, vestibulum turpis. Nullam justo dui, ullamcorper eu tincidunt non, pharetra in ante. Cras in est nulla. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;