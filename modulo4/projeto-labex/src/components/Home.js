import React from "react";
import {useNavigate} from 'react-router-dom';

function Home() {

   const navigate = useNavigate();
  
    const goToApllication = () =>{
          navigate("/trips/application")
    }
    

    const goToAdmPag = () =>{
          navigate("/login")
  }
     const goToListTrip = () =>{
           navigate("/trips/list")
  }
    return(
        <div>

           <p>Home</p>
             <button onClick={goToAdmPag}>Login</button>
             <button onClick={goToListTrip}>ListTrips</button>
             <button onClick={goToApllication}>Apllication</button>
        </div>
    )
}

export default Home;