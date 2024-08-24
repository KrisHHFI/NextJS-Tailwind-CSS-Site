"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const PageOne: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const assetPrefix = process.env.NODE_ENV === 'production' ? '/NextJS-Tailwind-CSS-Site' : '';

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main>
            <div className="MainTitle">
                Lorem ipsum
            </div>
            <Image
                src={`${assetPrefix}/Treehouse.png`}
                alt="Treehouse image"
                className="TreehouseImage"
                style={{ top: `${-scrollY * 0.3}px` }}
                width={500}
                height={500}
            />
            <div className="PageOneText">
                consectetur adipiscing elit, sed do eiusmod tempor ♡
            </div>
            <Image
                src={`${assetPrefix}/HotAirBalloon.png`}
                alt="Hot air balloon image"
                className="HotAirBalloonImage"
                style={{ 
                    top: `${-scrollY * 0.2 + 125}vh`,
                    left: `${scrollY * 0.1}%` 
                }}
                width={500}
                height={500}
            />
        </main>
    );
};

export default PageOne;
