
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import BookingRow from "../Components/BookingRow";
import Swal from "sweetalert2";
import Navbar from "../Components/Navbar";


const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    // console.log(bookingData);
    useEffect(() => {

        axios.get(url, {withCredentials:true})
        .then(res => {
          setBookings(res.data)
        })
        
      }, [url]);

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
        <div className="my-10 container mx-auto">
            <div>
                <Navbar></Navbar>
            </div>
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
    );
};

export default MyBooking;