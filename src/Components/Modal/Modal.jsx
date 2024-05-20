import React from 'react';
import './Modal.css';

import { IoIosClose } from "react-icons/io";


const Modal = ({ show, onClose, project }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}><IoIosClose /></button>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className='project-stack'>
                    <p className='stack'>Stack:</p>
                    {project.stack.map((item, i) => (
                        <p key={i}>{item}{i !== project.stack.length - 1 && ','}</p>
                    ))}
                </div>
                <p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">Website</a>
                </p>
                <p>
                    <a href={project.repository} target="_blank" rel="noopener noreferrer">Repository</a>
                </p>
            </div>
        </div>
    );
};


export default Modal;