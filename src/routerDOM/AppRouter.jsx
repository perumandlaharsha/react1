import { Route, Routes } from "react-router-dom";
import { Projects } from "../pages/Projects";
import { Product } from "../pages/Product";


export default function AppRouter(){
    return(
        <div>
            <Routes>
                <Route path='/projects' element={<Projects/>} />
                <Route path='/product' element={<Product/>} />
            </Routes>
        </div>
    )
}