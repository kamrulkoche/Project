import React from 'react'
import Link from 'next/link'

import { FiArrowDownRight } from 'react-icons/fi';
import { IoRemoveOutline } from 'react-icons/io5';
import { LiaEyeSolid } from "react-icons/lia";
import { BiLike } from "react-icons/bi";
import { LiaComment } from "react-icons/lia";

const articles = [
    {
        id: 1,
        imgSrc: 'images/Rectangle 120.png',
        title: 'Article Name',
        description: "We believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. Whether you're sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.",
        author: 'Admin',
        date: '12.06.2023',
        views: 7564,
        likes: 395,
        comments: 10,
    },
    {
        id: 2,
        imgSrc: 'images/Rectangle 120.png',
        title: 'Article Name',
        description: "We believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. Whether you're sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.",
        author: 'Admin',
        date: '12.06.2023',
        views: 7564,
        likes: 395,
        comments: 10,
    },
    {
        id: 3,
        imgSrc: 'images/Rectangle 120.png',
        title: 'Article Name',
        description: "We believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. Whether you're sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.",
        author: 'Admin',
        date: '12.06.2023',
        views: 7564,
        likes: 395,
        comments: 10,
    },
    {
        id: 4,
        imgSrc: 'images/Rectangle 120.png',
        title: 'Article Name',
        description: "We believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. Whether you're sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.",
        author: 'Admin',
        date: '12.06.2023',
        views: 7564,
        likes: 395,
        comments: 10,
    },
    {
        id: 5,
        imgSrc: 'images/Rectangle 120.png',
        title: 'Article Name',
        description: "We believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. Whether you're sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.",
        author: 'Admin',
        date: '12.06.2023',
        views: 7564,
        likes: 395,
        comments: 10,
    },
    {
        id: 6,
        imgSrc: 'images/Rectangle 120.png',
        title: 'Article Name',
        description: "We believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. Whether you're sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.",
        author: 'Admin',
        date: '12.06.2023',
        views: 7564,
        likes: 395,
        comments: 10,
    },
    {
        id: 7,
        imgSrc: 'images/Rectangle 120.png',
        title: 'Article Name',
        description: "We believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. Whether you're sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.",
        author: 'Admin',
        date: '12.06.2023',
        views: 7564,
        likes: 395,
        comments: 10,
    },
    {
        id: 8,
        imgSrc: 'images/Rectangle 120.png',
        title: 'Article Name',
        description: "We believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. Whether you're sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.",
        author: 'Admin',
        date: '12.06.2023',
        views: 7564,
        likes: 395,
        comments: 10,
    },
    {
        id: 9,
        imgSrc: 'images/Rectangle 120.png',
        title: 'Article Name',
        description: "We believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. Whether you're sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.",
        author: 'Admin',
        date: '12.06.2023',
        views: 7564,
        likes: 395,
        comments: 10,
    },
    {
        id: 10,
        imgSrc: 'images/Rectangle 120.png',
        title: 'Article Name',
        description: "We believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. Whether you're sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.",
        author: 'Admin',
        date: '12.06.2023',
        views: 7564,
        likes: 395,
        comments: 10,
    },
    {
        id: 11,
        imgSrc: 'images/Rectangle 120.png',
        title: 'Article Name',
        description: "We believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. Whether you're sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.",
        author: 'Admin',
        date: '12.06.2023',
        views: 7564,
        likes: 395,
        comments: 10,
    },
    {
        id: 12,
        imgSrc: 'images/Rectangle 120.png',
        title: 'Article Name',
        description: "We believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. Whether you're sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.",
        author: 'Admin',
        date: '12.06.2023',
        views: 7564,
        likes: 395,
        comments: 10,
    },

];
const ArticleCard = () => {
    return (
        <div>
            <div className="grid justify-items-center sm:place-content-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-7 gap-10">
                {articles.map((article) => (
                    <div key={article.id} className="bg-white shadow-lg rounded-lg max-w-md">
                        <img src={article.imgSrc} alt="Article Image" className="rounded-t-sm w-full" />
                        <div className="mt-3 mx-4">
                            <h2 className="text-base font-medium mb-1 ">{article.title}</h2>
                            <p className="text-gray-700 text-sm font-normal text-justify">{article.description}</p>
                            <div className='flex items-center text-[#8E8E8E] text-sm font-normal mt-4 '>
                                <img src="images/Ellipse 75.png" alt="" className='w-5' />
                                <p className='mx-2'>Admin </p>
                                <IoRemoveOutline className=' '></IoRemoveOutline>
                                <p className='ml-2'>11.05.2024, 10:33:06 AM</p>
                            </div>
                            <div className="flex items-center justify-between mt-6 ">
                                <div className="flex items-center  text-sm font-normal dark:text-black">
                                    <span className='flex items-center '><LiaEyeSolid className=' mr-1 ' /> {article.views}</span>
                                    <span className='flex items-center mx-3'><BiLike className=' mr-1' /> {article.likes}</span>
                                    <span className='flex items-center'><LiaComment className=' mr-1' /> {article.comments}</span>
                                </div>
                                <Link href="blog-single"><button className='bg-[#FFA44D] '><FiArrowDownRight className='text-xl m-1 text-white'></FiArrowDownRight>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArticleCard