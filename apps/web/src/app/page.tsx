"use client"
import type {JSX} from "react";
import {useEffect} from "react";
import {redirect} from "next/navigation";

export default function Home(): JSX.Element {
    useEffect(() => {
        redirect('/about')
    })

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}