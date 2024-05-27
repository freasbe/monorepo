import type {JSX} from "react";
import type { CardProps} from "../atoms/card.tsx";
import {Card} from "../atoms";

interface CardContainerProps extends CardProps {
    fullWidth?: boolean;
}

export function CardWithContainer(props: CardContainerProps): JSX.Element {
    return (
        <div className={props.fullWidth ? 'w-full md:w-[48%]' : "w-full lg:w-5/12 min-h-20"}>
            <Card cardType={props.cardType} numberCard={props.numberCard} label={props.label}
                  description={props.description}/>
        </div>
    )
}