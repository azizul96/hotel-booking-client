import { Link } from "react-router-dom";


const BookingRow = ({booking, handleDelete }) => {
    const {_id, room_image, room_name, price,date, r_id} = booking

    return (
    
        <div className="flex  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="w-1/3 " >
                <img src={room_image} alt="" className="object-cover w-full h-full" />
            </div>

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">{room_name}</h1>

                <p className="mt-2 text-sm font-semibold text-gray-600 dark:text-gray-400">Per Night: ${price}</p>
                <p className="mt-2 text-sm font-semibold text-gray-600 dark:text-gray-400">Date: {date}</p>
                <Link to={`/addReview/${r_id}`}>
                    <button  className="mt-2 px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-purple-500 rounded-md focus:outline-none">Write Review</button>
                </Link>

                <div className="flex justify-between mt-3 item-center">
                    <Link to={`/updateDate/${_id}`}>
                    <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-[#00917c] rounded-md focus:outline-none">Update Date</button>
                    </Link>
                    <button onClick={()=> handleDelete(_id)} className="px-3 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-red-500 rounded-md focus:outline-none">Delete</button>
                </div>
  
            </div>
        </div>
    );
};

export default BookingRow;