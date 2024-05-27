import type {JSX} from "react";
import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";

export function Navbar(): JSX.Element {
    return (
        <header className="header-area">
            <div className="navbar fixed top-0 left-0 right-0 z-50 border-none lg:bg-white lg:shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label className="btn bg-secondary border-0 shadow-sm btn-circle" tabIndex={0}>
                            <svg className="h-5 w-5" fill="none" stroke="white" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6h16M4 12h16M4 18h7" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2"/>
                            </svg>
                        </label>
                        <ul className="menu menu-compact gap-y-3 dropdown-content mt-5 p-2 shadow-lg bg-secondary rounded-box w-52 ">
                            <li>
                                <a href="#issues">Problématiques</a>
                            </li>
                            <li>
                                <a href="#administer">Pour les régies</a>
                            </li>
                            <li>
                                <a href="#installers">Pour les installateurs</a>
                            </li>
                            <li>
                                <a href="#about-freasbe">
                                    C&apos;est quoi freasbe
                                </a></li>
                            <li>
                                <button type="button" className="btn btn-primary text-white">
                                    <a href="#form">
                                        {"Le projet m'intéresse"}
                                    </a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end lg:justify-center">
                    <Image alt="logo" height={50} src={Logo} width={50}/>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <button className="btn btn-secondary text-white">
                        <a href="#form">
                            Le projet m&apos;intéresse
                        </a>
                    </button>
                </div>
            </div>
        </header>
    );
}
