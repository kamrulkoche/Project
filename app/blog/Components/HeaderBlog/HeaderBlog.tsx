import BlogSingleRightSide from '@/app/blog-single/Components/BlogSingleRightSide/BlogSingleRightSide';
import { useEffect, useState } from 'react';
import LeftSide from '../LeftSide/LeftSide';

const HeaderBlog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);
 
    return (
        <div>
            <div className='grid 2lg:flex mt-6 lg:mt-[4.4rem] sm:pb-7 border-b  gap-8'>
                <div className=''>
                    <LeftSide></LeftSide>
                </div>
                <div className='mt-3 2lg:mt-0 '>
                    <BlogSingleRightSide limit={3} blogs={blogs} />
                </div>
            </div>
        </div>
    )
}

export default HeaderBlog