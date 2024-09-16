"use client"

const ForgotPassword = () => {
    return (
        <div className='pb-20 lg:pb-36 mt-6 lg:mt-12'>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-4">
                <div className="">
                    <img src="images/login img1.png" alt="User on laptop" className="" />
                </div>
                <div className='bg-white rounded-xl shadow-lg py-7 px-5 h-64'>
                    <div className='flex '>
                        <h2 className='mr-5 text-xs font-medium text-black '>Forgot Password?</h2>
                        <p className='text-[#7A7A7A] text-[10px] font-medium'>Khalid Mohameed</p>
                    </div>
                    <form className='mt-5'>
                        <div className="">
                            <label className='text-black text-[10px] font-medium '>Enter your email and we'll send you a link to reset your password.</label>
                            <input type="text" id="" className="border border-[#D7D7D7] text-[#4B4B4B]  text-sm rounded-2xl block w-full p-2 mt-1.5" placeholder="name@gmail.com" required />
                        </div>
                        <div className="mt-5">
                            <button
                                className="w-full md:px-4 py-2.5 bg-[#723EEB] text-white text-xs rounded-3xl hover:bg-[#6129e6] duration-500">Send link</button>
                        </div>
                    </form>
                    <div className='mt-5 flex justify-center'>
                        <a href="login" className="text-black text-xs flex">
                            <p>Already Have An Account?</p>
                            <p className='text-[#723EEB] ml-1'>Login Now</p></a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ForgotPassword
