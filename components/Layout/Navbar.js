import Image from "next/image";
import logo from "../../public/tum-logo.svg";
import button from "../../public/button.svg";
import search from "../../public/search.svg";
import Link from "next/link";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <div className="bg-backgound">
      <div className="max-w-[104rem] mx-auto flex justify-between items-end">
        <div className="flex gap-x-2 py-5">
          <div className="flex gap-x-3">
            <Image src={button} alt="button" color="white" />
            <Image src={logo} alt="logo" />
          </div>
          <span className="text-white text-xs">
            Technical <br />
            University <br />
            of Munich
          </span>
        </div>
        <div className="flex gap-5">
          <div className="inline-flex gap-x-5 mb-3">
            <Navlink name="News and Events" />
            <Navlink name="STudies" />
            <Navlink name="Life long learning" />
            <Navlink name="Research" />
            <Navlink name="Innovation" />
            <Navlink name="Cummunity" />
            <Navlink name="About Tum" />
          </div>
          <span className="inline-flex font-bold">
            <h4 className="text-slate-400 px-2 border-r-2 hover:text-white hover:cursor-pointer">DE</h4>
            <h4 className="text-white px-2">EN</h4>
          </span>
          <Image src={search} alt="search" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
