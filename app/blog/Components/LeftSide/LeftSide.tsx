import Image from 'next/image';
import Link from 'next/link';
import { FiArrowDownRight } from "react-icons/fi";
import { IoRemoveOutline } from "react-icons/io5";

const LeftSide = () => {
    return (
        <div>
            <h2 className='text-black dark:text-white font-medium text-xl md:hidden mb-4 '>Seamless Money Transfer, Worldwide Connection</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 2lg:flex 2lg:w-[640px] gap-4 md:gap-8 md:justify-stretch'>
                <div className='w-full h-auto md:w-56 2lg:w-full md:hidden'>
                    <Image
                        className='w-full h-auto'
                        src="/images/Rectangle.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
                <div className='grid lg:block justify-center md:col-span-2 -mt-2 ' >
                    <h2 className='text-black dark:text-white font-medium text-xl hidden md:block'>Seamless Money Transfer, Worldwide Connection</h2>
                    <div className='text-[#393939] dark:text-white text-base 2lg:text-sm font-medium 2lg:w-60 '>
                        <p className='text-justify my-4'>
                            we believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers.
                        </p>
                        <p className='text-justify'>Whether you’re sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner.</p>
                    </div>

                    <div className='flex items-center mt-6 '>
                        <div className='flex items-center text-sm 2lg:text-xs font-normal '>
                            <img src="images/Ellipse 75.png" alt="" className='' />
                            <p className='mx-2'>Admin </p>
                            <IoRemoveOutline className='text-4xl font-light '></IoRemoveOutline>
                            <p className='ml-2 '>6 Hours ago</p>
                        </div>
                        <div className='ml-4' >
                            <Link href="blog-single"><button className='bg-[#FFA44D] '><FiArrowDownRight className='text-2xl m-1 text-white'></FiArrowDownRight>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto md:w-56 2lg:w-full hidden md:block'>
                    <Image
                        className='w-full h-auto'
                        src="/images/Rectangle.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </div>
    )
}

export default LeftSide