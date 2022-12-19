import Image from "next/image";
import gallery from "../../public/gallery.png";


const Gallery = () => {
    return ( 
        <div className="relative shadow-inner h-[44rem]">
            <Image src={gallery} className="absolute -z-10 h-[44rem] w-full object-cover object-top" alt="gallery backgound" />
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-5xl font-bold text-white pt-16">TUM. The Entrepreneurial <br/>University</h2>
                <h4 className="text-2xl pt-5 text-white">Innovation through talent, excellence and responsibility</h4>
            </div>
        </div>
     );
}
 
export default Gallery;