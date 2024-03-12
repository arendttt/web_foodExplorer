import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { NewPlate } from "../pages/NewPlate";
import { EditPlate } from "../pages/EditPlate";

export function AdminRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/details/:id" element={ <Details /> } />
            <Route path="/new" element={ <NewPlate /> } />
            <Route path="/edit/:id" element={ <EditPlate /> } />

            <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
    )
}



