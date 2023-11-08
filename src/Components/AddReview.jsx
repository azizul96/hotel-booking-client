import { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AddReview = () => {
    const {user} = useContext(AuthContext)
    
    const handleReviewSubmit = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const rating = form.rating.value
        const comment = form.comment.value
        const date = form.date.value

        
        const reviewInfo = {email: user.email, name, rating, comment, date,}
        console.log(reviewInfo);
        fetch('https://hotel-booking-server-mu.vercel.app/reviews',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                return toast.success('Review added successfully');
                  
            }
        })
    }
    return (
        <div className="container mx-auto px-3">
            <Helmet>
                <title>Add Review</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="p-3">
                <div className=" p-6 mx-auto bg-green-200 rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Your Review</h2>

                    <form onSubmit={handleReviewSubmit}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Name</label>
                                <input  type="text" name="name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Rating</label>
                                <select name="rating" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required>
                                    <option disabled selected>Pick One</option>
                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>
                                    <option >4</option>
                                    <option >5</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Comment</label>
                                <input  type="text" name="comment" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Date</label>
                                <input id="passwordConfirmation" type="date" name="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>
                            
                        </div>

                        <div className="flex justify-end mt-6">
                            <input type="submit" value="Submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;