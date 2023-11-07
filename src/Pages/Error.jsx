import Navbar from "../Components/Navbar";


const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="h-screen text-center">
                <img className="w-full" src="/error.webp" alt="" />
            </div>
        </div>
    );
};

export default Error;