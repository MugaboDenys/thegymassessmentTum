import Image from "next/image";
import Link from "next/link";
import image6 from "../../public/image6.webp";
import image7 from "../../public/image7.webp";
import image8 from "../../public/image8.webp";

const Degreecard1 = () => {
  return (
    <div className="pt-20 flex relative">
      <Image alt="" src={image6} />
      <div className="bg-bluebland text-white absolute w-[50rem] top-40 right-0 px-14 py-12">
        <h2 className="text-3xl font-bold">
          What drives us: President Thomas F. Hofmann about TUM
        </h2>
        <p>
          Research and innovations for society, innovative teaching and
          continuing education: This is how we shape a sustainable future,
          relying on the intelligence of the entire university and working
          closely with global partners to do so.
        </p>
        <Link className={`bg-slate-100 text-bluebland hover:bg-blue-800 hover:text-white font-bold py-3 px-5 uppercase mt-5 inline-block`} href={'/'}>Read more</Link>
      </div>
    </div>
  );
};

export default Degreecard1;
