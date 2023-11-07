/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import BookingRow from "../Components/BookingRow";
import Swal from "sweetalert2";
import Navbar from "../Components/Navbar";


const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    
    const URL = `http://localhost:5000/bookings?email=${user?.email}`;
    
    useEffect(() => {

        axios.get(URL, {withCredentials: true})
        .then(res => {
            // console.log(res.data);
          setBookings(res.data)
        })
        
      }, []);
    //   console.log(bookings);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`,{
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