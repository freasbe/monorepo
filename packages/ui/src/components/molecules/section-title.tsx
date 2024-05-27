"use client";
import type {JSX} from "react";

export interface SectionTitleProps {
    subtitle: string;
    title: string;
    description: string;
    wordsToHighlight: 1 | 2;
}

export function SectionTitle(props: SectionTitleProps): JSX.Element {

    const wordsToHighlight = props.title.split(" ")
    const lastWord = wordsToHighlight.slice(-(props.wordsToHighlight)).join(" ");
    const title = props.title.split(" ").slice(0, -(props.wordsToHighlight)).join(" ");
    const {subtitle, description} = props;


    return (
        <div className="lg:w-3/5 gap-3 flex flex-col">
            <span className="text-secondary font-oswald text-md">- {subtitle}</span>
            <h2 className="text-5xl mb-3 text-base-100 font-semibold relative -left-1">{title} <span
                className="text-primary font-semibold">{lastWord}</span></h2>
            <span className="text-neutral">{description}</span>
        </div>
    )
}