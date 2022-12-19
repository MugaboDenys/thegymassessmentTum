import Image from "next/image";
import box from "../../public/box.svg";
import arrow2 from "../../public/arrow2.svg";
import logo from "../../public/tum-logo.svg";

import { departments, footerLinks } from "../../data";
import Link from "next/link";

const Prefooter = () => {
  return (
    <div className="bg-darkblue text-white mt-16 ">
      <div className="px-6 xl:px-0 xl:mx-auto xl:max-w-[90rem] flex flex-col xl:flex xl:flex-row xl:justify-between  py-[56px]  border-b border-[#9ABCE4]">
        <div className="flex gap-5 ">
          <Image src={logo} alt="logo" className="h-8" />
          <div className="flex flex-col gap-5">
            <p>
              Technical University of Munich <br /> Arcisstraße 21 <br /> 80333
              Munchen
            </p>
            <p>
              Phone: <span> +49 (0)89-289-01</span> <br />
              Fax: +49 (0)89-289-22000
            </p>
          </div>
        </div>
        <div className="text-base">
          <p className="font-bold ">{`Let's shape the future together`}</p>
          <Link href={"/"} className="hover:underline inline-flex items-center">
            Support us{" "}
            <span>
              {" "}
              <Image alt="" src={box} />
            </span>{" "}
          </Link>
        </div>

        <div className="flex flex-col gap-3 text-base">
          <p className="font-bold">Latest news</p>
          <p className="flex gap-3 items-center hover:underline">
            <Image alt="" src={arrow2} />
            Germany{"'"}s strongest university in business sciences
          </p>
          <p className="flex gap-3 items-center hover:underline">
            <Image alt="" src={arrow2} />
            TUM partners with Nobel Sustainability Trust
          </p>
          <p className="flex gap-3 items-center hover:underline">
            <Image alt="" src={arrow2} />
            Antihelium nuclei as messengers from the depths of the galaxy
          </p>
        </div>
      </div>
      <div className="py-[27px]">
        <div className="px-6 xl:px-0 xl:mx-auto xl:max-w-[90rem] flex flex-col text-white xl:flex xl:flex-row r gap-4 xl:gap-10 ">
          <h1 className="font-bold">
            Schools and <br /> Departments:
          </h1>
          <div className="flex w-full flex-wrap gap-4">
            {departments.map((department, index) => {
              return (
                <Link
                  href={"/"}
                  key={index}
                  className="flex gap-1 items-center hover:underline"
                >
                  {department.departmentName} <Image alt="" src={box} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="px-6 xl:px-0 xl:mx-auto xl:max-w-[90rem] flex flex-col text-white xl:flex xl:flex-row r gap-4 xl:gap-16 mt-[26px]">
          <h1 className="font-bold">QuickLinks:</h1>
          <div className="flex w-full flex-wrap gap-4">
            {footerLinks.map((links, index) => {
              return (
                <Link
                  href={"/"}
                  key={index}
                  className="flex items-center hover:underline hover:cursor gap-1 "
                >
                  {links.link} <Image alt="" src={box} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prefooter;
