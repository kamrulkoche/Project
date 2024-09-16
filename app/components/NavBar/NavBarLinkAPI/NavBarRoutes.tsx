import Link from 'next/link';
import React from 'react'
import NavBarLinkAPI from './NavBarLinkAPI';
import { usePathname } from 'next/navigation';

const NavBarRoutes = () => {

    const pathName = usePathname(); // Get the current path
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/blog", name: "Blog" },
        { id: 3, path: "/contact-us", name: "Contact Us" },
        { id: 4, path: "/about-us", name: "About Us" },
        { id: 5, path: "https://diasporex-agent-indol.vercel.app/auth/registration", name: "Register" },
        { id: 6, path: "/faq-page", name: "FAQ" },
    ];
    return (
        <div className='grid 2lg:flex mt-5 2lg:mt-0'>
            {routes.map((route) => (
                <Link key={route.id} href={route.path}>
                    <NavBarLinkAPI
                        route={route}
                        isActive={pathName === route.path} // Pass isActive prop
                    />
                </Link>
            ))}
        </div>
    )
}

export default NavBarRoutes
