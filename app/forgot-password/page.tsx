"use client";
import dynamic from 'next/dynamic';
import ForgotPassword from './components/ForgotPassword';
const Layout = dynamic(() => import('@/app/layout/agentLoginLayout'), { ssr: false, })
const page = () => {
    return (
        <Layout>
        <div>
           <ForgotPassword/>
        </div>
        </Layout>
    )
}

export default page
