import { FaRegDotCircle } from "react-icons/fa";
import CustomSelectRecipient from "../CustomSelectRecipient/CustomSelectRecipient";
import CustomSelectUSD from "../CustomSelectUSD/CustomSelectUSD";
const ExchangeRateCard = () => {
    return (
        <div className="bg-white dark:bg-medium shadow-md rounded-lg p-5 max-w-lg sm:w-[438px]">
            <div className="text-center mb-4 bg-[#723EEB] rounded-2xl py-4">
                <p className="text-white text-lg font-medium mb-2">Exchange Rate</p>
                <p className="text-white text-xl font-medium mt-4">1.00 USD = 1609.00 NGN</p>
            </div>
            <div>
                <label className="block text-base text-black  dark:text-white font-medium">You send exactly</label>
                <div className="flex items-center mt-2">
                    <input type="number" className="border text-sm text-black font-medium bg-white dark:bg-medium dark:text-white rounded-full rounded-r-none w-full p-2 pl-3 h-10" value={150} readOnly />
                    <div className="w-32">
                        <CustomSelectUSD />
                    </div>
                </div>
                <div className="mt-3 grid gap-2 mr-2 text-sm font-medium text-gray-700   dark:text-white">
                    <div className=" flex justify-between "><p className="flex items-center gap-1"><span><FaRegDotCircle /></span> Fees & Charges</p> <p>+3.50 USD</p></div>
                    <div className=" flex justify-between "><p className="flex items-center gap-1"><span><FaRegDotCircle /></span> Amount will convert</p> <p>150 USD</p></div>
                    <div className="flex justify-between "><p className="flex items-center gap-1"><span><FaRegDotCircle /></span> Total Payable Amount</p> <p>153.50 USD</p>
                    </div>
                    <div className="flex justify-between -mr-2 mt-3 text-base font-medium ">
                        <p className="text-[#723EEB]">Have a coupon code?</p>
                        <button className="text-white text-sm px-4 py-1.5 rounded-2xl bg-[#723EEB] hover:bg-[#4d27a3] duration-500 ">Apply</button>
                    </div>
                </div>
                <div className="mt-3">
                    <label className=" text-black dark:text-white flex items-center text-base font-medium ">Recipient gets</label>
                    <div className="flex items-center mt-2 ">
                        <input type="text" className="text-black text-sm font-medium bg-white dark:bg-medium dark:text-white border rounded-full rounded-r-none w-full p-2 pl-3 h-10" value="241350.00" readOnly />
                        <div className="w-32">
                            <div className="">
                                <CustomSelectRecipient />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3 flex justify-between items-center">
                    <div>
                        <label className="text-[#4B4B4B]  dark:text-white text-base font-medium flex items-center ">Receive Method</label>
                    </div>
                    <div>
                        <select className="border rounded-lg w-full p-2 text-[#4B4B4B] bg-white text-sm  font-medium ">
                            <option>Bank Transfer</option>
                        </select>
                    </div>
                </div>
                <div className="mt-8 ">
                    <p className="text-black  dark:text-white text-sm mb-5">You could save up to 1.5 USD</p>
                    <a href="https://diasporex-agent-indol.vercel.app/auth/login"><button className=" bg-[#723EEB] hover:bg-[#4d27a3] duration-500 text-white py-2.5 px-4 text-sm rounded-full w-full">Send Now</button></a>
                </div>
            </div>
        </div>
    )
}

export default ExchangeRateCard
