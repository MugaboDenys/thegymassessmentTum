import Link from "next/link";

const Button1 = ({name, color}) => {
    return ( 
        <Link className={`${color} text-white font-bold py-3 px-5 uppercase mt-5 inline-block`} href={'/'}>{name}</Link>
     );
}
 
export default Button1;