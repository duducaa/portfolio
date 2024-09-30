"use client"

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

export default function Header() {
    const [isCollapsed, setCollapse] = useState(false);

    const changeNav = () => setCollapse(!isCollapsed);

    return (
        <header className="bg-blue-950 py-5 px-3 fixed w-screen relative">
            <div className="flex justify-between items-center">
                <div className="owner-header text-white font-bold text-2xl">Eduardo&apos;s portfolio</div>
                {!isCollapsed ? 
                    <XMarkIcon className="size-10 text-white" onClick={changeNav}/> : 
                    <Bars3Icon className="size-10 text-white" onClick={changeNav}/>
                }
            </div>
            <nav className={(isCollapsed ? "hidden" : "pt-4")}>
                <ul className="text-white">
                    <li>link1</li>
                    <li>link2</li>
                    <li>link3</li>
                </ul>
            </nav>
        </header>
    )
}