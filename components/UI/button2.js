import Link from "next/link";

const Button2 = ({name}) => {
    return ( 
        <Link
          href={"/"}
          className="inline-block py-3 px-4 text-lg text-bluebland border-bluebland border hover:text-blue-900 hover:border-blue-900 font-semibold"
        >
          {name}
        </Link>
     );
}
 
export default Button2;