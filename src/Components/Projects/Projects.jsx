import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import './Projects.css';

const Projects = ({ id }) => {
    const [onScreen, setOnScreen] = useState(false);
    const projectsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setOnScreen(entry.isIntersecting);
            },
            {
                threshold: 0.1, // Когда более 10% элемента видно, считаем его видимым
            }
        );

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => {
            if (projectsRef.current) {
                observer.unobserve(projectsRef.current);
            }
        };
    }, []);

    const projects = [
        {
            id: 1,
            title: "Hangman Game",
            description: "A game familiar from childhood, where the player needs to guess the word by choosing the letters correctly",
            stack: ["JavaScript", "Tailvind", "Vite"],
            repository: "https://github.com/jennycherny/hangman-game",
            link: "https://jennycherny.github.io/hangman-game/",
        },
        {
            id: 2,
            title: "Lucciola books",
            description: "Website for an online book store and library operating in Tbilisi, Georgia",
            stack: ["React", "Node.js", "Express.js", "Supabase"],
            repository: "https://github.com/jennycherny/Lucciola_Books",
            link: "https://lucciola-books.vercel.app/",
        },
        {
            id: 3,
            title: "Project 3",
            description: "Description for Project 3",
            stack: [],
            repository: "https://github.com/project3",
            link: "",
        }
    ];

    const projectsTrail = useTrail(projects.length, {
        opacity: onScreen ? 1 : 0,
        transform: onScreen ? 'translateY(0)' : 'translateY(150px)', 
        from: { opacity: 0, transform: 'translateY(0px)' }, 
        delay: 300 
    });

    const headerSpring = useSpring({
        opacity: onScreen ? 1 : 0,
        transform: onScreen ? 'translateY(0)' : 'translateY(50px)', 
        from: { opacity: 0, transform: 'translateY(0px)' } 
    });
    
    return (
            <div className="projects" ref={projectsRef} id={id}>
                <animated.h2 className='projects-header' style={headerSpring}>Projects</animated.h2>
                <div className='projects-gallery'>
                {projectsTrail.map(({ opacity, transform }, index) => (
                    <animated.div className="projects-card" key={projects[index].id} style={{ opacity, transform }}>
                        <h3><a href={projects[index].link} target="_blank" rel="noopener noreferrer">{projects[index].title}</a></h3>
                        <p className='project-desc'>{projects[index].description}</p>
                        <div className='project-stack'>
                            <p className='stack'>Stack:</p>
                            {projects[index].stack.map((item, i) => (
                                <p key={i}>{item}{i !== projects[index].stack.length - 1 && ','}</p>
                            ))}
                        </div>
                        <div className='repository-div'>
                            <a href={projects[index].repository} target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </animated.div>
                ))}
                </div>
            </div>
    );
};

export default Projects;