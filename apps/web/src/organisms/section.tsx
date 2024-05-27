import {Cta, SectionTitle} from "@repo/ui/components";
import React, {JSX} from "react";

export interface SectionProps {
    children: React.ReactNode;
    subtitle: string;
    title: string;
    description: string;
    wordsToHighlight: 1 | 2;
    id: string;
}

export function Section(props: SectionProps): JSX.Element {
    return (
        <div className="m-auto py-10 my-10 flex flex-col w-fit gap-5" id={props.id}>
            <SectionTitle
                description={props.description}
                subtitle={props.subtitle}
                title={props.title}
                wordsToHighlight={props.wordsToHighlight}
            />
            {props.children}
            <div>
                <Cta content="Rester informé"/>
            </div>
        </div>
    )
}