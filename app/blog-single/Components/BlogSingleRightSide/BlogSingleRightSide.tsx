import { IoRemoveOutline } from 'react-icons/io5';

const BlogSingleRightSide = ({ limit, blogs }: any) => {
    return (
        <div>
            <div className=''>
                {blogs.slice(0, limit ?? blogs.length).map((item: any) => (
                    <div key={item.id} className='sm:flex mb-14 sm:mb-5 2xl:mb-6 items-start ' >
                        <img src={item.imgSrc} alt="" className='w-full h-auto sm:w-32 sm:h-24 mb-4 sm:mb-0 ' />
                        <div className='sm:ml-4 '>
                            <div className='flex items-center text-sm 2lg:text-xs font-normal text-[#8E8E8E] dark:text-white '>
                                <img src="images/Ellipse 75.png" alt="" className='w-4' />
                                <p className='mx-1'>{item.user} </p>
                                <IoRemoveOutline className=' '></IoRemoveOutline>
                                <p className='ml-2'>{item.date}</p>
                            </div>
                            <p className='text-base 2lg:text-sm font-normal text-justify mt-1 text-[#393939] dark:text-white'>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogSingleRightSide
