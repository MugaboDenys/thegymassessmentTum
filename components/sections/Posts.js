import Postcard from "./Postcard";
import image12 from "../../public/image12.webp";
import image8 from "../../public/image8.jpeg";
import image9 from "../../public/image9.jpeg";
import image10 from "../../public/image10.jpeg";
import image11 from "../../public/image11.jpeg";

const Posts = () => {
  return (
    <div className="xl:max-w-[1664px]  xl:px-20 px-5 mx-auto mt-24">
      <div className="grid xl:grid-cols-3 gap-x-20 gap-y-10">
        <div className="xl:col-span-2">
          <Postcard
            image={image12}
            buttonName="All episodes"
            paragraph={`In our podcast series, we regularly talk to the people who make up our university: From top researchers, students and faculty to the "hidden champions" behind the scenes.`}
            title="We are TUM – the podcast of our university"
          />
        </div>
        <Postcard
          image={image11}
          title="Lifelong learning"
          paragraph={`We offer continuing education opportunities accompanying you over your whole career. `}
          buttonName="TUM Institute for LifeLong Learning"
        />
        <Postcard
          image={image10}
          title="Stay connected"
          paragraph={`Benefit from our worldwide network, make contacts and stay connected with your Alma Mater!`}
          buttonName=" Join the TUM Community "
        />
        <Postcard
          image={image9}
          title="TUMint Relocation Service"
          paragraph={`All-inclusive onboarding package for international students assists with accommodation and much more.`}
          buttonName="  See our services  "
        />
        <Postcard
          image={image8}
          title="Discover the TUMshop"
          paragraph={`Merchandising items, conference materials and other products in the corporate design can be found online and on site.`}
          buttonName="Shop online "
        />
      </div>
    </div>
  );
};

export default Posts;
