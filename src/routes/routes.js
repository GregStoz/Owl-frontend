import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login"
import { SignUp } from "../pages/signUp/SignUp"
import { Dashboard } from "../pages/dashboard/Dashboard";
import { EditProfile } from "../pages/editProfile/EditProfile";
import { CreateContact } from "../pages/createContact/CreateContact";
import { EditContact } from "../pages/editContact/EditContact";


export const OwlRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/edit-profile' element={<EditProfile />} />
      <Route path='/create-contact' element={<CreateContact />} />
      <Route path='/edit-contact/:contactId' element={<EditContact />} />
      
    </Routes>
  );
};
