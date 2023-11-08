import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "../Components/DetailsCard";
import Navbar from "../Components/Navbar";
import Reviews from "../Components/Reviews";
import { Helmet } from "react-helmet-async";



const RoomDetails = () => {
    const {id} = useParams()
    const rooms = useLoaderData()
    const [room, setRoom] = useState([])
    console.log(id);
    
    useEffect(()=>{
        const findRoom = rooms.find(item => item._id == id)
        setRoom(findRoom)
    },[id,rooms])


    return (
        <div>
            <Helmet>
                <title>Room Details</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="container mx-auto px-3">
                <DetailsCard room={room}></DetailsCard>
            </div>
            <div className="my-10 container mx-auto px-3">
                <h1 className="text-[#00917c] text-2xl font-bold mb-5">Reviews</h1>
                <div>
                    <Reviews></Reviews>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;