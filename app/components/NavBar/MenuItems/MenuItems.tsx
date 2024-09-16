"use client";
import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import NavBarRoutes from '../NavBarLinkAPI/NavBarRoutes';
import RightSideMenu from '../RightSideMenu/RightSideMenu';

const MenuItems = () => {
    const [open, setOpen] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("menuOpen") === "true";
        }
        return false;
    });

    useEffect(() => {
        localStorage.setItem("menuOpen", open.toString());
    }, [open]);

    return (
        <>
            <div>
                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 h-full w-1/2 bg-slate-200 bg-opacity-90 z-50 transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out 2lg:hidden`}>
                    <div className="flex flex-col items-start py-8 ml-6">
                        <NavBarRoutes />
                        <div className="lg:hidden">
                            <RightSideMenu />
                        </div>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden 2lg:flex justify-between items-center py-6 text-[14px] font-bold">
                    <ul className="flex items-center text-[14px]">
                        <li className="mr-10">
                            <a href="/">
                                <img src="/images/diasporex-logo.png" alt="" className="rounded-lg" />
                            </a>
                        </li>
                        <NavBarRoutes />
                    </ul>
                    <RightSideMenu />
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="flex justify-between 2lg:hidden pt-4">
                    <div className="mr-10">
                        <a href="/">
                            <img src="/images/diasporex-logo.png" alt="" className="rounded-lg" />
                        </a>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="hidden lg:block">
                            <RightSideMenu />
                        </div>
                        <div
                            onClick={() => setOpen(!open)}
                            className="text-4xl text-[#723EEB] cursor-pointer"
                        >
                            {open ? <IoMdClose /> : <IoMdMenu />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MenuItems;
