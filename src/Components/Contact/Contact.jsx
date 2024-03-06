import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import './Contact.css';
import photo from '../../images/my-photo.png';

const Contact = ({ id }) => {

    const [onScreen, setOnScreen] = useState(false);
    const contactRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setOnScreen(entry.isIntersecting);
            },
            {
                threshold: 0.1, // Когда более 50% элемента видно, считаем его видимым
            }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    const formSpring = useSpring({
        opacity: onScreen ? 1 : 0,
        transform: onScreen ? 'translateY(0)' : 'translateY(50px)',
        from: { opacity: 0, transform: 'translateY(0)' },
        delay: 200
    });

    const photoSpring = useSpring({
        opacity: onScreen ? 1 : 0,
        transform: onScreen ? 'translateY(0)' : 'translateY(50px)',
        from: { opacity: 0, transform: 'translateY(0)' },
        delay: 600
    });


    const headerSpring = useSpring({
        opacity: onScreen ? 1 : 0,
        transform: onScreen ? 'translateY(0)' : 'translateY(50px)', // Настройте анимацию для заголовка
        from: { opacity: 0, transform: 'translateY(0px)' } // Начальное состояние анимации для заголовка
    });


    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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
            setSuccessMessage("Thank you! I'll contact you later.");
            setFormData({
                name: '',
                email: '',
                message: ''
                });
            setErrorMessage('');

            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            console.error('Error sending message:', error);
            setErrorMessage('Something went wrong, try again later.');
            setSuccessMessage('');

            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
    };

    return (
        <div className='contact-container' id={id} ref={contactRef}>
            <animated.h2 className='contact-header' style={headerSpring}>Contact</animated.h2>
            <div className="contact-block">
                <animated.div className="form" style={formSpring}>
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
                            <p className={`success-message ${successMessage && 'active'}`}>{successMessage}</p>
                            <p className={`error-message ${errorMessage && 'active'}`}>{errorMessage}</p>
                            <button type="submit">submit</button>  
                        </div>
                        
                    </form>
                </animated.div>
                <animated.div className="photo-div" style={photoSpring}>
                    <img src={photo} alt="" />
                </animated.div>
            </div>
        </div>
    );
};

export default Contact;