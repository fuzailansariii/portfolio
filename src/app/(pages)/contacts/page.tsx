"use client";
import { ContactModal } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof ContactModal>>({
    resolver: zodResolver(ContactModal),
  });

  const onSubmit = (data: z.infer<typeof ContactModal>) => {
    console.log("Form Data: ", data);
    reset();
  };

  return (
    <div className="max-w-screen-xl mx-auto p-5 min-h-[80vh]">
      <h1 className="text-4xl my-10 font-bold">Contacts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
        <div className="m-10 flex items-center">
          <h1 className="text-cyan-400 text-xl font-semibold">
            Please Fill The Form
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <input
                {...register("firstname")}
                type="text"
                placeholder="First Name"
                className="input input-primary w-full"
              />
              {errors.firstname && (
                <p className="text-red-500 text-sm">
                  {errors.firstname.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("lastname")}
                type="text"
                placeholder="Last Name"
                className="input input-primary w-full"
              />
              {errors.lastname && (
                <p className="text-red-500 text-sm">
                  {errors.lastname.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="input input-primary w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("subject")}
                type="text"
                placeholder="Subject"
                className="input input-primary w-full"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject.message}</p>
              )}
            </div>
          </div>

          <div>
            <textarea
              {...register("message")}
              className="textarea w-full input-primary"
              placeholder="Type your message here"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <button type="submit" className="w-full btn btn-primary rounded-xl">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
