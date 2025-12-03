import { Route, Routes } from "react-router-dom";
import { Projects } from "../pages/Projects";
import { Product } from "../pages/Product";
import UserLogin from "../components/UserLogin";
import SignUp from "../UserForm/SignUp";
import Login from "../UserForm/Login";


export default function AppRouter(){
    return(
        <div>
            <Routes>
                <Route path='/' element={<UserLogin/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/product' element={<Product/>} />
                <Route path='/signup' element={<SignUp/>} />
                <Route path='/login' element={<Login/>} />

            </Routes>
        </div>
    )
}