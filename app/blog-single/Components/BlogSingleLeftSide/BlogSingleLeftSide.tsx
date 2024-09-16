"use client";
import { useState } from 'react';
import { BiLike, BiPlayCircle } from 'react-icons/bi';
import { IoRemoveOutline } from 'react-icons/io5';
import Comments from '../Comments/Comments';

const BlogSingleLeftSide = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handlePlayButtonClick = () => {
        setIsVideoPlaying(true);
    };

    return (
        <div>
            <div>
                <h2 className='text-2xl font-medium text-black dark:text-white mb-1'>
                    Seamless Money Transfer, Worldwide Connection
                </h2>
                <div className='flex items-center text-xs font-normal text-[#393939] dark:text-white'>
                    <img src="images/Ellipse 75.png" alt="Author" className='w-7 h-7' />
                    <p className='mx-2'>Admin</p>
                    <IoRemoveOutline className='text-4xl font-light' />
                    <p className='ml-2'>6 Hours ago</p>
                </div>
            </div>

            <div className='grid justify-center'>
                <div className='grid justify-center mb-7 mt-3'>
                    <img src="images/Rectangle 111 (1).png" alt="" className='w-[750px]' />
                </div>
                <div className='grid justify-center mb-7 mt-3 relative'>
                    {!isVideoPlaying ? (
                        <>
                            <img src="images/Rectangle 115.png" alt="Blog visual" className='w-[506px]' />
                            <BiPlayCircle
                                className='absolute text-white text-[4rem] cursor-pointer'
                                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                                onClick={handlePlayButtonClick}
                            />
                        </>
                    ) : (
                        <video width="506" controls autoPlay>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            </div>

            <div className='text-[#393939] dark:text-white text-justify text-base font-medium mt-8'>
                <p>we believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. Whether you’re sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.we believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. Whether you’re sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.we believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. </p>

                <p className='my-4'>Whether you’re sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.we believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. Whether you’re sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.we believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers.  Whether you’re sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.we believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers.  Whether you’re sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.we believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers.</p>

                <p>Whether you’re sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.we believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. </p>

                <p className='my-4'>Whether you’re sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.we believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. Whether you’re sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.we believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. Whether you’re sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.we believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. international business transactions, our cutting-edge remittance solution is your trusted partner.we believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers. </p>
            </div>
            <div className='flex'>
                <p className='bg-[#723EEB] text-white flex items-center text-xs font-medium rounded p-2 mr-2'><BiLike className='mr-1 text-sm'></BiLike> Like</p>
                <p className=' text-[#723EEB] flex items-center text-xs font-medium'> Likes (5000)</p>
            </div>
            <div>
                <Comments/>
            </div>
        </div>
    );
};

export default BlogSingleLeftSide;
