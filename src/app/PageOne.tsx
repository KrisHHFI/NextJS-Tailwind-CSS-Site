"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const PageOne: React.FC = () => {

    const assetPrefix = process.env.NODE_ENV === 'production' ? '/NextJS-Tailwind-CSS-Site' : '';

    return (
        <main>
            <div className="PageContainer">
                <Image
                    src={`${assetPrefix}/Treehouse.png`}
                    alt="Treehouse image"
                    className="TreehouseImage"
                    width={500}
                    height={500}
                />
            </div>
        </main>
    );
};

export default PageOne;