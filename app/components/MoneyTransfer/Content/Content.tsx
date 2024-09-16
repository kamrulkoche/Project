"use client"
import Image from 'next/image';
import { FiPlay } from "react-icons/fi";

interface CustomFields {
    header: string;
    description_one: string;
    description_two: string;
    button: string;
    image: string;
    url: string;
}

interface Posts {
    titleEn: string;
    customFields: CustomFields[];
}

const Content = ({ posts }: { posts: Posts }) => {

    const { customFields } = posts || {};
    const { header, description_one, description_two, button, image, url } = customFields[0] || {};
    //console.log(button);

    return (
        <div className="h-full flex flex-col justify-between gap-8">
            <div>
                <h1 className="text-4xl font-medium leading-normal text-black dark:text-white 2xl:pr-96">{header}</h1>
            </div>

            <div className="text-[#393939] dark:text-slate-200 text-2xl font-medium leading-normal text-justify">
                <p>
                    {description_one}
                </p>
                <p className="my-5">
                    {description_two}
                </p>
            </div>

            <div className="flex justify-center relative">
                <div className="bg-[#723EEB] relative rounded-e-2xl w-full">
                    <Image
                        src={image}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className="absolute -top-5 sm:-top-12 h-40 sm:h-48 lg:h-52 w-auto"
                    />
                    <div className="flex justify-end items-center p-12 lg:p-14 pr-4 sm:pr-14">
                        <div className="bg-white dark:bg-dark rounded-3xl w-auto">
                            <a href={url}>
                                <button className="px-8 py-2 text-center text-sm sm:text-base text-[#723EEB] dark:text-white font-medium items-center">
                                    {button}
                                </button>
                            </a>
                        </div>
                        <div className="bg-white dark:bg-dark rounded-full p-2 sm:p-2.5 text-base text-[#723EEB] dark:text-white font-medium justify-center ml-2">
                            <FiPlay />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Content;
