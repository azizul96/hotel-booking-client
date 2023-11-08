import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillStar } from 'react-icons/ai';

const Reviews = () => {
    const [allReviews, setAllReviews] = useState([])


    const URL = `http://localhost:5000/reviews`
    useEffect(() => {

        axios.get(URL, {withCredentials: true})
        .then(res => {
            // console.log(res.data);
            setAllReviews(res.data)
        })
        
      }, [URL]);
    
      console.log(allReviews);
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {
                allReviews.map(review => 
                <div key={review._id}>
                    <div className="  ">
                        <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                            <p className="leading-loose text-gray-500 dark:text-gray-300">
                                {review.comment}
                            </p>
                            <div className="flex justify-start items-center gap-1">
                                <p>{review.rating}</p>
                                <p><AiFillStar></AiFillStar></p>
                            </div>
                            <div className="flex items-center mt-6">
                                <img className="object-cover rounded-full w-14 h-14" src="/user.png" alt=""/>
                                
                                <div className="mx-4">
                                    <h1 className="font-semibold text-blue-500">{review.name}</h1>
                                    <span className="text-sm text-gray-500 dark:text-gray-300">{review.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Reviews;

{/* <div className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                        What our <span className="text-[#00917c] ">clients</span> say
                    </h1>

                    <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
                        <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                            <p className="leading-loose text-gray-500 dark:text-gray-300">
                                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
                            </p>

                            <div className="flex items-center mt-6">
                                <img className="object-cover rounded-full w-14 h-14" src="/user.png" alt=""/>
                                
                                <div className="mx-4">
                                    <h1 className="font-semibold text-blue-500">Robbert</h1>
                                    <span className="text-sm text-gray-500 dark:text-gray-300">CTO, Robert Consultency</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}