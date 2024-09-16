import React from 'react'
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const RightSideMenu = () => {
    return (
        <div className="grid lg:flex gap-5 items-center justify-items-start ml-2">
            <LanguageDropdown />
            <div className='ml-5 lg:ml-0'>
                <ThemeToggle />
            </div>
            <a href="https://diasporex-agent-indol.vercel.app/auth/login">
                <button className="flex items-center gap-2 border border-[#723EEB] bg-[#723EEB] hover:bg-[#4d27a3] duration-500 px-5 py-2 rounded-3xl text-white font-medium cursor-pointer">Agent Login</button>
            </a>
            <a href="https://diasporex-user.vercel.app/dashboard">
                <button className="flex items-center gap-2 border border-[#723EEB] bg-[#723EEB] hover:bg-[#4d27a3] duration-500 px-5 py-2 rounded-3xl text-white font-medium cursor-pointer">Login</button>
            </a>
        </div>

    )
}

export default RightSideMenu
