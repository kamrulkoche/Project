const ViewComments = [
    {
        id: 1,
        imgSrc: 'images/Ellipse 75.png',
        name: 'Article Name',
        description: "Whether you’re sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner",
        date: '11.05.2024 - 10:54:20 MP',
    },
    {
        id: 2,
        imgSrc: 'images/Ellipse 75.png',
        name: 'Article Name',
        description: "Whether you’re sending support to family abroad or facilitating international business transactions, our cutting-edge remittance solution is your trusted partner",
        date: '11.05.2024 - 10:54:20 MP',
    },

]

const Comments = () => {
    return (
        <div className="mt-6">
            <div>
                <h2 className='text-black dark:text-white text-xl font-medium '>Comments</h2>
            </div>
            <div className='text-black dark:text-white text-sm font-medium flex justify-between border-b border-black dark:border-white mt-5 pb-2'>
                <h2>Comments ( 2 )</h2>
                <h2>Newest First</h2>
            </div>
            <div className='flex items-center  '>
                <div className='text-black dark:text-white text-xs font-medium '>
                    {ViewComments.map((comments) => (
                        <div key={comments.id} className='grid 2lg:flex mt-5 '>
                            <div className='flex items-center w-64 '>
                                <img src={comments.imgSrc} alt="" className='w-6 h-6' />
                                <div className='text-[#8E8E8E] dark:text-white text-xs font-medium ml-2'>
                                    <p className="text-black dark:text-white">{comments.name}</p>
                                    <p className=''>{comments.date}</p>
                                </div>
                            </div>
                            <div className='2lg:ml-6 mt-2 2lg:mt-0'>
                                <p>{comments.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-8'>
                <textarea id="message" rows={4} className="block  p-2.5 w-full text-xs text-[#8E8E8E] bg-white rounded-lg border border-[#8E8E8E]" placeholder="Your text..."></textarea>
            </div>
            <div className='justify-end flex mt-4 2lg:mb-14 '>
                <button className=''>
                    <p className='text-xs font-medium text-white bg-[#723EEB] hover:bg-[#5a1aee] duration-500 rounded px-11 py-2'>Post Comment</p>
                </button>
            </div>
        </div>
    )
}

export default Comments
