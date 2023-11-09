/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import BookingRow from "../Components/BookingRow";
import Swal from "sweetalert2";
import Navbar from "../Components/Navbar";
import { Helmet } from "react-helmet-async";
import moment from "moment/moment";
import toast from "react-hot-toast";



const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

   
    
    const URL = `https://hotel-booking-server-mu.vercel.app/bookings?email=${user?.email}`;
    
    useEffect(() => {

        axios.get(URL, {withCredentials: true})
        .then(res => {
            // console.log(res.data);
          setBookings(res.data)
        })
        
      }, []);
    

    const handleDelete = id => {
        
        // const validCancelDate = moment(bookings.date).subtract(1, 'days'._d)
        const findBook = bookings.find(book => book._id == id)
        const bookDate = findBook.date
        const validCancelDate = moment(bookDate).subtract(1, 'days')._d
        const currentTime = moment(new Date())
        console.log("validCancelDate",validCancelDate, "currentTime",currentTime);
        if((currentTime.isBefore(validCancelDate, "day"))){
            console.log("can Cancel");
        }
        else{
            console.log("Can not cancel");
            return toast.error("Can't cancel! Booking day is tomorrow")
        }
        Swal.fire({
            title: 'Are you sure?',
            text: "Your Booking will be cancel!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://hotel-booking-server-mu.vercel.app/bookings/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          const remaining = bookings.filter(item => item._id !== id)
                          setBookings(remaining)
                    }
                })
              
            }
          })
    };


    return (
        <div className="mb-10 container mx-auto">
            <Helmet>
                <title>My Bookings</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <h1 className="text-[#00917c] text-2xl font-bold my-5">All Bookings {bookings.length}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    
                    {bookings.map(booking => 
                        <BookingRow
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        ></BookingRow>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyBooking;