import React, { useState } from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "../typings";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({ pageInfo }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:${pageInfo?.email}?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col space-y-6 text-center md:text-left   px-10 h-screen  mx-auto items-center"
    >
      <h3 className="mt-24  uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col  space-y-3 md:space-y-10">
        <h4 className="md:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#ff5800]/50 underline">Lets Talk.</span>
        </h4>

        <div className=" space-y-3 md:space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#ff5800]  h-4 w-4 md:h-7 md:w-7animate-pulse" />
            <p className="text-sm md:text-2xl">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#ff5800]  h-4 w-4 md:h-7 md:w-7 animate-pulse" />
            <a
              className="text-sm md:text-2xl"
              href={`mailto:${pageInfo?.email}`}
            >
              {pageInfo?.email}
            </a>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#ff5800] h-4 w-4 md:h-7 md:w-7 animate-pulse" />
            <p className="text-sm md:text-2xl">{pageInfo?.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col  space-y-2 justify-center md:items-stretch  mx-auto"
        >
          <div className="flex  space-x-2">
            <input
              className="contactInput w-1/2"
              placeholder="Name"
              type="text"
              {...register("name")}
            />
            <input
              className="contactInput w-1/2"
              placeholder="Email"
              type="text"
              {...register("email")}
            />
          </div>
          <input
            className="contactInput"
            placeholder="Subject"
            type="text"
            {...register("subject")}
          />
          <textarea
            className="contactInput h-28 md:h-36"
            placeholder="Message"
            {...register("message")}
          />

          <button
            type="submit"
            className="
            bg-[#ff5800] py-5 md:px-10 rounded-md text-black font-bold text-sm md:text-lg "
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactMe;
