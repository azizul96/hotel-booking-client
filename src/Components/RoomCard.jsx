/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const RoomCard = ({room}) => {
    const {_id, room_image, room_name,reviewsCount,price} = room
    return (
        <Link to={`/room-details/${_id}`}>
            <div>
                <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div className="w-full h-auto bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                        <img className="object-cover rounded-lg" src={room_image} alt="" />
                    </div>

                    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800 ">
                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800  dark:text-white ">{room_name}</h3>

                        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span className="font-bold text-gray-800 dark:text-gray-200">${price}</span>
                            <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-[#00917c] rounded  focus:outline-none">{reviewsCount} Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default RoomCard;