import Link from "next/link";
const Header = () => {
    return ( 
        <div className="w-full h-[97px] bg-white flex justify-between gap-16">
            <img src="/images/Logo.png"  alt="SkillsPoints"
                className=" flex justify-center h-[60px] w-auto"/>

<div className=" px-[20px] flex justify-center items-center gap-16">
    <Link
        href="/login"
        className="w-[192px] h-[43px] flex justify-center items-center rounded-xl border-2 border- px-8 py-2 font-bold text-"
    >
        Log in
    </Link>

    <Link
        href="/signup"
        className=" w-[192px] h-[43px] flex justify-center items-center rounded-xl border-2 border-blue-500 bg-blue-500 px-8 py-2 font-bold text-white"
    >
        Sign up
    </Link>
</div>

            </div>
       
     );
     
    }
export default Header;