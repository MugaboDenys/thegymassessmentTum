import Image from "next/image";
import Link from "next/link";
import box from "../../public/box.svg"
import image8 from "../../public/image8.webp";

const Degreecard3 = () => {
  return (
    <div className="pt-20 xl:flex justify-end relative">
      <div className="bg-redyellow order-2 xl:order-1 text-black xl:absolute xl:w-[50rem] top-48 left-0 px-14 py-12">
        <h2 className="text-3xl font-bold">{`"Here I have met a lot of people who are breaking new ground"`}</h2>
        <p>Philip Häusser, alumnus</p>
        <Link
          className={`bg-bluebland text-white hover:bg-blue-800 hover:text-white font-bold py-3 px-5 uppercase mt-5 inline-flex items-center`}
          href={"/"}
        >
           Read the alumni story <span> <Image alt="" src={box}/></span>
        </Link>
      </div>
      <Image alt="" src={image8} className="order1 xl:order-2 right-0 -z-10 w-[48rem]" />
    </div>
  );
};

export default Degreecard3;
