import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import ApplicationFormPage from './publico/ApplicationFormPage';
import ListTripsPage from './publico/ListTripsPage';
import Login from './privado/Login';
import AdminHomePage from './privado/AdminHomePage';
import CreatTrip from './privado/CreateTripPage';
import TripDetails from './privado/TripDetailsPage';


export function Router() {

    return(
        <BrowserRouter>
             <Routes>
                <Route index element={ <Home />}/> 
                <Route path='/trips/application' element={<ApplicationFormPage/>}/>
                <Route path='/trips/list' element={<ListTripsPage/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/admin/trips/list' element={ <AdminHomePage/> } />
                <Route path='/admin/trips/creat' element={ <CreatTrip/>} />
                <Route path='/admin/trips/:id' element={ <TripDetails/> } />                
            </Routes>     
        </BrowserRouter>
    )
}

export default Router;