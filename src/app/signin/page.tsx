"use client";

import { useFormik } from "formik";
import { object, string } from "yup";
import bcrypt from 'bcrypt';


const Page = () => {
  const formLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: object({
      email: string()
        .required("Email is required")
        .email("Enter a valid email address"),
      password: string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      const  {email, password} = values;

      // connect the page to signup api
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
          if (response.ok) {
            alert(data.msg);
          } else {
            alert(data.msg);
    }
          // connect the page to signup api


    },
  });

  const fields = [
    {
      name: "email",
      placeholder: "Your email",
      type: "email",
      label: "Email",
      autoComplete: "email",
    },
    {
      name: "password",
      placeholder: "Your password",
      type: "password",
      label: "Password",
      autoComplete: "current-password",
    },
  ];

  return (
    <main className="min-h-screen bg-red-400- px-4 py-8 md:px-8 xl:px-12">
      <div className="mx-auto grid max-w-6xl gap-6 rounded-[32px] bg-white p-4 shadow-[0_18px_50px_rgba(7,27,61,0.08)] lg:grid-cols-[1.08fr_0.92fr] lg:p-6">
        <section className="bg-blue-900- p-4 w-auto">
          <div className=" flex flex-col items-center justify-center">
            <img src="images/logo.png" alt="Logo"
            width="200"
            height="200"
            />
          </div>
          

          <form className="flex flex-col gap-5" onSubmit={formLogin.handleSubmit}> 
            {fields.map((field, index) => (
                <div key={index} >
           <label htmlFor={field.name}
            className=" bg-red-400- text-stone-950 text-[22px] px-2 py-5 ">{field.label}</label>
           <input 
           type={field.type}
           name={field.name}
           id={field.name}
           placeholder={field.placeholder}
           autoComplete={field.autoComplete}
           value={formLogin.values[field.name]}
           onChange={formLogin.handleChange}
           onBlur={formLogin.handleBlur}
           className="w-full h-auto rounded-xl border bg-white px-5 py-3 text-base text-[#071B3D] outline-none transition placeholder:text-[#56637A] focus:ring-2"
            />
              {formLogin.touched[field.name] && formLogin.errors[field.name] &&
            <span className="text-rose-600"> {formLogin.errors[field.name]}
            
            </span>
            }

           </div>
            ))}
            <button type="submit" className="mt-2 h-12 w-full rounded-xl bg-[#4788F9] font-semibold text-white transition hover:bg-[#3677E8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4788F9]">
              Sign In
            </button>
          </form>
        </section>

  <section>
    <div className="flex ">
      <img src="images/LogoAuth.png" alt="Sign Up" />
    </div>
    </section>       
      </div>
    </main>
  );
};

export default Page;