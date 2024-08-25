export interface PageItem {
    type: string;
    text?: string;
    className?: string;
    imageUrl?: string;
    imageClassName?: string;
    scrollingEffect?: (scrollY: number) => React.CSSProperties;
    altText?: string;
    style?: React.CSSProperties;
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
        style: { top: '100vh' },
        type: 'textComponent',
        text: 'consectetur adipiscing elit, sed do eiusmod tempor ♡',
        className: 'TextBox'
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
    },
    {
        imageUrl: '/Clock.png',
        imageClassName: 'ClockImage',
        style: { top: '175vh' },
        type: 'imageAndTextComponent',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    },
];
