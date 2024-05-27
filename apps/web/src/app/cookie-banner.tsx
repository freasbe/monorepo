"use client";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import cookie from "js-cookie";
import Script from "next/script";
import cookiesImg from "../assets/img/cookies.png";
import * as gtag from "../lib/gtag";

export default function CookieBanner() {
    const [cookiesValues, setCookiesValues] = useState({
        accepted: false,
        display: false,
        alreadyClicked: false,
    })

    useEffect(() => {
        if (!cookie.get('freasbe-consent-cookies')) {
            if (!cookiesValues.accepted && !cookiesValues.display && !cookiesValues.alreadyClicked) {
                setCookiesValues({
                    accepted: false,
                    display: true,
                    alreadyClicked: false
                })
            }
            if (cookiesValues.accepted) {
                cookie.set('freasbe-consent-cookies', 'true', {
                    expires: 365
                })
            }
        }
    }, [cookiesValues.accepted, cookiesValues.display])

    return (
        <>
            {
                !cookiesValues.accepted && cookiesValues.display ?
                    <div
                        className="fixed left-1/2 bottom-4 p-5 z-10 w-full sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 transform -translate-x-1/2 rounded-md shadow-md bg-base-100 text-white md:flex justify-center items-center">
                        <Image alt="Image de cookies flottants" className="hidden md:block" height="100"
                               src={cookiesImg.src}
                               width="200"/>
                        <div className="flex flex-col gap-y-5 max-h-2/3">
                            <h3 className="font-oswald text-2xl">Ce site web utilise des cookies</h3>
                            <p>{"Nous utilisons des cookies afin d'améliorer votre expérience utilisateur, et à des fins marketing"}</p>
                            <p>{"Sélectionner \"Accepter\" si vous êtes consentant avec notre politique de protection des données pour les objectifs précédemment cités ou \"Décliner\" pour fermer cette pop-up"}</p>
                            <p>Si vous souhaitez consulter vos droits conformément à la politique de gestion de données
                                personnelles, &nbsp;
                                <Link className="link link-hover text-lg lg:text-base underline font-black"
                                      href="/legal">cliquez
                                    ici</Link>
                            </p>
                            <div
                                className="w-full sm:w-1/2 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 gap-x-0 sm:gap-x-10">
                                <button
                                    className="btn btn-primary w-full sm:w-auto"
                                    onClick={() => {
                                        setCookiesValues({
                                            accepted: true,
                                            display: false,
                                            alreadyClicked: true
                                        });
                                    }}>Accepter
                                </button>
                                <button
                                    className="btn btn-secondary w-full sm:w-auto mt-2 sm:mt-0"
                                    onClick={() => {
                                        setCookiesValues({
                                            accepted: false,
                                            display: false,
                                            alreadyClicked: true
                                        });
                                    }}>Décliner
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
                            strategy="afterInteractive"
                        />
                        <Script
                            dangerouslySetInnerHTML={{
                                __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                window.gtag = gtag;
                                gtag('js', new Date());
                                gtag('config', '${gtag.GA_TRACKING_ID}', {
                                  page_path: window.location.pathname,
                                });
                            `,
                            }}
                            id="gtag-init"
                            strategy="afterInteractive"
                        />
                    </>
            }
        </>


    )
}