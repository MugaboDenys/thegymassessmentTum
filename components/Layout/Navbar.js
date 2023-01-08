import Image from "next/image";
import logo from "../../public/tum-logo.svg";
import button from "../../public/button.svg";
import search from "../../public/search.svg";
import menu from "../../public/menu.svg";
import Link from "next/link";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <div className="bg-backgound fixed z-40 top-0 left-0 right-0">
      <div className="max-w-[104rem] px-5 mx-auto flex justify-between lg:items-center">
        <Link href={'https://www.tum.de/en/'}>
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
        </Link>
        <div className="flex gap-5 items-center">
          <div className="lg:inline-flex gap-x-5 -mb-7  hidden">
            <Navlink name="News and Events" />
            <Navlink name="STudies" />
            <Navlink name="Life long learning" />
            <Navlink name="Research" />
            <Navlink name="Innovation" />
            <Navlink name="Cummunity" />
            <Navlink name="About Tum" />
          </div>
          <div className="flex items-center pl-4 font-bold">
            <h4 className="text-slate-400 px-2 py-2 border-r-2 hover:text-white hover:cursor-pointer">DE</h4>
            <h4 className="text-white px-2">EN</h4>
          </div>
          <Image src={search} alt="search" />
          <Image className="lg:hidden" src={menu} alt="menu" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
