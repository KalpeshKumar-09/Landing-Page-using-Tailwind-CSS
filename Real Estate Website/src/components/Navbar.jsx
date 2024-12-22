import { useState } from "react";
import { NAV_LINKS } from "../constants";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNavbar = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed top-2 z-50 w-screen px-4">
      <div className="flex items-center justify-between rounded-lg bg-black py-3 px-4">
        <div className="flex flex-shrink-0 items-center justify-between">
          <img
            src="./logo.png"
            alt="Logo"
            className="mr-2"
            width={60}
            height={30}
          />
          <span className="text-sm tracking-tight text-white">RealEs</span>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-2">
            {NAV_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className="text-sm text-white hover:text-neutral-500"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden text-sm text-white lg:flex">
          <button className="mr-2 bg-black outline-none border-2 border-white rounded-lg p-2">
            Sign in
          </button>
          <button className="bg-slate-800 outline-none rounded-lg p-2">
            Sign up
          </button>
        </div>
        <div className="flex justify-end text-white md:flex lg:hidden">
          <button onClick={toggleNavbar}>
            {nav ? <RxCross1 /> : <CiMenuFries />}
          </button>
        </div>
      </div>
      {nav && (
        <div className="rounded-md bg-black lg:hidden">
          <ul className="flex flex-col items-center">
            {NAV_LINKS.map((item, index) => (
              <li key={index} className="py-6">
                <a
                  href={item.url}
                  className="text-sm text-white hover:text-neutral-500"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center pb-8 text-white lg:hidden">
            <button className="mr-2 bg-black outline-none border-2 border-white rounded-lg p-2 hover:bg-white hover:text-black">
              Sign in
            </button>
            <button className="bg-slate-800 outline-none rounded-lg p-2 hover:bg-black">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
