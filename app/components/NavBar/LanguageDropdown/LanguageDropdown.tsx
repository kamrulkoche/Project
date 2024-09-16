'use client';
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const LanguageDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageSelect = (language: string) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <div
                className="group border border-[#8E8E8E] px-4 py-2 rounded-lg hover:bg-[#4d27a3] duration-500 hover:text-white cursor-pointer"
                onClick={toggleDropdown}
            >
                <button className="flex items-center gap-3 text-black lg:dark:text-white duration-500 group-hover:text-white">
                    {selectedLanguage}
                    <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                </button>
            </div>
            <div
                className={`absolute right-0 w-[6.8rem] origin-top-right bg-white border border-gray-300 rounded-md shadow-lg transition-all duration-200 ${
                    isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
            >
                <div className="py-1">
                    {languages.map((language) => (
                        <div
                            key={language}
                            onClick={() => handleLanguageSelect(language)}
                            className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer text-center"
                        >
                            {language}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LanguageDropdown;
