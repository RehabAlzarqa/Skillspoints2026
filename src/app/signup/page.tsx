import Image from "next/image";

const page = () => {
    return ( 

<main className="min-h-screen md:grid md:grid-cols-2">                  

<section className="p-6 md:p-12">            {/*  right section */}
             <h1 className=" flex justify-center text-3xl font-bold pb-10">Welcome to auth</h1>
               <form className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <label htmlFor="firstName">FirstName</label>
                    <input type="text"
                     id="firstName" 
                     placeholder="Your First Name"
                     className="w-auto rounded-xl border border-gray-300 px-4 py-1 bg-[#FFFFFF]"  />
                </div>
<div className="flex flex-col gap-2">
    <label htmlFor="lastName">Lastname</label>
<input type="text"
 id="lastName"
 placeholder="Your Email"
 className="w-full rounded-xl border border-gray-300 px-4 py-1 bg-[#FFFFFF]" />
</div>
<div className="flex flex-col gap-2">
<label htmlFor="email">Email</label>
<input type="email" id="email" className="w-full rounded-xl border border-gray-300 px-4 py-1 bg-[#FFFFFF]" />
</div>
<div className="flex flex-col gap-2">
<label htmlFor="password">Password</label>
<input type="password" id="password" placeholder="" className="w-full rounded-xl border border-gray-300 px-4 py-1 bg-[#FFFFFF]" />
</div>
<div className="flex flex-col gap-2">
<label htmlFor="confirmPassword">Confirm Password</label>
<input type="password" id="confirmPassword" name="confirmPassword" className="w-full rounded-xl border border-gray-300 px-4 py-1 bg-[#FFFFFF]" />
</div>
<button type="submit" className="w-full rounded-xl bg-[#4788F9] text-white py-2 cursor-pointer" >Sign Up</button>

               </form>

<p className="text-center py-10">
  Already have an account?{" "}
  <a href="/login" className="text-blue-500  font-bold hover:underline">
    Log In
  </a>
</p>



           </section>
        {/* right Section 1*/}


             {/* left Section 2 */}
<section className="flex items-center justify-center p-6">
    
    <Image
    src="/images/LogoAuth.png"
    alt="Description"
    width={500}
  height={500}
  className=" flex  justify-center items-centerh-auto"
 />

             </section>
             {/*  leftSection 2*/}

<section>
    
</section>

        </main>
        
     );
}
 
export default page;