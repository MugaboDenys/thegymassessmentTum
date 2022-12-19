import Image from "next/image";
import Link from "next/link";
import image6 from "../../public/image6.webp";
import image7 from "../../public/image7.webp";
import image8 from "../../public/image8.webp";

const Degreecard3 = () => {
  return (
    <div className="pt-20 flex justify-end relative">
      <div className="bg-redyellow text-black absolute w-[50rem] top-48 left-0 px-14 py-12">
        <h2 className="text-3xl font-bold">{`"Here I have met a lot of people who are breaking new ground"`}</h2>
        <p>Philip Häusser, alumnus</p>
        <Link
          className={`bg-bluebland text-white hover:bg-blue-800 hover:text-white font-bold py-3 px-5 uppercase mt-5 inline-block`}
          href={"/"}
        >
           Read the alumni story 
        </Link>
      </div>
      <Image alt="" src={image8} className="right-0 -z-10 w-[48rem]" />
    </div>
  );
};

export default Degreecard3;
