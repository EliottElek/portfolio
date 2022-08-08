import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { useForm } from "react-hook-form";
function Contact() {
  const [message, setMessage] = useState(null);
  // https://react-hook-form.com/get-started
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { error } = await supabase
      .from("contact_form_entries")
      .insert([data], { returning: "minimal" });
    if (error) {
      setMessage({
        type: "error",
        content: "An error occured. Please try again later.",
      });
      console.log(error);
    } else
      setMessage({
        type: "success",
        content: "Thanks for contacting us ! We'll come back to you very soon.",
      });
  };

  return (
    <div
      id="contact"
      className="max-w-[1240px] mx-auto flex flex-col justify-center h-full px-4 mt-8 p-2 dark:text-gray-100"
    >
      <div className="">
        <p className="text-lg tracking-widest uppercase text-green-500">
          Contact
        </p>
        <h2 className="py-4">Get in touch with me</h2>
      </div>
      <div className="">
        <div className="relative">
          <h2 className="sr-only">Contact us</h2>
          <div>
            <div className="py-10 lg:col-span-2">
              <p>
                You want more information about one of my projects, or simply
                want to get in touch with me ?
              </p>
              <p>Send me a message, I'll be very happy to reply to you.</p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-warm-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      required
                      type="text"
                      placeholder="John"
                      {...register("firstname")}
                      autoComplete="given-name"
                      className="py-3 px-4 block w-full text-warm-gray-900 bg-transparent border-opacity-40
                      outline-none focus:border-b-green-500  border-b-2 border-b-green-400 rounded-none border-warm-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-warm-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      required
                      type="text"
                      placeholder="Doe"
                      {...register("lastname")}
                      autoComplete="family-name"
                      className="py-3 px-4 block w-full text-warm-gray-900 bg-transparent border-opacity-40
 outline-none focus:border-b-green-500  border-b-2 border-b-green-400 rounded-none border-warm-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-warm-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      required
                      placeholder="john@doe.com"
                      {...register("email")}
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full text-warm-gray-900 bg-transparent border-opacity-40
 outline-none focus:border-b-green-500  border-b-2 border-b-green-400 rounded-none border-warm-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-warm-gray-900"
                    >
                      Phone
                    </label>
                    <span className="text-sm text-warm-gray-500">Optional</span>
                  </div>
                  <div className="mt-1">
                    <input
                      required
                      type="text"
                      placeholder="+33 6 12 23 43 23"
                      {...register("phone")}
                      autoComplete="tel"
                      className="py-3 px-4 block w-full text-warm-gray-900 bg-transparent border-opacity-40
 outline-none focus:border-b-green-500  border-b-2 border-b-green-400 rounded-none border-warm-gray-300"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-warm-gray-900"
                    >
                      Message
                    </label>
                    <span className="text-sm text-warm-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      required
                      placeholder="Your portfolio looks awesome Eliott."
                      {...register("message")}
                      rows={4}
                      className="py-3 px-4 block w-full text-warm-gray-900 bg-transparent border-opacity-40
 outline-none focus:border-b-green-500  border-b-2 border-b-green-400 rounded-none border-warm-gray-300"
                      aria-describedby="message-max"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md text-base text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 font-bold focus:ring-offset-2 focus:ring-sky-500 sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {message && (
                <div className="w-full mt-4 sm:mt-0">
                  <p
                    className={[
                      message.type === "error"
                        ? "text-red-500"
                        : "text-green-400",
                      "",
                    ].join(" ")}
                  >
                    {message.content}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
