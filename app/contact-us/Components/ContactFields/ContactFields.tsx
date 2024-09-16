"use client"
import useService from "@/app/util/hooks/useService";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { PiClockCounterClockwiseFill } from "react-icons/pi";

const ContactFields = () => {

    const { response: contactPage } = useService({
        postType: "cms",
        slug: "Contact-Us-Page",
        endPoint: "/cms-post"
    });

    const { data } = contactPage || {};
    const { posts } = data || {};

    if (!posts) {
        return <div></div>;
    }
    const { customFields } = posts[1] || {};
    // console.log(posts);
    // console.log(customFields);

    const { title_one, address } = customFields[0] || {};
    const { title_two, phone, email, } = customFields[1] || {};
    const { title_three, start_date, end_date, } = customFields[2] || {};
    // console.log(title_two);


    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12">
            <div className="border-2 border-purple-500 p-8  rounded-md flex items-center w-full lg:w-auto ">
                <div className="flex items-center space-x-4">
                    <div className="bg-[#723EEB] p-4 rounded text-2xl text-white">
                        <IoLocationOutline />
                    </div>
                    <div>
                        <h3 className="text-base font-medium">{title_one}</h3>
                        <div className='text-sm font-normal'>{address}</div>
                    </div>
                </div>
            </div>
            <div className="border-2 border-purple-500 p-8  rounded-md flex items-center w-full lg:w-auto ">
                <div className="flex items-center space-x-4">
                    <div className="bg-[#723EEB] p-4 rounded text-2xl text-white">
                        <IoCallOutline />
                    </div>
                    <div>
                        <h3 className="text-base font-medium">{title_two}</h3>
                        <div className='text-sm font-normal'>Mobile: {phone}</div>
                        <div className='text-sm font-normal'>Mobile: {email}</div>
                    </div>
                </div>
            </div>
            <div className="border-2 border-purple-500 p-8  rounded-md flex items-center w-full lg:w-auto ">
                <div className="flex items-center space-x-4">
                    <div className="bg-[#723EEB] p-4 rounded text-2xl text-white">
                        <PiClockCounterClockwiseFill />
                    </div>
                    <div>
                        <h3 className="text-base font-medium">{title_three}</h3>
                        <div className='text-sm font-normal'>{start_date}</div>
                        <div className='text-sm font-normal'>{end_date}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactFields
