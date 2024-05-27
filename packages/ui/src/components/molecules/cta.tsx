import type {JSX} from "react";
import styles from './cta.module.css';

export function Cta({content}: { content: string }): JSX.Element {
    return (
        <div className={styles.buttons}
        >
            <button className={styles.btn} type="button">
                <a href="#form">
                    <span/>
                    <p data-text="Go !" data-title={content}/>
                </a>
            </button>
        </div>
    );
}
