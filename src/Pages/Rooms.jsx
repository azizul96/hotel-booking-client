import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import RoomCard from "../Components/RoomCard";
import { useState } from "react";

const Rooms = () => {
    const allRooms = useLoaderData()
    const [price, setPrice] = useState('')
    console.log(price);
    if(price === "desc"){
        allRooms.sort((a,b)=>b.price-a.price)
    }
    else if(price === "asc"){
        allRooms.sort((a,b)=>a.price-b.price)
    }
    return (
        <div className="container mx-auto px-3">
            <div>
                <Navbar></Navbar>
            </div>
            <div className=" mt-10">
                <div className="flex justify-between items-center p-5 border-2 border-[#00917c] rounded-lg">
                    <div>
                        <h1 className="text-xl font-semibold text-[#00917c]">Available Rooms</h1>
                    </div>
                    <div className="form-control">
                        <select className="select select-info w-full max-w-xs"
                        onChange={(e)=> setPrice(e.target.value)}>
                            <option disabled selected>Price Range</option>
                            <option value="desc">High To Low</option>
                            <option value="asc">Low To High</option>
                        </select> 
                    </div>
                </div>
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                    {
                        allRooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Rooms;