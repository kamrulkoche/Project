import dynamic from 'next/dynamic'
import AboutUs from './Components/AboutUs/AboutUs'
const Layout = dynamic(() => import('@/app/layout/commonLayout'), { ssr: false, })
const page = () => {
    return (
        <Layout>
            <div>
                <AboutUs />
            </div>
        </Layout>
    )
}

export default page
