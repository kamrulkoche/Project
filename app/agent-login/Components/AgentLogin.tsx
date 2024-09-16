"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineHorizontalRule } from "react-icons/md";


const agentLogin = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='h-full w-full bg-blue-500'>
            <div className='pb-20 lg:pb-36 mt-6 lg:mt-12 '>
                <div className="lg:flex justify-between  ">
                    <div className="flex justify-center bg-red-500">
                        <img src="images/login img1.png" alt="User on laptop" className="" />
                    </div>
                    <div className="bg-white rounded-xl shadow-lg px-5 py-7 max-w-xl mt-6 lg:mt-0">
                        <h2 className="text-black text-sm font-medium mb-5">Welcome Back Agent <span className="ml-5 text-[#7A7A7A] text-xs">Khalid Mohamed</span></h2>
                        <form>
                            <div className="mb-4">
                                <label className="text-black text-sm font-medium">Email</label>
                                <input type="text" id="" className="border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 dark:border-gray-600 mt-1" placeholder="name@gmail.com" required />
                            </div>
                            <div className="mb-4">
                                <label className="text-black text-sm font-medium">Password</label>
                                <div className='relative'>
                                    <input type={showPassword ? "text" : "password"} id="" className="border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 dark:border-gray-600 mt-1" placeholder="**************" required />
                                    <button type="button" onClick={togglePasswordVisibility}>
                                        {showPassword ? <FaEye className='absolute top-3 right-4 text-xl' /> : <FaEyeSlash className='absolute top-3 right-4 text-xl' />}
                                    </button>
                                </div>
                                <div className='flex justify-end '>
                                    <a href="/forgot-password">  <p className='-mt-4 text-end text-[#723EEB] text-xs font-medium cursor-pointer py-2'>Forgot Password?</p></a>
                                </div>
                            </div>
                            <div className="mb-4">
                                <button onClick={() => router.push("/dashboard")}
                                    className="w-full md:px-4 py-2.5 bg-[#723EEB] text-white text-xs rounded-3xl hover:bg-[#6129e6] duration-500">Login</button>
                            </div>
                        </form>
                        <div className="flex flex-col items-center -mt-4">
                            <div className="flex items-center mb-4">
                                <hr className="w-20 sm:w-36 md:w-44 lg:w-48 h-px my-8 bg-black border-0 " />
                                <span className="mx-2 text-black w-20 flex text-xs font-medium ml-5">Or Login with</span  >
                                <hr className="w-20 sm:w-36  md:w-44 lg:w-48 h-px my-8 bg-black border-0 " />
                            </div>
                            <button className="border border-[#FF3D00] w-full flex justify-center py-2 -mt-5">
                                <div className='flex items-center '>
                                    <img src="images/icon-google.png" alt="" />
                                    <p className='text-[#FF3D00] text-xs font-medium ml-2'>Login with Google</p>
                                </div>
                            </button>
                        </div>

                        <div className="text-center mt-4 flex justify-center gap-1">
                            <MdOutlineHorizontalRule />
                            <a href="register" className="text-black text-xs flex">
                                <p>Don't have an account?</p>
                                <p className='text-[#723EEB] ml-1'>Register as Agent</p></a>
                            <MdOutlineHorizontalRule />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default agentLogin
