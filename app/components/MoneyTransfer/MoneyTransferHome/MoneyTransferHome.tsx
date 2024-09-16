"use client"
import useService from "@/app/util/hooks/useService"
import dynamic from "next/dynamic"
import Content from "../Content/Content"
import ExchangeRateCard from "../ExchangeRateCard/ExchangeRateCard"
const Layout = dynamic(() => import('@/app/layout/homeLayout'), { ssr: false, })

const MoneyTransferHome = () => {
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



    return (
        <Layout>
            <div className="">
                <div className="grid 2lg:flex justify-between ">
                    <div className="2lg:col-span-8 2lg:mr-24">
                        <Content posts={posts[0]} />
                    </div>
                    <div className="2lg:col-span-4 py-14 2lg:py-0 ">
                        <div className="flex justify-center items-center ">
                            <ExchangeRateCard />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MoneyTransferHome
