import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="bg-[#27105C] dark:bg-dark mt-10 py-10 text-white text-xs font-medium px-2 sm:px-[100px]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:justify-items-center items-center px-4 container mx-auto">
                    <div>
                        <img src="/images/Rectangle 127.png" alt="" />
                        <p className="mt-5">We compared and reviewed the best money transfer web & apps based on  features, fees, transfer remittance, Me link for a quick and secure  payment option.</p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h3 className="font-medium underline"> Useful Links</h3>
                            <p className="mt-4 font-medium">Privacy Policy</p>
                        </div>
                        <div className="lg:hidden">
                            <h3 className="font-medium underline mb-4">Follow us</h3>
                            <ul className="flex gap-5">
                                <li className="bg-[#723EEB] hover:bg-[#4d27a3] duration-500 text-white text-xl p-1 rounded-lg cursor-pointer"><CiFacebook /></li>
                                <li className="bg-[#723EEB] hover:bg-[#4d27a3] duration-500 text-white text-xl p-1 rounded-lg cursor-pointer"><FaInstagram /></li>
                                <li className="bg-[#723EEB] hover:bg-[#4d27a3] duration-500 text-white text-xl p-1 rounded-lg cursor-pointer"><FaLinkedinIn /></li>

                            </ul>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <h3 className="font-medium underline mb-4 text-end">Follow us</h3>
                        <ul className="flex gap-5">
                            <li className="bg-[#723EEB] hover:bg-[#4d27a3] duration-500 text-white text-xl p-1 rounded-lg cursor-pointer"><CiFacebook /></li>
                            <li className="bg-[#723EEB] hover:bg-[#4d27a3] duration-500 text-white text-xl p-1 rounded-lg cursor-pointer"><FaInstagram /></li>
                            <li className="bg-[#723EEB] hover:bg-[#4d27a3] duration-500 text-white text-xl p-1 rounded-lg cursor-pointer"><FaLinkedinIn /></li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[#723EEB] dark:bg-dark ">
                <p className="text-white text-xs text-center py-2 ">Copyright © 2024, All Right Reserved DiasporeX </p>
            </div>
        </div>
    )
}

export default Footer
