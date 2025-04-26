import React, { useState, useEffect } from 'react';
import introImage from '../assets/moon.jpg'; // or png/svg/etc

const Content: React.FC = () => {
    const [items, setItems] = useState<number[]>([]);

    useEffect(() => {
        const initialItems = Array.from({ length: 50 }, (_, i) => i + 1);
        setItems(initialItems);
    }, []);

    return (
        <main>
            {/*<div className="w-full">*/}
            {/*    <img*/}
            {/*        src={introImage}*/}
            {/*        alt="Intro"*/}
            {/*        className="w-full h-[60vh] object-cover"*/}
            {/*    />*/}
            {/*</div>*/}
            {/* Image section with centered text */}
            <div className="relative w-full h-[700px]">
                <img
                    src={introImage}
                    alt="Background"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
                        Immerse into the Unknown
                    </h1>
                </div>
            </div>

                <div className="max-w-5xl mx-auto px-4 mt-6">
                    <ul>
                        {items.map((item) => (
                            <li
                                key={item}
                                className="border-b border-gray-300 py-2 text-gray-700 text-center"
                            >
                                List item {item}
                            </li>
                        ))}
                    </ul>
                </div>
        </main>
);
};

export default Content;
