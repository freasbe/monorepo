import Image from 'next/image'
import {Cta} from "@repo/ui/components";
import type {JSX} from "react";
import Logo from '../../public/logo.png'

export default function Pros({
                                 title,
                                 description,
                                 ctaContent,
                                 wordToHighlight,
                                 img,
                             }: {
    title: string;
    description: string;
    ctaContent: string;
    img: string;
    wordToHighlight: string;
}): JSX.Element {
    const splitTitle = (highlightWord: string) => {
        const index = title.indexOf(highlightWord);
        if (index !== -1) {
            const beforeHighlight = title.substring(0, index);
            const afterHighlight = title.substring(index + highlightWord.length);
            return {beforeHighlight, highlightWord, afterHighlight};
        }
        // If the highlight word is not found in the title, return the whole title as beforeHighlight
        return {beforeHighlight: title, highlightWord: "", afterHighlight: ""};
    };

    const {beforeHighlight, highlightWord, afterHighlight} = splitTitle(
        wordToHighlight
    );

    return (
        <div className="w-full flex flex-col lg:flex-row relative rounded-full">
            <div className="w-full lg:w-3/12 ltr overflow-hidden lg:rounded-r-[25%] rounded-none mb-5 lg:mb-0">
                <Image
                    alt="installer"
                    className="w-full h-full scale-125"
                    height={2000}
                    src={img}
                    style={{objectFit: "cover"}}
                    width={2000}
                />
            </div>

            <div className="w-full lg:w-5/12 p-5 lg:ml-28 flex flex-col justify-center">
                <div className="ml-5 lg:ml-10 flex flex-col gap-y-4">
                    <Image alt="logo" height={10} src={Logo} width={100}/>
                    <h2 className="font-bold text-3xl lg:text-4xl text-base-100 uppercase mt-3">
                        {beforeHighlight}
                        <span className="text-primary text-3xl lg:text-4xl font-bold font-oswald">
                        {highlightWord}
                        </span>
                        {afterHighlight}
                    </h2>
                    <p className="text-base-100/80 text-lg lg:text-base mb-5 lg:mb-0 text-justify mt-2">
                        {description}
                    </p>
                    <Cta content={ctaContent}/>
                </div>
            </div>
        </div>
    );
}
