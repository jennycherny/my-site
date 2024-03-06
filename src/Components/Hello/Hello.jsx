import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './Hello.css';

const Hello = () => {

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
        opacity: isScrolled ? 0 : 1,
        transform: isScrolled ? 'translateY(-80px)' : 'translateY(0)',
    });

    return (
        <animated.div style={{ opacity, transform }}>
            <div>
                <h1 className="hello-container">
                    hello! <br />
                    i'm <br />

                    <span>
                        Web-<br />
                        developer  
                    </span>
                </h1>
            </div>
        </animated.div>
    );
};

export default Hello;