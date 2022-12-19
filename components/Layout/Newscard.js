import Image from "next/image";
import Link from "next/link";

const Newscard = ({name, image}) => {
    return ( 
        <Link href={'/'}>
            <div>
                <Image className="w-80" src={image} alt="description"/>
                <h3 className="absolute bottom-0 text-sm">{name}</h3>
            </div>
        </Link>
     );
}
 
export default Newscard;