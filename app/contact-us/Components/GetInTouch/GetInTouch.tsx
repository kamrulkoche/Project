"use client";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IGetInTouchForm } from "@/app/util/interface/getInTouche.interface";
import { getInTouchValidation } from "@/app/util/validations/GetInTouch.validation";

const GetInTouch = () => {
    const { handleSubmit, control, } = useForm<IGetInTouchForm>();

    const onSubmit: SubmitHandler<IGetInTouchForm> = (data: IGetInTouchForm) => {
        console.log(data);
    }
    return (
        <div className="mt-20 mb-28">
            <div className="text-center text-black dark:text-white">
                <h3 className="text-sm font-medium text-[#723EEB]">CONTACT US</h3>
                <h2 className="text-2xl font-medium mt-2">Get In Touch With Us</h2>
            </div>

            <div className="mt-11 grid grid-cols-1 lg:grid-cols-2 ">
                <div className="w-full flex lg:block justify-center">
                    <img src="images/Rectangle 139.png" alt="Contact Illustration" className="" />
                </div>
                <div className="w-full">
                    <form className="space-y-4" noValidate onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex space-x-4">
                            <Controller
                                control={control}
                                name="name"
                                rules={{ required: "Name should not be empty!" }}
                                render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                                    <div className="w-full">
                                        <input
                                            type="text"
                                            value={value}
                                            onChange={onChange}
                                            placeholder="Name..."
                                            className="w-full p-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#723EEB]"
                                        />
                                        <br />
                                        <p className="text-red-500 font-medium m-2">{invalid && error?.message}</p>
                                    </div>
                                )}
                            />

                            <Controller
                                control={control}
                                name="email"
                                rules={getInTouchValidation.email}
                                render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                                    <div className="w-full ">
                                        <input
                                            type="email"
                                            value={value}
                                            onChange={onChange}
                                            placeholder="Email..."
                                            className="w-full p-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#723EEB]"
                                        />
                                        <p className="text-red-500 font-medium m-2">{invalid && error?.message}</p>
                                    </div>
                                )}
                            />
                        </div>
                        <Controller
                            control={control}
                            name="subject"
                            rules={getInTouchValidation.subject}
                            render={({ field, fieldState: { invalid, error } }) => (
                                <div>
                                    <input
                                        type="text"
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder="Subject..."
                                        className="w-full p-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#723EEB]"
                                    />
                                    <p className="text-red-500 font-medium m-2">{invalid && error?.message}</p>
                                </div>
                            )}
                        />
                        <Controller
                            control={control}
                            name="message"
                            rules={getInTouchValidation.message}
                            render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                                <>
                                    <textarea
                                        placeholder="Message..."
                                        value={value}
                                        onChange={onChange}
                                        className="w-full p-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#723EEB] h-32"
                                    ></textarea>
                                    <p className="text-red-500 font-medium m-2">{invalid && error?.message}</p>
                                </>

                            )}
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#723EEB] text-white p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#723EEB] hover:bg-[#662bf0] duration-500"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;
