import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import { useTranslation } from 'react-i18next';
import Modal from './../Modal/Modal';
import './Projects.css';


const Projects = ({ id }) => {
    const [onScreen, setOnScreen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const projectsRef = useRef(null);
    const { t } = useTranslation();

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
            title: t("projects.project1.title"),
            description: t("projects.project1.description"),
            stack: ["React", "Node.js", "Express.js", "Supabase"],
            repository: "https://github.com/jennycherny/Lucciola_Books",
            link: "https://lucciola-books.vercel.app/",
        },
        {
            id: 2,
            title: t("projects.project2.title"),
            description: t("projects.project2.description"),
            stack: ["JavaScript", "Tailvind", "Vite"],
            repository: "https://github.com/jennycherny/hangman-game",
            link: "https://jennycherny.github.io/hangman-game/",
        },
        // {
        //     id: 3,
        //     title: "Project 3",
        //     description: "Description for Project 3",
        //     stack: [],
        //     repository: "https://github.com/project3",
        //     link: "",
        // }
    ];

    const showDetails = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };


    const closeModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

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
                <animated.h2 className='projects-header' style={headerSpring}>{t('projects.header')}</animated.h2>
                <div className='projects-gallery'>
                {projectsTrail.map(({ opacity, transform }, index) => (
                    <animated.div className="projects-card" key={projects[index].id} style={{ opacity, transform }}>
                        <h3><a href={projects[index].link} target="_blank" rel="noopener noreferrer">{projects[index].title}</a></h3>
                        <p className='project-desc'>{projects[index].description}</p>
                        <div className='project-stack'>
                            <p className='stack'>{t('projects.stack')}</p>
                            {projects[index].stack.map((item, i) => (
                                <p key={i}>{item}{i !== projects[index].stack.length - 1 && ','}</p>
                            ))}
                        </div>
                        <div className='repository-div'>
                            {/* <p>
                                <button onClick={() => showDetails(projects[index])} className='down-link'>Details</button>
                            </p> */}
                            <p>
                                <a href={projects[index].repository} target="_blank" rel="noopener noreferrer" className='down-link'>{t('projects.repository')}</a>
                            </p>
                        </div>
                    </animated.div>
                ))}
                </div>
                <Modal show={showModal} onClose={closeModal} project={selectedProject} />
            </div>
    );
};

export default Projects;