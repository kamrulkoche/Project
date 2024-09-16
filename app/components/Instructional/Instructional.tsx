import useService from "@/app/util/hooks/useService";

const Instructional = () => {
    const { response: homePage } = useService({
        postType: "cms",
        slug: "home-page",
        endPoint: "/cms-post"
    });

    // Destructure the data
    const { data } = homePage || {};
    const { posts } = data || {};

    // // If posts are undefined or null, return early
    if (!posts) {
        return <div></div>;  // If posts are undefined or null, show loading indicator
    }

    const { customFields } = posts[2] || {};
    const { header, description_one, description_two, register_content, button, image, url } = customFields[0] || {};
    // console.log(customFields);

    return (
        <>
            <div className=" text-white text-center text-4xl  md:text-[4rem]  font-medium rounded-md bg-[#723EEB] py-20 md:py-40 mt-10 ">
                {header}
            </div>
            <div className="grid justify-center lg:flex lg:justify-between lg:items-start mt-14 flex-row-reverse ">
                <div className="grid justify-center">
                    <div className="relative w-48 h-auto pb-10 lg:w-72  ">
                        <img src={image} alt="" className="" />
                        <div className=" dark:hidden absolute bottom-0 right-0 h-[45%] w-full" style={{
                            background: "linear-gradient(176deg, rgba(255, 255, 255, 0) -64.51%, #FFF -9.2%)",
                            filter: 'blur(60px)'
                        }}
                        >
                        </div>
                    </div>
                </div>
                <div className="text-black dark:text-white text-3xl md:text-5xl lg:text-6xl font-medium">
                    <p className="text-start">{description_one}</p>
                    <p className=" text-start mt-4">{description_two}</p>
                    <div className="flex mt-[3.7rem] items-center justify-center lg:justify-start ">
                        <p className="text-lg text-start lg:text-[40px] font-medium ">{register_content}</p>
                        <a href={url}>
                            <button className=" bg-[#723EEB] hover:bg-[#4d27a3] duration-500 text-base sm:text-xl font-medium text-white py-2 px-3 lg:px-4 rounded-full w-auto  ml-8">{button}</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Instructional
