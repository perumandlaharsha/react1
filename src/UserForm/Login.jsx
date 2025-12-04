import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  let navigate=useNavigate();
  const [valid,setValid]=useState({
    email:"",
    password:"",
  });
  const handleChange=(e)=>{
   let {name,value}=e.target;
   setValid({...valid,
    [name]:value,
   })
  }

  const checkData=(e)=>{
    e.preventDefault()
    let checkd=JSON.parse(localStorage.getItem("user"))
    if(valid.email === checkd.email && checkd.password === valid.password)
    {
      navigate('/home');
    }
  }

  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6 py-12">
      
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-200">

        <h2 className="text-3xl font-bold text-gray-800">Log In</h2>
        <p className="text-sm text-gray-600 mt-1">
          Enter your credentials to continue
        </p>

        <form className="space-y-6 mt-8" onSubmit={checkData}>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={valid.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 
                         text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={valid.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 
                         text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
          
            className="w-full py-2 rounded-md bg-indigo-600 text-white text-sm font-semibold 
                       hover:bg-indigo-500 transition duration-200"
          >
            Log In
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-3">
            Don’t have an account?{" "}
            <Link 
              to="/signup" 
              className="text-indigo-600 hover:text-indigo-500 font-semibold underline"
            >
              Sign Up
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}
