<<<<<<< HEAD
const Header = () => (
  <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <svg
        className="fill-current h-8 w-8 mr-2"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <img src="/images/LogoHeader.png" alt="SkillsPoints Logo" />
      </svg>
    </div>
    <button
      className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      type="button"
    >
      <svg
        className="fill-current h-3 w-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Docs
        </a>
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Examples
        </a>
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          Blog
        </a>
      </div>
      <a
        href="#"
        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
      >
        Download
      </a>
    </div>
  </nav>
);

export default Header;
=======
import Link from "next/link";
const Header = () => {
    return (
      <div className="w-full h-[97px] bg-white- bg-red-600 flex items-center justify-between gap-16-">
        <img
          src="/images/Logo.png"
          alt="SkillsPoints"
          className="  h-[60px] w-auto"
        />

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
>>>>>>> 52a64a76ee8a53f0ae740193abb73bb5dbed6dbd
