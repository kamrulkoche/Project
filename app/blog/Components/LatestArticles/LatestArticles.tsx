import React from 'react'
import { VscSearch } from "react-icons/vsc";
import ArticleCard from '../ArticleCard/ArticleCard';
const LatestArticles = () => {
    return (
        <div>
            <div className='flex justify-between items-center mt-8 '>
                <h2 className='text-black dark:text-white text-xl font-medium'>Latest Articles</h2>
                <div className="flex items-center max-w-52  rounded-lg relative ">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-grow text-[10px] p-1 pl-4 border border-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#723EEB] rounded-sm "
                    />
                    <button className=" text-black rounded-full flex items-center justify-center absolute right-2 top-2">
                        <VscSearch className='text-sm font-bold' />
                    </button>
                </div>
            </div>
            <ArticleCard></ArticleCard>
        </div>
    )
}

export default LatestArticles