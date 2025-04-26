import React, { useState, useEffect } from 'react';
import UpArrowIcon from '../assets/arrow-up.svg';

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleScroll = () => {
        setIsVisible(window.scrollY > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed left-4 bottom-8 p-3 bg-white text-white rounded-full shadow-lg z-50
             transition-all duration-300 ease-in-out
             hover:opacity-70 hover:scale-105"
            >
                <img src={UpArrowIcon} alt="Back to top" className="w-6 h-6"/>
            </button>

        )
    );
};

export default BackToTopButton;
