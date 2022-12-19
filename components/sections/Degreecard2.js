import Image from "next/image";
import Link from "next/link";
import image6 from "../../public/image6.webp";
import image7 from "../../public/image7.webp";
import image8 from "../../public/image8.webp";

const Degreecard2 = () => {
  return (
    <div className="pt-20 flex relative">
      <Image alt="" src={image7} className="w-[48rem]" />
      <div className="bg-bluebright text-black absolute w-[50rem] top-48 right-0 px-14 py-12">
        <h2 className="text-3xl font-bold">Schools and Research Centers</h2>
        <p>
          They form the academic foundation of TUM: Our schools and departments,
          connected at disciplinary interfaces by integrative research
          institutes to create an organization that drives innovation.
        </p>
        <Link
          className={`bg-bluebland text-white hover:bg-blue-800 hover:text-white font-bold py-3 px-5 uppercase mt-5 inline-block`}
          href={"/"}
        >
          Organization
        </Link>
      </div>
    </div>
  );
};

export default Degreecard2;
