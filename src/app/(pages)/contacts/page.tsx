"use client";
import InputField from "@/app/components/InputField";
import { ContactModal } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TbLoader2 } from "react-icons/tb";
import { toast } from "sonner";
import z from "zod";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof ContactModal>>({
    resolver: zodResolver(ContactModal),
  });

  const onSubmit = (data: z.infer<typeof ContactModal>) => {
    try {
      console.log("Form Data: ", data);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-5 min-h-[80vh]">
      <h1 className="text-4xl my-10 font-bold">Contacts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
        <div className="m-10 flex items-center">
          <h1 className="text-cyan-400 text-xl font-semibold">
            Please Fill Out This Form
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <fieldset disabled={isSubmitting} className="space-y-5 px-5">
            <div className="grid grid-cols-2 gap-5">
              <InputField
                register={register("firstname")}
                type="text"
                label="First Name"
                error={errors.firstname}
              />

              <InputField
                register={register("lastname")}
                type="text"
                label="Last Name"
                error={errors.lastname}
              />
            </div>

            <InputField
              register={register("email")}
              type="email"
              label="Email"
              error={errors.email}
            />

            <InputField
              register={register("subject")}
              type="text"
              label="Subject"
              error={errors.subject}
            />

            <div>
              <textarea
                {...register("message")}
                className="textarea w-full textarea-primary rounded-lg"
                placeholder="Type your message here"
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button type="submit" className="w-full btn btn-primary rounded-xl">
              {isSubmitting ? (
                <TbLoader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Submit"
              )}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
