import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";
import { FaFileInvoiceDollar, FaBed, } from 'react-icons/fa';
import { AiFillHome, AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

const DetailsCard = ({room}) => {
    const {user} = useContext(AuthContext)
    const {_id, room_image, room_name, description,availableSeats, room_size, price, offer, rating, r_id,} = room
    const navigate = useNavigate(null)
    const [date, setDate] = useState('')

    

    const [count, setCount] = useState(0)
    const [a_room, seta_room] = useState()

    const add =() =>{
        const addCount=count+1;       
        setCount(addCount)  
        const RoomCount = availableSeats-count;
        const Room_count = RoomCount-1
        seta_room(Room_count);
              
    }
  
    
    const remove =() =>{
        if(count!=0){
            const addCount=count-1;           
            setCount(addCount)
            const RoomCount = a_room+1;        
        seta_room(RoomCount);
          
          
        }
        
    }
    

    const handleBooked =()=>{
        const roomInfo = {email: user.email, date, room_image, room_name, availableSeats, room_size, price, offer, rating, r_id,}
        const url = `https://hotel-booking-server-mu.vercel.app/bookings`
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
                    updateSeat()

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
                navigate('/myBookings')
            }
          });
    }
    const updateSeat = ()=>{
        const seatInfo = {id: _id, a_room}
        
        fetch(`https://hotel-booking-server-mu.vercel.app/rooms/${_id}`,{
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(seatInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
              
    }
    return (
        <div className="mb-10 mt-5"> 
            <div className="w-full lg:flex  lg:gap-10  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
                <div className=" ">
                    <img className="object-cover object-center w-full h-56  md:h-96" src={room_image} alt="avatar"/>

                    <div className="flex items-center px-6 py-3 bg-gray-900">
                        <h1 className="mx-3 text-lg font-semibold text-white">{room_name}</h1>
                    </div>
                </div>

                <div className="px-6 py-4">
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Special Offer: {offer}</h1>

                    <p className="py-2 text-gray-700 dark:text-gray-400">{description}</p>

                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <span className="text-lg"><FaFileInvoiceDollar></FaFileInvoiceDollar></span>
                        <p className="ml-2">Price:</p>
                        <h1 className="px-2 font-semibold">${price}</h1>
                    </div>

                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <span className="text-lg"><FaBed></FaBed></span>
                        <p className="ml-2">Available Seat:</p>
                        <h1 className="px-2 font-semibold">{availableSeats}</h1>
                    </div>

                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <span className="text-lg"><AiFillHome></AiFillHome></span>
                        <p className="ml-2">Size:</p>
                        <h1 className="px-2 font-semibold">{room_size} Sq. Ft.</h1>
                    </div>
                    <div className="text-center mt-4 text-gray-700 dark:text-gray-200">
                        <div>
                            <p className="font-semibold">Select Date</p>
                            <input onChange={(e)=> setDate(e.target.value)} type="date" name="" id="" className="cursor-pointer border-2 p-2 rounded-md" required/>
                        </div>
                        <p className="font-semibold mt-5">Select Seat</p>
                        <div className='flex justify-center items-center'>
                            
                            <span onClick={remove} className='text-xl'><AiFillMinusCircle></AiFillMinusCircle></span>
                            <input type="number" onChange={(e)=> seta_room(e.target.value)} value={count} className='border-2 p-2 rounded-md text-blue-500' />
                            <span onClick={add} className='text-xl'><AiFillPlusCircle></AiFillPlusCircle></span>
                        </div>
                    </div>
                    <div className="text-center">
                        <button onClick={handleBooked} className='my-5 px-5 py-3 rounded-full shadow-lg font-semibold bg-[#00917c] text-white'>Book Now</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default DetailsCard;