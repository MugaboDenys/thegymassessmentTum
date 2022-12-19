import Image from "next/image";
import Link from "next/link";
import Button2 from "../UI/button2";

const Postcard = ({ image, buttonName, paragraph, title }) => {
  return (
    <Link href={'/'} className="space-y-5">
      <Image alt="" src={image} className="h-[20rem] w-full object-cover" />
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="font-bold">
        {paragraph}
      </p>
      <Button2 name={buttonName}/>
    </Link>
  );
};

export default Postcard;
