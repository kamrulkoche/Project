"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import FaqPage from './Components/FaqPage/FaqPage'
import useService from '../util/hooks/useService'
const Layout = dynamic(() => import('@/app/layout/commonLayout'), { ssr: false, })
const page = () => {

    const { response: faqPage } = useService({
        postType: "cms",
        slug: "Faq-Page",
        endPoint: "/cms-post"
    });

    const { data } = faqPage || {};
    const { posts } = data || {};

    if (!posts) {
        return <div></div>;
    }
    const { customFields } = posts[0] || {};

    // console.log(customFields);
    
    
    return (
        <Layout>
            <div>
                <FaqPage data={customFields} />
            </div>
        </Layout>
    )
}

export default page
