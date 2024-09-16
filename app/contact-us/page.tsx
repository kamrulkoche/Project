import dynamic from 'next/dynamic'
import ContactFields from './Components/ContactFields/ContactFields'
import GetInTouch from './Components/GetInTouch/GetInTouch'
const Layout = dynamic(() => import('@/app/layout/commonLayout'), { ssr: false, })

const page = () => {
    return (
        <Layout>
            <div>
                <ContactFields></ContactFields>
                <GetInTouch></GetInTouch>
            </div>
        </Layout>
    )
}

export default page
