export interface PageItem {
    type: string;
    text?: string;
    className?: string;
    imageUrl?: string;
    imageOneUrl?: string;
    imageTwoUrl?: string;
    imageThreeUrl?: string;
    imageClassName?: string;
    scrollingEffect?: (scrollY: number) => React.CSSProperties;
    altText?: string;
    style?: React.CSSProperties;
    hasClockImage?: boolean;
    hasCarImage?: boolean;
    textOneHeader?: string;
    textOne?: string;
    textTwoHeader?: string;
    textTwo?: string;
    textThreeHeader?: string;
    textThree?: string;
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
        imageUrl: '/HotAirBalloon.png', /* Image credit: Pexels, Don Hainzl, Yellow Hot Air Balloon on Air */
        imageClassName: 'HotAirBalloonImage',
        altText: 'Hot air balloon image (Pexels, Don Hainzl)',
        scrollingEffect: (scrollY: number) => ({
            top: `${-scrollY * 0.2 + 100}vh`,
            left: `${scrollY * 0.1}%`
        })
    },
    {
        hasClockImage: true,
        imageUrl: '/Clock.png',
        imageClassName: 'ClockImage',
        style: { top: '175vh' },
        type: 'imageAndTextComponent',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
        style: { top: '250vh' },
        type: 'textComponent',
        text: 'Duis aute irure dolor in reprehenderit?',
        className: 'TextBox'
    },
    {
        type: 'imageComponent',
        imageUrl: '/TreeBranch.png',
        imageClassName: 'TreeBranchImage',
        altText: 'Treebranch image',
        scrollingEffect: (scrollY: number) => ({
            top: `${-scrollY * 0.05 + 100}vh`,
        })
    },
    {
        type: 'threeChildSplitComponent',
        style: { top: '280vh' },
        textOneHeader: 'Duis aute',
        textOne: 'Voluptate velit esse cillum dolore.',
        textTwoHeader: 'Irure dolor',
        textTwo: 'Fugiat nulla pariatur.',
        textThreeHeader: 'Reprehenderit',
        textThree: 'Sunt in culpa qui officia deserunt.'
    },
    {
        hasCarImage: true,
        imageUrl: '/Car.png',/*Image credit: Pexels, hosein ashrafosadat */
        imageClassName: 'CarImage',
        style: { top: '340vh' },
        type: 'imageAndTextComponent',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    },
    {
        style: { top: '410vh' },
        type: 'textComponent',
        text: 'culpa qui officia...',
        className: 'TextBox'
    },
    {
        type: 'imageComponent',
        imageUrl: '/Grass.png',
        imageClassName: 'GrassImage',
        altText: 'Grass image',
    },
    {
        type: 'footerIcons',
        imageOneURL: '/Envelope.png',
        imageTwoURL: '/GitHub.png',
        imageThreeURL: '/LinkedIn.png',
        altText: 'Social icon image',
    },
];
