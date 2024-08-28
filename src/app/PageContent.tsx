import { PageItem } from './Interfaces';

export const pageContent: PageItem[] = [
    {
        className: 'MainTitle',
        text: 'Lorem ipsum',
        type: 'textComponent'
    },
    {
        altText: 'Treehouse image',
        imageClassName: 'TreehouseImage',
        imageUrl: '/Treehouse.png',
        scrollingEffect: (scrollY: number) => ({
            top: `${-scrollY * 0.3}px`
        }),
        type: 'imageComponent'
    },
    {
        className: 'TextBox',
        style: { top: '100vh' },
        text: 'consectetur adipiscing elit, sed do eiusmod tempor ♡',
        type: 'textComponent'
    },
    {
        altText: 'Hot air balloon image (Pexels, Don Hainzl)',
        imageClassName: 'HotAirBalloonImage',
        imageUrl: '/HotAirBalloon.png', /* Image credit: Pexels, Don Hainzl, Yellow Hot Air Balloon on Air */
        scrollingEffect: (scrollY: number) => ({
            top: `${-scrollY * 0.2 + 100}vh`,
            left: `${scrollY * 0.1}%`
        }),
        type: 'imageComponent'
    },
    {
        hasClockImage: true,
        imageClassName: 'ClockImage',
        imageUrl: '/Clock.png',
        style: { top: '175vh' },
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        type: 'imageAndTextComponent'
    },
    {
        className: 'TextBox',
        style: { top: '250vh' },
        text: 'Duis aute irure dolor in reprehenderit?',
        type: 'textComponent'
    },
    {
        altText: 'Treebranch image',
        imageClassName: 'TreeBranchImage',
        imageUrl: '/TreeBranch.png',
        scrollingEffect: (scrollY: number) => ({
            top: `${-scrollY * 0.05 + 100}vh`,
        }),
        type: 'imageComponent'
    },
    {
        style: { top: '280vh' },
        textOne: 'Voluptate velit esse cillum dolore.',
        textOneHeader: 'Duis aute',
        textThree: 'Sunt in culpa qui officia deserunt.',
        textThreeHeader: 'Reprehenderit',
        textTwo: 'Fugiat nulla pariatur.',
        textTwoHeader: 'Irure dolor',
        type: 'threeChildSplitComponent'
    },
    {
        altText: 'Selective Focus Photography of Yellow Car Toy (Pexels, hosein ashrafosadat)',
        hasCarImage: true,
        imageClassName: 'CarImage',
        imageUrl: '/Car.png',/* Image credit: Pexels, hosein ashrafosadat */
        style: { top: '340vh' },
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
        type: 'imageAndTextComponent'
    },
    {
        className: 'TextBox',
        style: { top: '410vh' },
        text: 'culpa qui officia...',
        type: 'textComponent'
    },
    {
        altText: 'Grass image',
        imageClassName: 'GrassImage',
        imageUrl: '/Grass.png',
        type: 'imageComponent'
    },
    {
        altText: 'Social icon image',
        imageOneLink: 'kristopherpepperuk@gmail.com',
        imageOneURL: '/Envelope.png',
        imageThreeLink: 'https://www.linkedin.com/in/kristopher-pepper-824184136/',
        imageThreeURL: '/LinkedIn.png',
        imageTwoLink: 'https://github.com/KrisHHFI',
        imageTwoURL: '/GitHub.png',
        type: 'footerIcons'
    }
];
