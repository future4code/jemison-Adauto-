import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import ApplicationFormPage from './ApplicationFormPage';
import ListTripsPage from './ListTripsPage';
import Login from './Login';
import AdminHomePage from './AdminHomePage';
import CreatTrip from './CreateTripPage';
import TripDetails from './TripDetailsPage';


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