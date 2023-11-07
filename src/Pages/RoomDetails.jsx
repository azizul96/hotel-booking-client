import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "../Components/DetailsCard";
import Navbar from "../Components/Navbar";
import Reviews from "../Components/Reviews";



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
            <Navbar></Navbar>
            <div className="container mx-auto px-3">
                <DetailsCard room={room}></DetailsCard>
            </div>
            <div>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default RoomDetails;