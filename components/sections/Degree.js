import Image from "next/image";
import Link from "next/link";
import arrow from "../../public/arrow.svg"
import Degreecard1 from "./Degreecard1";
import Degreecard2 from "./Degreecard2";
import Degreecard3 from "./Degreecard3";
import Numbers from "./Numbers";

const Degree = () => {
    return ( 
        <div className="2xl:max-w-[1664px]  xl:px-20 px-5 mx-auto relative">
            <div className=" ">
                <select className="px-8 py-5 w-full text-2xl border-b border-blue-800 font-bold text-neutral-600 hover:cursor-pointer hover:bg-neutral-300">
                    <option value="">Select Degree Program or enter keyword</option>
                    <option value="">Aerospace - bachelor of science</option>
                    <option value="">Aerospace - Master of science</option>
                </select>
            </div>
            <Link href={'/'} className="flex justify-end hover:underline text-bluebland mt-5">Degree Programs <span> <Image src={arrow} alt=""/></span></Link>
            <Degreecard1/>
            <Numbers />
            <Degreecard2/>
            <Degreecard3/>
            
        </div>
     );
}
 
export default Degree;