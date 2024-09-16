"use client"
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import BlogSingleLeftSide from './Components/BlogSingleLeftSide/BlogSingleLeftSide'
import BlogSingleRightSide from './Components/BlogSingleRightSide/BlogSingleRightSide'
const Layout = dynamic(() => import('@/app/layout/commonLayout'), { ssr: false, })

const page = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <Layout>
            <div className='grid grid-cols-1 2lg:grid-cols-5 gap-6 2lg:gap-16 mt-4 2lg:mt-16'>
                <div className='2lg:col-span-3'>
                    <BlogSingleLeftSide></BlogSingleLeftSide>
                </div>
                <div className='2lg:col-span-2 mt-2'>
                    <h2 className='text-black dark:text-white text-sm font-medium mb-2'>Latest Articles</h2>
                    <BlogSingleRightSide blogs={blogs} ></BlogSingleRightSide>
                </div>
            </div>
        </Layout>
    )
}

export default page
