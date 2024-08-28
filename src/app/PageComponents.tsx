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
                                        className={`${item.imageClassName} ${item.hasClockImage ? 'shake-animation' : ''} ${item.hasCarImage ? 'revving-animation' : ''}`}
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className={"ImageAndTextBoxChild"}>
                                    {item.text}
                                </div>
                            </div>
                        );
                    case 'threeChildSplitComponent':
                        return (
                            <div
                                key={index}
                                className={"threeChildSplitComponent"}
                                style={item.style}
                            >
                                <div className={"threeChildSplitComponentChild"}>
                                    <div className={"threeChildSplitComponentHeader"}>
                                        {item.textOneHeader}
                                    </div>
                                    {item.textOne}
                                </div>
                                <div className={"threeChildSplitComponentChild"}>
                                    <div className={"threeChildSplitComponentHeader"}>
                                        {item.textTwoHeader}
                                    </div>
                                    {item.textTwo}
                                </div>
                                <div className={"threeChildSplitComponentChild"}>
                                    <div className={"threeChildSplitComponentHeader"}>
                                        {item.textThreeHeader}
                                    </div>
                                    {item.textThree}
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
                    case 'footerIcons':
                        return (
                            <div
                                key={index}
                                className={"footerIcons"}
                                style={item.style}
                            >
                                 <a className={"footerIconLink"} href={`mailto:${item.imageOneLink}`} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        key={index}
                                        src={`${assetPrefix}${item.imageOneURL}`}
                                        alt={item.altText || 'Image'}
                                        className={"footerIcon"}
                                        width={500}
                                        height={500}
                                    />
                                </a>
                                <a className={"footerIconLink"} href={`${assetPrefix}${item.imageTwoLink}`} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        key={index}
                                        src={`${assetPrefix}${item.imageTwoURL}`}
                                        alt={item.altText || 'Image'}
                                        className={"footerIcon"}
                                        width={500}
                                        height={500}
                                    />
                                </a>
                                <a className={"footerIconLink"} href={`${assetPrefix}${item.imageThreeLink}`} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        key={index}
                                        src={`${assetPrefix}${item.imageThreeURL}`}
                                        alt={item.altText || 'Image'}
                                        className={"footerIcon"}
                                        width={500}
                                        height={500}
                                    />
                                </a>
                            </div>
                        );
                    default:
                        return null;
                }
            })}
        </main>
    );
};

export default PageComponents;
