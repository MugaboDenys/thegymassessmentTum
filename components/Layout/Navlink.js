import Link from "next/link";

const Navlink = ({name}) => {
    return ( 
        <Link href={'/'} className="text-white text-sm uppercase font-bold pb-5 border-b-4 border-transparent hover:border-b-white">{name}</Link>
     );
}
 
export default Navlink;