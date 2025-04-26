import React, {} from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'react-feather';

const Footer: React.FC = () => {

    return (
        <footer className="w-full bg-black text-white px-8 py-12">
            {/* Top section: Name + Newsletter */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-8">
                {/* Left Side: Big Name */}
                <div className="text-9xl font-bold">
                    <p>micseethoo</p>
                </div>

                {/* Right Side: Vertical Navigation */}
                <nav className="text-4xl font-bold flex flex-col space-y-12 text-right mr-4">
                    <button
                        className="relative inline-block overflow-hidden pb-1 cursor-pointer text-white drop-shadow-lg">
                          <span
                              className="relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
                            about
                          </span>
                    </button>


                    <button
                        className="relative inline-block overflow-hidden pb-1 cursor-pointer text-white drop-shadow-lg">
                          <span
                              className="relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
                            projects
                          </span>
                    </button>

                    <button
                        className="relative inline-block overflow-hidden pb-1 cursor-pointer text-white drop-shadow-lg">
                          <span
                              className="relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
                            contact
                          </span>
                    </button>
                </nav>
            </div>


            {/* Bottom section: Socials */}
            <div className="flex justify-center space-x-12 mt-15">
                <div className="text-4xl font-bold mb-8 md:mb-0">
                    <p>socials</p>
                </div>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook size={48}/>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter size={48}/>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={48}/>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram size={48}/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
