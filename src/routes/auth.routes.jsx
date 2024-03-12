import { Routes, Route, Navigate } from 'react-router-dom';

import { SignIn } from "../pages/SIgnIn";
import { SignUp } from "../pages/SIgnUp";

export function AuthRoutes() {
    const user = localStorage.getItem("@foodexplorer:user");
    
    return (
        <Routes>
            <Route path="/" element={ <SignIn /> } />
            <Route path="/register" element={ <SignUp /> } />

            { !user && <Route path="*" element={ <Navigate to="/" /> } />}
        </Routes>
    )
}

