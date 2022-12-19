import Image from "next/image";
import Link from "next/link";

const Newscard = ({ name, image, title, subtitle, paragraph, time, date }) => {
  return (
    <Link href={"/"} className="group group-hover:text-indigo-500 space-y-4">
      <div className="relative">
        <Image className="xl:w-80" src={image} alt="description" />
        <h5 className="absolute bottom-0 text-xs p-1 bg-neutral-200 font-semibold text-black">
          {name}
        </h5>
      </div>
      <div className="w-80 grid grid-flow-row gap-2">
        <h4 className="font-bold">{title}</h4>
        <h2 className="text-xl font-bold leading-tight">{subtitle}</h2>
        <p className="text-sm">{paragraph}</p>
        <div className="inline-flex justify-between text-xs">
          <h5>{date}</h5>
          <h5>{time}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Newscard;
