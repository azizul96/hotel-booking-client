import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Login = () => {
    const {emailLogin, googleLogin} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate(null)
    const location = useLocation()

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        emailLogin( email, password )
        .then(() =>{
            toast.success('Login successfully');
            navigate(location?.state ? location.state : '/')
             
        })
        .catch(error =>{
            toast.error(error.message);
        })
    }
    const handleGoogleLogin =()=>{
        googleLogin()
        .then(() =>{
            toast.success('Login successfully');
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            toast.error(error.message);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
                        <input type="submit" value="Login" className="btn btn-success bg-[#00917c] text-white"/>
                        </div>
                            <label className="label text-[#00917c]">
                                New here? <Link to="/signUp" className="label-text-alt link link-hover font-bold text-[#00917c]">Sign Up</Link>
                            </label>
                    </form>
                        <div className="mb-5">
                            <label className="label justify-center items-center gap-5 text-[#00917c]">Login With <FcGoogle onClick={handleGoogleLogin} className="text-3xl cursor-pointer"></FcGoogle>
                            </label>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;