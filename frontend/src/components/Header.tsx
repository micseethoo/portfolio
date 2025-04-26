// import React from 'react';
//
// const Header: React.FC = () => {
//     return (
//         <header
//             className="text-white fixed top-4 left-1/2 transform -translate-x-1/2 bg-clear shadow-md flex items-center justify-center px-6 py-2 rounded-full z-50"
//         >
//             <div className="text-xl font-bold mr-12">mic</div>
//
//             <nav className="flex space-x-6" aria-label="Main navigation">
//                 <button className="hover:underline">Home</button>
//                 <button className="hover:underline">About</button>
//                 <button className="hover:underline">Projects</button>
//                 <button className="hover:underline">Contact</button>
//             </nav>
//         </header>
//     );
// };
//
// export default Header;

import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 600) {  // Adjust this scroll threshold as needed
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center px-6 py-2 rounded-full z-50 transition-colors duration-300 ${
                scrolled ? 'bg-white shadow-md' : 'bg-transparent'
            }`}
        >
            <div className={`text-xl font-bold mr-60 ${scrolled ? 'text-black' : 'text-white'} drop-shadow-lg`}>
                mic
            </div>

            <nav className="flex space-x-12" aria-label="Main navigation">
                <button
                    className={`relative overflow-hidden pb-1 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full cursor-pointer ${scrolled ? 'text-black' : 'text-white'} drop-shadow-lg`}
                >
                    About
                </button>

                <button
                    className={`relative overflow-hidden pb-1 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full cursor-pointer ${scrolled ? 'text-black' : 'text-white'} drop-shadow-lg`}
                >
                    Projects
                </button>

                <button
                    className={`relative overflow-hidden pb-1 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full cursor-pointer ${scrolled ? 'text-black' : 'text-white'} drop-shadow-lg`}
                >
                    Contact
                </button>

            </nav>
        </header>
    );
};

export default Header;






