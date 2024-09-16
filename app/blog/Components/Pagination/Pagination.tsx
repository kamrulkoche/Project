import React, { useEffect, useState } from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 960); 
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    return (
        <div className="flex justify-center my-4 border border-purple-500 rounded-md text-sm font-semibold">
            {getPageNumbers().map((number) => {
                if (number === 1 || (number >= currentPage - (isMobile ? 2 : 4) && number <= currentPage + (isMobile ? 2 : 8))) {
                    return (
                        <button
                            key={number}
                            onClick={() => onPageChange(number)}
                            className={`px-4 py-2 border-r border-purple-500 ${currentPage === number ? 'bg-purple-700 text-white' : 'text-purple-700 border-purple-500 hover:bg-purple-100'}`}
                        >
                            {number}
                        </button>
                    );
                }
                return null;
            })}

            {currentPage < totalPages - 2 && (
                <span className="px-4 py-2 border-r border-purple-500">...</span>
            )}

            <button
                onClick={() => onPageChange(totalPages)}
                className={`px-4 py-2 border-r border-purple-500 ${currentPage === totalPages ? 'bg-purple-700 text-white' : 'text-purple-700 border-purple-500 hover:bg-purple-100'}`}
            >
                {totalPages}
            </button>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 text-purple-700 border-purple-500 hover:bg-purple-100 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
            >
                &raquo;
            </button>
        </div>
    );
};

export default Pagination;