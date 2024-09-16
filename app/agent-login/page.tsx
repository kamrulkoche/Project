"use client";
import dynamic from 'next/dynamic';
import AgentLogin from "./Components/AgentLogin";
const Layout = dynamic(() => import('@/app/layout/agentLoginLayout'), { ssr: false, })

const page = () => {
  return (
    <Layout>
      <div>
        <AgentLogin></AgentLogin>
      </div>
    </Layout>
  )
}

export default page
