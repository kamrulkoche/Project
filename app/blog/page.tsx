"use client";
import dynamic from 'next/dynamic';
import HeaderBlog from "./Components/HeaderBlog/HeaderBlog";
import LatestArticles from "./Components/LatestArticles/LatestArticles";
import Pagination from "./Components/Pagination/Pagination";
import { useState } from 'react';

const Layout = dynamic(() => import('@/app/layout/commonLayout'), { ssr: false });

const Page: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages: number = 20;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <Layout>
            <div className="">
                <HeaderBlog />
                <LatestArticles />
                <div className="flex justify-center mt-8">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Page;