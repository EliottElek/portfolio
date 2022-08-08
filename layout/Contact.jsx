import React, { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";

function Contact() {
  const [message, setMessage] = useState(null);
  // https://react-hook-form.com/get-started
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { error } = await supabase
      .from("form-entries")
      .insert([data], { returning: "minimal" });
    if (error)
      setMessage({
        type: "error",
        content: "An error occured. Please try again later.",
      });
    else
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
            <div className="py-10  lg:col-span-2">
              <h2 className="text-lg font-medium text-warm-gray-900">
                Send us a message
              </h2>
              <p>
                Looking for more informations about our services and offers? Or
                even to join us? Feel free to contact us.
              </p>
              <p>We'll be happy to reply as quickly as we can.</p>
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
                      {...register("firstname")}
                      autoComplete="given-name"
                      className="py-3 px-4 border block w-full text-warm-gray-900 focus:ring-sky-500 focus:border-sky-500 border-warm-gray-300 rounded-md"
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
                      {...register("lastname")}
                      autoComplete="family-name"
                      className="py-3 px-4 block border w-full text-warm-gray-900 focus:ring-sky-500 focus:border-sky-500 border-warm-gray-300 rounded-md"
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
                      {...register("email")}
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 border block w-full text-warm-gray-900 focus:ring-sky-500 focus:border-sky-500 border-warm-gray-300 rounded-md"
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
                      {...register("phone")}
                      autoComplete="tel"
                      className="py-3 px-4 border block w-full text-warm-gray-900 focus:ring-sky-500 focus:border-sky-500 border-warm-gray-300 rounded-md"
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
                      {...register("message")}
                      rows={4}
                      className="py-3 px-4 block w-full text-warm-gray-900 focus:ring-sky-500 focus:border-sky-500 border border-warm-gray-300 rounded-md"
                      aria-describedby="message-max"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md text-base font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:w-auto"
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
