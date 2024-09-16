"use client"
import useService from '@/app/util/hooks/useService';
import Image from 'next/image';
import { IoIosPlay } from "react-icons/io";

const AboutUs = () => {

    const { response: aboutPage } = useService({
        postType: "cms",
        slug: "About-Us-Page",
        endPoint: "/cms-post"
    });

    const { data } = aboutPage || {};
    const { posts } = data || {};

    if (!posts) {
        return <div></div>;
    }
    const { customFields } = posts[0] || {};
    const { header_one, header_two, sub_header_two, description_one, description_two, image_one, image_two, button, url } = customFields[0] || {};
    // console.log(posts);
    // console.log(firstContentHeader);

    return (
        <div className='mt-8 lg:mt-14'>
            <section>
                <div className="grid 2lg:grid-cols-2 justify-items-center items-center lg:gap-8">
                    <div className="w-full 2lg:max-w-2xl  text-black dark:text-white ">
                        <h3 className="text-2xl font-medium mb-7 lg:max-w-96">{header_one}</h3>
                        <p className="font-medium text-lg text-justify mb-4">{description_one}</p>
                    </div>
                    <div className="w-full md:max-w-xl h-auto">
                        <Image
                            className='w-full h-auto'
                            src={image_one}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="mt-14">
                    <div className="grid 2lg:flex justify-items-center justify-between items-center lg:gap-8 flex-row-reverse  ">
                        <div className="w-full text-black dark:text-white basis-1/2 2lg:pl-2 2xl:pl-20 ">
                            <h2 className="text-lg font-medium mb-4 text-[#723EEB]  dark:text-white">{header_two}</h2>
                            <h3 className="text-2xl font-medium mb-5">{sub_header_two}</h3>
                            <p className=" font-medium text-lg text-justify">{description_two}</p>
                            <div className='flex items-center mt-6'>
                                <a href={url}>
                                    <button className="bg-[#723EEB] hover:bg-[#6328ec] duration-500 text-white px-8 py-2 rounded-3xl text-base font-medium">{button}</button>
                                </a>
                                <button className='text-xl bg-[#723EEB] hover:bg-[#6328ec] duration-500 text-white p-2 rounded-full ml-6'><IoIosPlay></IoIosPlay></button>
                            </div>
                        </div>
                        <div className='w-full md:max-w-xl h-auto basis-1/2 2xl:ml-10'>
                            <Image
                                className='w-full h-auto'
                                src={image_two}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
