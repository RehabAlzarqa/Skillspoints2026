"use client";
import { useFormik } from "formik";
import { object, string, ref } from "yup";

const Page = () => {
  const form = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      passWord: "",
      confirmPassword: "",
    },
    validationSchema: object({
      firstName: string().required().min(3).max(20),
      lastName: string().required().min(3).max(30),
      email: string().required().email(),
      password: string()
        .oneOf([ref("passWord")], "passWord must match")
        .required("Confirm is required"),
    }),

    onSubmit: () => {
      alert("submitting!");
    },
  });

  return (
    <main className="w-full h-[30hv] flex justify-between items-center ">
      <section className="flex flex-col gap-[20px] pt-[53px] px-[50px]">
        <h1 className="font-bold text-[40px]">Create Your Account</h1>

        <form
          onSubmit={form.handleSubmit}
          className="flex flex-col gap-[29px] px-[33px] bg-amber-200-"
        >
          {[
            {
              fieldName: "firstName",
              value: "",
              placeholder: "Input Your First Name",
              type: "text",
              label: "First Name",
            },
            {
              fieldName: "lastName",
              value: "",
              placeholder: "Input Your Last Name",
              type: "text",
              label: "Last Name",
            },
            {
              fieldName: "email",
              value: "",
              placeholder: "Input Your Email",
              type: "email",
              label: "Email",
            },
            {
              fieldName: "passWord",
              value: "",
              placeholder: "Input Your Password",
              type: "password",
              label: "Password",
            },
            {
              fieldName: "confirmPassword",
              value: "",
              placeholder: "Input Your Confirm Password",
              type: "password",
              label: "Confirm Password",
            },
          ].map((field) => (
            <div className=" flex flex-col gap-[20px]" key={field.fieldName}>
              <label className=" text-[20px]" htmlFor={field.fieldName}>
                {field.label}
              </label>
              <input
                className="w-full "
                type={field.type}
                id={field.fieldName}
                placeholder={field.placeholder}
                // {...form.getFieldProps(field.fieldName)}
              />
            </div>
          ))}
          <button className="bg-[#4788F9] w-auto h-full">Signup</button>
        </form>
      </section>
      <section className="">
        <div className="flex justify-center items-center">
          <img src="images/LogoAuth.png" alt="" />
        </div>
      </section>
    </main>
  );
};

export default Page;
