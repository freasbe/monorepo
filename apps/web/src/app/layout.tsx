import React, { JSX } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "../organisms/navbar.tsx";
import CookieBanner from "./cookie-banner.tsx";

export const metadata: Metadata = {
    title: "Freasbe - La plateforme de vos projets de transition énergétique",
    description: "La plateforme tout en un afin de vous accompagner dans vos projets de A à Z",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>): JSX.Element {
    return (
        <html lang="en">
        <body className={`${inter.className} pt-10 bg-[#f1f1f1]`}>
        <CookieBanner />
        <Navbar />
        {children}
        </body>
        </html>
    );
}
