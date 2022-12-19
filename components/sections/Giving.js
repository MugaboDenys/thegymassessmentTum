import Button1 from "../UI/button1";

const Giving = () => {
    return ( 
        <div className="xl:max-w-[1664px] mx-auto mt-20 xl:px-32 px-5">
           <div className="text-center space-y-5 bg-bluelight py-20 px-5">
           <h3 className="text-4xl font-bold">Giving </h3>
           <p className="text-sm">Support research, innovation and teaching at one of the best technical universities in Europe. Show social responsibility and help nurture talent.</p>
           <Button1 name={"Support Us"} color={"bg-bluebland"}/>
           </div>
        </div>
     );
}
 
export default Giving;