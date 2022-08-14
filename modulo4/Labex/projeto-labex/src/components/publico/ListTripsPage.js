import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRequestData } from '../../hook/useRequestData';




const getListTrip = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:adauto-matos-jemisson/trips"


export function ListTripPage () { 

    const [dataListTrip, isLoadingListTrip, errorListTrip] = useRequestData(getListTrip)
  
    const ListTripBrother = dataListTrip && dataListTrip.trip.map((data) =>{
        return( <div> 
        <p>{data.name}</p>
        <p>{data.description}</p>
        <p>{data.durationInDays}</p>
        <p>{data.date}</p>
        </div>
    )})
    
    

    const navigate = useNavigate();
    
    const goToHome =() =>{
        navigate('/')
    } 

    const goToApplication =() => {
        navigate("/trips/application")
    }

    const goToLogin = () => {
        navigate('/login')
    }

    return(
        <div>
            <p>ListTripPage</p>
                 <button onClick={goToHome}>Home</button>
                 <button onClick={goToApplication}>Application</button>
                 <button onClick={goToLogin}>Login</button>
            <section>
                 {isLoadingListTrip && <p>Loading Trips</p>}
                 {!isLoadingListTrip && errorListTrip && <p> An error occurred with the trip list</p>}
                 {!isLoadingListTrip && dataListTrip && dataListTrip.trips.length > 0 && (ListTripBrother)}
                 {!isLoadingListTrip && dataListTrip && dataListTrip.trips.length === 0 && (<p> No Trips</p>)}
            </section>
        </div>


    )
}

export default ListTripPage;