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
            <Image
                src={`${assetPrefix}/Treehouse.png`}
                alt="Treehouse image"
                className="TreehouseImage"
                style={{ top: `${-scrollY * 0.2}px` }} // Use a negative multiplier to move the image up
                width={500}
                height={500}
            />
        </main>
    );
};

export default PageOne;
