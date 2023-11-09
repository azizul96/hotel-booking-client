import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
            <div className="container flex flex-col px-3 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg" data-aos="zoom-in-down" data-aos-duration="3000">
                        <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Find your premium Luxury, Comfort, and Beyond.</h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">Where Luxury Meets Serenity, Your Exclusive Retreat Awaits.</p>
                        <div className="grid gap-6 mt-8 sm:grid-cols-2">
                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <p><FaCheck></FaCheck></p>
                                <span className="mx-3">24-hour Room Service</span>
                            </div>

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <p><FaCheck></FaCheck></p>
                                <span className="mx-3">High-Speed Wi-Fi</span>
                            </div>

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <p><FaCheck></FaCheck></p>
                                <span className="mx-3">Air Conditioning</span>
                            </div>

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <p><FaCheck></FaCheck></p>
                                <span className="mx-3">Safe for Valuables</span>
                            </div>

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <p><FaCheck></FaCheck></p>
                                <span className="mx-3">Payment Security</span>
                            </div>

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <p><FaCheck></FaCheck></p>
                                <span className="mx-3">Daily Housekeeping</span>
                            </div>
                            
                        </div>
                        <Link to="/rooms">
                            <button className='mt-5 px-5 py-3 rounded-full shadow-lg font-semibold bg-[#00917c] text-white'>Explore Now</button>
                        </Link>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img className="object-cover w-full h-full max-w-2xl rounded-md" src="/banner.webp" alt="glasses photo"/>
                </div>
            </div>
        </div>
    );
};

export default Banner;