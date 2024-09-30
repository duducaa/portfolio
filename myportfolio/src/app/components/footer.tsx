"use client"

import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-blue-950 py-5 px-3 fixed w-screen relative text-center text-slate-400">
            <p className="text-xl mb-4">Contacts</p>
            <p>Email: duduca1881@gmail.com</p>
            <div className="icons flex justify-around py-6">
                <a href="https://github.com/duducaa"><FaGithub className="text-5xl" /></a>
                <FaLinkedin className="text-5xl" />
            </div>
        </footer>
    )
}