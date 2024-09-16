'use client';

import Image from 'next/image';
import { useState } from 'react';
const CustomSelectRecipient = () => {
    const [selectedOption, setSelectedOption] = useState('Bank Transfer');
    return (
        <div className="relative w-full">
            <div className="flex items-center border rounded-r-full dark:border-dark w-full p-2 font-semibold bg-[#723EEB] text-white">
                <Image src="/images/Ellipse 1.png" alt="Bank Transfer" width={24} height={24} className="mr-2" />
                <select
                    className="appearance-none bg-transparent focus:outline-none w-full cursor-pointer text-sm  font-medium"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                >
                    <option>NGN</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default CustomSelectRecipient
