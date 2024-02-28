import React from 'react';
import './Projects.css';

const Projects = () => {
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
    
    return (
        <div className="projects">
            <h2 className='projects-header'>Projects</h2>
            <div className='projects-gallery'>
                {projects.map(project => (
                    <div className="projects-card" key={project.id}>
                        <h3><a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}
                        </a></h3>
                        <p className='project-desc'>{project.description}</p>
                        <div className='project-stack'>
                            <p className='stack'>Stack:</p>
                            {project.stack.map((item, index) => (
                            <p key={index}>{item}{index !== project.stack.length - 1 && ','}</p>
                                ))}
                        </div>
                        <div className='repository-div'>
                            <a href={project.repository} target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    );
};

export default Projects;