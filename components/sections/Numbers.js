const Numbers = () => {
    return ( 
        <div className="xl:max-w-[1664px] mx-auto mt-20">
            <h2 className="text-4xl font-bold">TUM in numbers </h2>
            <div className="mt-12 grid xl:grid-cols-3 lg:grid-cols-2 xl:grid-rows-2 md:grid-cols-3 md:grid-rows-1 grid-rows-3  gap-5">
                <div className="bg-bluebland text-white xl:p-10 p-5 space-y-5 xl:col-span-2 xl:row-span-2 ">
                    <h2 className="lg:text-8xl md:text-6xl font-bold">50,000</h2>
                    <h6 className="text-3xl font-bold">Students</h6>
                </div>
                <div className="px-10 py-5 bg-banana flex md:block lg:flex gap-10">
                    <h3 className="text-7xl font-bold">176</h3>
                    <h6 className="text-2xl font-semibold">ERC Grants for cutting-edge research</h6>
                </div>
                <div className="px-10 py-5 bg-darkpink flex lg:flex md:block gap-10">
                    <h3 className="text-7xl font-bold">18</h3>
                    <h6 className="text-2xl font-semibold">Nobel laureates</h6>
                </div>
            </div>
        </div>
     );
}
 
export default Numbers;