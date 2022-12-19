import Image from "next/image";
import Link from "next/link";
import tum from "../../public/tum.png";
import Button2 from "../UI/button2";

const Navigation = () => {
  return (
    <div className="xl:max-w-screen-2xl px-5 lg:px-0 lg:max-w-screen-md mx-auto my-10">
      <h3 className="text-sm font-bold">Customized navigation</h3>
      <h2 className="text-4xl font-bold">Discover what TUM has to offer</h2>
      <div className="md:flex justify-between items-center">
      <div className="relative py-5 mt-5">
        <Image src={tum} className="xl:ml-60 h-[22rem] w-[60rem] object-cover object-right" alt="" />
        <div className="absolute left-5 top-[3.30rem] border bg-white w-[21rem] px-2">
          <div className="flex flex-col px-2 py-4 border-b-2">
            <h6>For: </h6>
            <Link
              href={"/"}
              className="font-bold mt-5 py-3 px-2 inline-block bg-slate-200"
            >
              Prospective Student
            </Link>
            <Link
              href={"/"}
              className="font-bold py-3 px-2 hover:bg-slate-200 hover:text-black inline-block text-blue-700"
            >
              Founders
            </Link>
            <Link
              href={"/"}
              className="font-bold mb-2 py-3 px-2 hover:bg-slate-200 hover:text-black inline-block text-blue-700"
            >
              {" "}
              Employees
            </Link>
          </div>
          <div className="flex flex-col my-2">
            <Link
              href={"/"}
              className="font-bold py-3 px-2 hover:bg-slate-200 hover:text-black inline-block text-blue-700"
            >
              {" "}
              Show all
            </Link>
          </div>
        </div>
      </div>
      <div className="space-y-5 pt-5 lg:w-1/3">
        <h2 className="text-5xl font-bold">Prospective Students</h2>
        <p className="text-lg">
          Learn to bring ideas to life, discover new possibilities, work in
          teams and build networks.
        </p>
        <Button2 name={"Learn More"}/>
      </div>
      </div>
    </div>
  );
};

export default Navigation;
