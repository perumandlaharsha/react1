import React, { useState } from "react";
import SignUp from "../UserForm/SignUp";
import Login from "../UserForm/Login";


export default function UserLogin() {
  const [entry, setEntry] = useState(false);
  return <> {entry ? <SignUp /> : <Login />}</>;
}
