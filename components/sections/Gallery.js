import Image from "next/image";
import gallery from "../../public/gallery.png";


const Gallery = () => {
    return ( 
        <div className="relative top-20 shadow-inner md:h-[44rem] flex flex-col">
            <Image src={gallery} className="md:absolute order-2 -z-10 md:h-[44rem] w-full object-cover object-top" alt="gallery backgound" />
            <div className="max-w-screen-xl mx-auto py-16 order-1 bg-gradient-to-r md:bg-none md:w-full from-[#072140] to-[#14437d]">
                <h2 className="xl:text-5xl text-3xl font-bold text-white pt-16">TUM. The Entrepreneurial <br/>University</h2>
                <h4 className="xl:text-2xl text-lg pt-5 text-white">Innovation through talent, excellence and responsibility</h4>
            </div>
        </div>
     );
}
 
export default Gallery;