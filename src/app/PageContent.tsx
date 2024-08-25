export interface PageItem {
    type: string;
    text?: string;
    className?: string;
    imageUrl?: string;
    imageClassName?: string;
    scrollingEffect?: (scrollY: number) => React.CSSProperties;
    altText?: string;
}

export const pageContent: PageItem[] = [
    {
        type: 'textComponent',
        text: 'Lorem ipsum',
        className: 'MainTitle'
    },
    {
        type: 'imageComponent',
        imageUrl: '/Treehouse.png',
        imageClassName: 'TreehouseImage',
        altText: 'Treehouse image',
        scrollingEffect: (scrollY: number) => ({
            top: `${-scrollY * 0.3}px`
        })
    },
    {
        type: 'textComponent',
        text: 'consectetur adipiscing elit, sed do eiusmod tempor ♡',
        className: 'PageOneText'
    },
    {
        type: 'imageComponent',
        imageUrl: '/HotAirBalloon.png',
        imageClassName: 'HotAirBalloonImage',
        altText: 'Hot air balloon image',
        scrollingEffect: (scrollY: number) => ({
            top: `${-scrollY * 0.2 + 100}vh`,
            left: `${scrollY * 0.1}%`
        })
    }
];
