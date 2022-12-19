import Newscard from "../sections/Newscard";
import Button1 from "../UI/button1";
import image1 from "../../public/image1.webp";
import image2 from "../../public/image2.webp";
import image3 from "../../public/image3.webp";
import image4 from "../../public/image4.webp";

const News = () => {
  return (
    <div className="xl:max-w-screen-xl lg:max-w-screen-md mx-auto pt-16 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-5 xl:px-0 gap-7 mt-16">
      <div className="xl:col-span-2 md:col-span-2">
        <h2 className="text-4xl font-bold ">News from TUM</h2>
        <p className="text-xl pt-7">
          News, research results and events: everything that enthuses people at
          our university.
        </p>
        <Button1 name={"See all"} color="bg-bluebland" />
      </div>
      <Newscard
        name={"TUM in Rankings"}
        image={image1}
        title="WirtschaftsWoche rankings"
        subtitle={"Germany's strongest university in business sciences"}
        paragraph="TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the... "
        date={"12/16/2022 "}
        time={" Reading time 2 min."}
      />
      <Newscard
        name={"TUM in Rankings"}
        image={image2}
        title="WirtschaftsWoche rankings"
        subtitle={"Germany's strongest university in business sciences"}
        paragraph="TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the... "
        date={"12/16/2022 "}
        time={" Reading time 2 min."}
      />
      <div className="lg:ml-96 mt-8 md:flex gap-7">
        <Newscard
          name={"Research"}
          image={image3}
          title="Search for dark matter"
          subtitle={"Antihelium nuclei as messengers from the depths of the galaxy"}
          paragraph="How are galaxies born, and what holds them together? Astronomers assume that dark matter plays an essential role. However,... "
          date={" 12/13/2022"}
          time={"Reading time 2 min."}
        />
        <Newscard
          name={"sustainability"}
          image={image4}
          title="Awards for sustainability projects"
          subtitle={"New partnership with the Nobel Sustainability Trust"}
          paragraph="The Nobel Sustainability Trust and our university will jointly recognize international research and initiatives for..."
          date={"  12/14/2022"}
          time={" Reading time 1 min."}
        />
      </div>
    </div>
  );
};

export default News;
