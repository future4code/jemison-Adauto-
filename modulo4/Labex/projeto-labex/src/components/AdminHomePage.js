import React from 'react';
import {useNavigate} from "react-router-dom";

function AdminHomePage() {
    
    const navigate=useNavigate();

    const goToHome =() =>{
        navigate('/')
    }

    const goToCreat =() =>{
        navigate('/admin/trips/creat')
    } 

    const goToTripsDatails =() =>{
        navigate('/admin/trips/:id')
    }

    return(

        <div>
            <p>AdminHomePage</p><br></br>
                <button onClick={goToHome}>Home</button>
                <button onClick={goToCreat}>Create Trips</button>
                <button onClick={goToTripsDatails}>Trips Datails</button>
        
        </div>
    )
}

export default AdminHomePage;