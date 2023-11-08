import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";
import Navbar from "../Components/Navbar";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
    const {createUser, updateUserProfile } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate(null)


    const handleSignUp = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const img = e.target.img.value
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log(name , email, img, password);

        createUser(email,password)
        .then(() =>{
            updateUserProfile(name,img)
            .then(()=>{
                toast.success('User created successfully');
                navigate('/')
            })
        })
        .catch(error =>{
            toast.error(error.message);
        })
    }
    return (
        <div className="container mx-auto px-3">
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="text" name='img' placeholder="Profile image url" className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} placeholder="Your password" className="input input-bordered" name='password' />
                                <span className="absolute bottom-3 right-3 text-xl cursor-pointer" onClick={()=>setShowPassword(!showPassword)}>
                                    {
                                       showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" value="Sign Up" className="btn btn-success bg-[#00917c] text-white"/>
                        </div>
                            <label className="label text-[#00917c]">
                            Have an account? <Link to="/login" className="label-text-alt link link-hover font-bold text-[#00917c]">Login</Link>
                            </label>
                    </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;