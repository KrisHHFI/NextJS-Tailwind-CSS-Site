export interface PageItem {
    altText?: string;
    className?: string;
    hasCarImage?: boolean;
    hasClockImage?: boolean;
    imageClassName?: string;
    imageOneLink?: string;
    imageOneUrl?: string;
    imageThreeLink?: string;
    imageThreeUrl?: string;
    imageTwoLink?: string;
    imageTwoUrl?: string;
    imageUrl?: string;
    scrollingEffect?: (scrollY: number) => React.CSSProperties;
    style?: React.CSSProperties;
    text?: string;
    textOne?: string;
    textOneHeader?: string;
    textThree?: string;
    textThreeHeader?: string;
    textTwo?: string;
    textTwoHeader?: string;
    type: string;
}