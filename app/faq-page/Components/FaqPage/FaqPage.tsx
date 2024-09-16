"use client";
import { FaqAskQuestionForm } from '@/app/util/interface/faqAskQuestion.interface';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

interface FAQ {
    id: number;
    question: string;
    answer: string;
}

interface FaqPageProps {
    data: FAQ[];
}

const FaqPage: React.FC<FaqPageProps> = ({ data }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const { handleSubmit, control } = useForm<FaqAskQuestionForm>();
    const onSubmit: SubmitHandler<FaqAskQuestionForm> = (formData: FaqAskQuestionForm) => {
        console.log(formData);
    }

    return (
        <div className='container mx-auto pb-10 text-[#000] dark:text-white '>
            <div className="w-full ">
                <h2 className='text-3xl sm:text-4xl font-medium mb-10 mt-8 lg:mt-14'>Frequently Asked Questions</h2>
                <div className="grid sm:grid-cols-2">
                    {data.map((faq) => (
                        <div key={faq.id} className="mb-2 text-[#393939] dark:text-white font-medium text-lg ">
                            <button
                                className="w-full text-left py-2 "
                                onClick={() => toggleFAQ(faq.id)}
                            >
                                <div className="">
                                    <span>{openIndex === faq.id ? '▼' : '▶'}</span>
                                    <span className="font-medium ml-1">{faq.question}</span>
                                </div>
                            </button>
                            {openIndex === faq.id && (
                                <div className="py-2">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <footer className="w-full bg-white justify-center mt-12">
                <div className="flex text-base text-[8E8E8E] items-center w-full rounded-lg relative ">
                    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            control={control}
                            name="name"
                            rules={{ required: "Asked Your Question should not be empty!" }}
                            render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                                <div className="w-full">
                                    <input
                                        type="text"
                                        value={value}
                                        onChange={onChange}
                                        placeholder="Asked Your Question ......"
                                        className="flex-grow p-4 pl-2 sm:pl-4 border border-[#393939] focus:outline-none focus:ring-2 focus:ring-[#723EEB] w-full"
                                    />
                                    <br />
                                    <p className="text-red-500 font-medium m-2">{invalid && error?.message}</p>
                                </div>
                            )}
                        />
                        <button className=" bg-[#723EEB] text-white rounded-full flex items-center justify-center absolute right-4 top-3 w-8 h-8">
                            <img src="images/Vector.png" alt="" className='w-4 h-4' />
                        </button>
                    </form>
                </div>
            </footer>
        </div>
    );
}

export default FaqPage;
