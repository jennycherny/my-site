import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import photo from '../../images/my-photo.png';

const Contact = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://evchern-cv.vercel.app/api/sendFormData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to send message');
            }
            alert('Your message has been sent successfully!');
            setFormData({
                name: '',
                email: '',
                message: ''
                });
            } catch (error) {
                console.error('Error sending message:', error);
                alert('An error occurred while sending your message. Please try again later.');
            }
    };

    return (
        <div className='contact-container'>
            <h2>Contact</h2>
            <div className="contact-block">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="your name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}

                            required
                        />
                        <input 
                            type="email" 
                            placeholder="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}

                            required
                        />
                        <textarea 
                            cols="30" 
                            rows="10" 
                            placeholder="your message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}

                            required
                        />
                        <div className="button-div">
                          <button type="submit">submit</button>  
                        </div>
                        
                    </form>
                </div>
                <div className="photo-div">
                    <img src={photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;