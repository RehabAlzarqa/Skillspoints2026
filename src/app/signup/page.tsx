"use client";
import { useFormik } from "formik";
import { object, string, ref } from "yup";
import layout from "../layout";

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
      passWord: string()
        .oneOf([ref("passWord"), "passWord must match"])
        .required("Confirm is required"),
    }),
    onSubmit: () => {
      alert("submitting!");
    },
  });

  return (
    <main className="w-full h-[500px]">
      <section className="bg-amber-500">
        <h1>Create Your Account</h1>
        <form className="flex flex-col bg-amber-700">
          {[
            {
              fieldName: "FirstName",
              value: "",
              placholder: "Input Your First Name",
              type: "text",
              label: "First Name",
            },
            {
              fieldName: "LastName",
              value: "",
              placholder: "Input Your Last Name",
              type: "text",
              label: "Last Name",
            },
            {
              fieldName: "Email",
              value: "",
              placholder: "Input Your Email",
              type: "email",
              label: "Email",
            },
            {
              fieldName: "Password",
              value: "",
              placholder: "Input Your Password",
              type: "password",
              label: "Password",
            },
            {
              fieldName: "Confirm Password",
              value: "",
              placholder: "Input Your Confirm Password",
              type: "password",
              label: "Confirm Password",
            },
          ].map((field, index) => (
            <div key={index}>
              <label htmlFor={field.fieldName}>{field.fieldName}</label>
              <input
                type={field.type}
                id={field.fieldName}
                placeholder={field.placholder}
              />
            </div>
          ))}
        </form>
      </section>
    </main>
  );
};

export default Page;
