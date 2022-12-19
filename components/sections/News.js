import Newscard from "../Layout/Newscard";
import Button1 from "../UI/button1";
import image1 from "../../public/image1.webp"

const News = () => {
    return ( 
        <div className="max-w-screen-xl mx-auto pt-16 flex gap-x-10">
            <div>
                <h2 className="text-4xl font-bold ">News from TUM</h2>
                <p className="text-xl pt-7">News, research results and events: everything that enthuses people at our university.</p>
                <Button1 name={"See all"} color="bg-bluebland"/>
            </div>
            <div>
                <Newscard name={"TUM in Rankings"} image={image1}/>
            </div>

        </div>
     );
}
 
export default News;