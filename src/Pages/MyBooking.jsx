/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import BookingRow from "../Components/BookingRow";
import Swal from "sweetalert2";
import Navbar from "../Components/Navbar";
import { Helmet } from "react-helmet-async";



const MyBooking = (date) => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    console.log(date);
    
    const URL = `http://localhost:5000/bookings?email=${user?.email}`;
    
    useEffect(() => {

        axios.get(URL, {withCredentials: true})
        .then(res => {
            // console.log(res.data);
          setBookings(res.data)
        })
        
      }, []);
    //   console.log(bookings);
    // const clanderday = (id) => {
  
    //     console.log(id);
   
            
    //         const filterdata = Room?.find((data) =>data.id ==id)
            
      
          
    //     const d1 = filterdata.currentDate
    //     const d2 = filterdata.Cheack_in_date
    //     let date1 = new Date(d1);
    //     let date2 = new Date(d2);
    //     const time = Math.abs(date1-date2);
    //     const days = Math.ceil(time/(1000*60*60*24));
    //     console.log(days);

    //     if(days<1){
    //         Swal.fire(
    //             'Sorry',
    //             `you can't cencle the reservation`,
    //             'error'
    //         )
    //     }
    //     else{
    //        const id=filterdata._id
    //        console.log(id);
    //         DeleteHandler(id)
    //     }
    //  }

    const handleDelete = id => {
        // const validCancelDate = moment(bookings.date).subtract(1, 'days'._d)

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