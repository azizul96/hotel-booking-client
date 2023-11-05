/* eslint-disable react/prop-types */

const Featured = ({data}) => {
    const {room_image, description} = data
    return (
        <div>
            <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover w-full h-40" src={room_image} alt="image"/>

                <div className="py-5 px-2 h-40 text-center">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Featured;