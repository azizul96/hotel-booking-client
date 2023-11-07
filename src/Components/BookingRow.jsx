
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const BookingRow = ({booking, handleDelete }) => {
    const {_id, room_image, room_name, price,date} = booking
    const [updateDate, setUpdateDate] = useState(date)
    
    const handleReview = () =>{
      
    }
    const handleUpdateDate = id =>{
        const dateInfo = {date: updateDate}

        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(dateInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                return toast.success('Date updated successfully');

            }
        })
    }
    return (
    
        <div className="flex  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="w-1/3 " >
                <img src={room_image} alt="" className="object-cover w-full h-full" />
            </div>

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">{room_name}</h1>

                <p className="mt-2 text-sm font-semibold text-gray-600 dark:text-gray-400">Per Night: ${price}</p>
                <p className="mt-2 text-sm font-semibold text-gray-600 dark:text-gray-400">Date: {updateDate}</p>
                <Link to="/addReview">
                    <button  onClick={handleReview} className="mt-2 px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-purple-500 rounded-md focus:outline-none">Write Review</button>
                </Link>

                <div className="flex justify-between mt-3 item-center">
                    <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-[#00917c] rounded-md focus:outline-none">Update Date</button>

                    <button onClick={()=> handleDelete(_id)} className="px-3 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-red-500 rounded-md focus:outline-none">Delete</button>
                </div>
                
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            
            <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-[#00917c]">Select a Date</h3>
                
                <div className="modal-action text-center">
                <form method="dialog" className="text-center flex flex-col md:flex-row gap-2 justify-center items-center " >
                    <input onChange={(e)=> setUpdateDate(e.target.value)} className="input input-bordered input-success " type="date" name="date" id="" />
                    {/* if there is a button in form, it will close the modal */}
                    <button onClick={()=>handleUpdateDate(_id)} className="btn btn-sm btn-success bg-[#00917c] text-white">Close</button>
                </form>
                </div>
            </div>
            </dialog>
        </div>
    );
};

export default BookingRow;