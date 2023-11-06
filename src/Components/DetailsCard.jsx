/* eslint-disable react/prop-types */
import { useState } from "react";
import Swal from "sweetalert2";

const DetailsCard = ({room}) => {
    const {room_image, room_name, description,availableSeats, room_size, price, offer} = room
    const [date, setDate] = useState('')
    console.log(date);

    const handleBooked =()=>{
        const roomInfo = {date, room_image, room_name, description,availableSeats, room_size, price, offer}

        const url = `http://localhost:5000/bookings`
        Swal.fire({
            title: "Are you sure?",
            text: `Price: $${price} Date:${date}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Book Now!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(url,{
                    method: 'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(roomInfo)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.insertedId){
                        return (
                            Swal.fire({
                                title: "Booked!",
                                text: "Your room has been booked.",
                                icon: "success"
                              })
                        )   
                    }
                })
            }
          });
    }

    
    return (
        <div className="mb-10"> 
            <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 pb-5">
                <img className="object-cover object-center w-full h-56 md:h-96" src={room_image} alt="avatar"/>

                <div className="flex items-center px-6 py-3 bg-gray-900">
                    <h1 className="mx-3 text-lg font-semibold text-white">{room_name}</h1>
                </div>

                <div className="px-6 py-4">
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Special Offer: {offer}</h1>

                    <p className="py-2 text-gray-700 dark:text-gray-400">{description}</p>

                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <p>Price:</p>
                        <h1 className="px-2 font-semibold">${price}</h1>
                    </div>

                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <p>Availability:</p>
                        <h1 className="px-2 font-semibold">{availableSeats}</h1>
                    </div>

                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <p>Size:</p>
                        <h1 className="px-2 font-semibold">{room_size} Sq. Ft.</h1>
                    </div>
                    <div className="text-center mt-4 text-gray-700 dark:text-gray-200">
                        <p className="font-semibold">Select Date</p>
                        <input onChange={(e)=> setDate(e.target.value)} type="date" name="" id="" className="cursor-pointer border-2 p-2 rounded-md" />
                    </div>
                </div>
                <div className="text-center">
                    <button onClick={handleBooked} className='mt-5 px-5 py-3 rounded-full shadow-lg font-semibold bg-[#00917c] text-white'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;