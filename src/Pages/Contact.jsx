import Navbar from "../Components/Navbar";
import { MdEmail, MdLocationPin, MdPhoneInTalk } from "react-icons/md";

const Contact = () => {
    return (
        <div className=" container mx-auto mb-10">
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-12 mx-auto">
                        <div>
                            <h1 className="mt-2 text-2xl font-semibold text-[#00917c] md:text-3xl">Contact us</h1>

                            <p className="mt-3 text-gray-500 dark:text-gray-400">Our friendly team would love to hear from you.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
                            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1 text-center">
                                <div>
                                    <span className="inline-block p-3 text-[#00917c] rounded-full bg-blue-100/80 dark:bg-gray-800">
                                        <span className="text-2xl">
                                            <MdEmail></MdEmail>
                                        </span>
                                    </span>

                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">hello@hotel-booking.com</p>
                                </div>

                                <div>
                                    <span className="inline-block p-3 text-[#00917c] rounded-full bg-blue-100/80 dark:bg-gray-800">
                                        <span className="text-2xl">
                                            <MdLocationPin></MdLocationPin>
                                        </span>
                                    </span>
                                    
                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our office.</p>
                                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">3 No Tejturi Bazar West, Panthapath, Dhaka 1215, Bangladesh</p>
                                </div>

                                <div>
                                    <span className="inline-block p-3 text-[#00917c] rounded-full bg-blue-100/80 dark:bg-gray-800">
                                        <span className="text-2xl">
                                            <MdPhoneInTalk></MdPhoneInTalk>
                                        </span>    
                                    </span>
                                    
                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Phone is open 24/7 </p>
                                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">+088 013 1617 7450</p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                                <iframe width="100%" height="100%"  title="map"  scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.893655319291!2d90.38806817557672!3d23.751171388746346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bcd681372b%3A0x5c2b8755e4327004!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sus!4v1699338296824!5m2!1sen!2sus"></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;