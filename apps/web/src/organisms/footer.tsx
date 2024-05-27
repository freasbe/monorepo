import Image from 'next/image'
import Link from "next/link";
import type {JSX} from "react";
import Logo from "../../public/logo.png"

export default function Footer(): JSX.Element {
    return (
        <footer className="footer p-10 bg-base-300 text-base-content">
            <aside>
                <Image alt="logo" height={70} src={Logo} width={50}/>
                <p className="mt-3">
                    <span className="font-exo">Freasbe</span><br/>
                    {new Date().getFullYear()} Tous droits réservés
                </p>
            </aside>
            <nav>
                <h3 className="footer-title text-2xl lg:text-base">Legal</h3>
                <Link className="link link-hover text-lg lg:text-base" href="/legal">Mentions légales</Link>
            </nav>
        </footer>
    )
}