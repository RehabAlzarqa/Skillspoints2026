"use client";


import { useFormik } from "formik";
import { object, string } from "yup";

const Page = () => {

const formLogin = useFormik({
    initialValues: {
        email: "",
        password: "",
    },

    validationSchema: object({
     email: string().required("Email is required").email("Enter a valid email address"),
     password: string().required("Password is required")
    }),
    onSubmit: () => {

    }
});



const fieldsLogin = [
    {
        fieldName: "email",
        placeholder: "Your email",
        type: "email",
        label: "Email",
        autoComplete: "email",
    },
    {
        fieldName: "password",
        placeholder: "Your password",
        type: "password",
        label: "Password",
        autoComplete: "current-password",
    },
];

    return ( 
<main className="min-h-screen md:grid md:grid-cols-2 place-content-center px-6 bg-blue-700">
    <section className="bg-red-500">
        {fieldsLogin.map((field) => (
            <div key={field.fieldName}>
                <label htmlFor={field.fieldName}>{field.label}</label>
                <input
                    id={field.fieldName}
                    name={field.fieldName}
                    type={field.type}
                    placeholder={field.placeholder}
                    autoComplete={field.autoComplete}
                    onChange={formLogin.handleChange}
                    onBlur={formLogin.handleBlur}
                />
                {formLogin.touched[field.fieldName] && formLogin.errors[field.fieldName] && (
                    <p>{formLogin.errors[field.fieldName]}</p>
                )}
            </div>
        ))}
        <button type="submit">login</button>
    </section>
</main>
);
}
 
export default Page;