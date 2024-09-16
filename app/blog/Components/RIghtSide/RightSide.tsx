import React from 'react'
import { IoRemoveOutline } from "react-icons/io5";
const items = [
    {
        id: 1,
        imgSrc: 'images/Rectangle 112.png',

    },
    {
        id: 2,
        imgSrc: 'images/Rectangle 113.png',

    },
    {
        id: 3,
        imgSrc: 'images/Rectangle 114.png',

    },
];

const RightSide = () => {
    return (
        <div className='-mt-8 md:mt-0'>
            {items.map((item) => (
                <div key={item.id} className='grid sm:flex mb-4 items-center justify-items-center ' >
                    <img src={item.imgSrc} alt="" className='w-full sm:w-[6.3rem] h-auto sm:h-auto mb-4 sm:mb-0 ' />
                    <div className='sm:ml-4 mb-4 sm:mb-0'>
                        <div className='flex items-center text-[10px] font-light text-[#8E8E8E] dark:text-white '>
                            <img src="images/Ellipse 75.png" alt="" className='w-[14px] h-[14px]' />
                            <p className='mx-2'>Admin </p>
                            <IoRemoveOutline className=' '></IoRemoveOutline>
                            <p className='ml-2'>6 Hours ago</p>
                        </div>
                        <p className='text-xs font-normal mt-1 text-justify'>
                            We believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. Whether you're sending support to family abroad or facilitating international business transactions...
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RightSide