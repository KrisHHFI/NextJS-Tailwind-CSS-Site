"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { pageContent, PageItem } from './PageContent';

const PageComponents: React.FC = () => {
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
            {pageContent.map((item: PageItem, index: number) => {
                switch (item.type) {
                    case 'textComponent':
                        return (
                            <div
                                key={index}
                                className={item.className}
                                style={item.style}
                            >
                                {item.text}
                            </div>
                        );
                    case 'imageAndTextComponent':
                        return (
                            <div
                                key={index}
                                className={"ImageAndTextBox"}
                                style={item.style}
                            >
                                <div className={"ImageAndTextBoxImageContainer"}>
                                    <Image
                                        src={`${assetPrefix}${item.imageUrl}`}
                                        alt={item.altText || 'Image'}
                                        className={item.imageClassName}
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className={"ImageAndTextBoxChild"}>
                                    {item.text}
                                </div>
                            </div>
                        );
                    case 'imageComponent':
                        const style = item.scrollingEffect ? item.scrollingEffect(scrollY) : {};

                        return (
                            <Image
                                key={index}
                                src={`${assetPrefix}${item.imageUrl}`}
                                alt={item.altText || 'Image'}
                                className={item.imageClassName}
                                style={style}
                                width={500}
                                height={500}
                            />
                        );
                    default:
                        return null;
                }
            })}
        </main>
    );
};

export default PageComponents;
