import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Helmet } from "react-helmet-async";

const UpdateDate = () => {
    const {id} = useParams()
    
    

    const handleDateUpdate = e =>{
        e.preventDefault()
        const form = e.target
        const date = form.date.value
        
        const dateInfo = {id, date}
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
        <div className="container mx-auto">
            <Helmet>
                <title>Update Date</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="my-10 flex flex-col  mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
                <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-[#00917c] ">
                    <div className="px-6 py-6 md:px-8 md:py-0">
                        <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Update Your Current date</h2>
                    </div>
                </div>

                <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                    <form onSubmit={handleDateUpdate}>
                        <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                            <input className="px-6 py-2 cursor-pointer text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="date" name="date" aria-label="Enter your date"/>

                            <input type="submit" value="Submit" className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#00917c] rounded-md focus:outline-none cursor-pointer"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateDate;