import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Featured from "../Components/Featured";
import Marquee from "react-fast-marquee";
import Map from "../Components/Map";

const Home = () => {
    const loadeddata = useLoaderData()
    return (
        <div className=" container mx-auto px-3 mb-10">
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div className="py-5">
                <h1 className="text-[#00917c] text-2xl font-bold my-5">Featured Rooms</h1>
                <Marquee>
                <div className="flex gap-5 mr-5 py-3">
                    {
                        loadeddata.map(data=> <Featured key={data._id} data={data}></Featured>)
                    }
                </div>
                </Marquee>
                <div className="text-center">
                    <Link to="/rooms">
                    <button className='mt-5 px-5 py-3 rounded-full shadow-lg font-semibold bg-[#00917c] text-white'>Book Now</button>
                    </Link>
                </div>
            </div>
            <div>
                <Map></Map>
            </div>
            <div>
                <Newsletter></Newsletter>
            </div>
        </div>
    );
};

export default Home;