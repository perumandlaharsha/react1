import { Route, Routes } from "react-router-dom";
import Projects from "../pages/Projects";
import Product from "../pages/Product";
import UserLogin from "../components/UserLogin";
import SignUp from "../UserForm/SignUp";
import Login from "../UserForm/Login";
import ProductsList from "../Products/ProductsList";
import ProductsData from "../Products/ProductsData";
import { UserData } from "../UserData/userData";


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<UserLogin />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/product" element={<ProductsList />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<UserData />}/>
      <Route path="/product/:id" element={<ProductsData />} />
    </Routes>
  );
}
