import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRequestData } from '../../hook/useRequestData';

const getListTrip = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:adauto-matos-jemisson/trips"

function ListTripPage(){


    const [listTrips, isLoadingListTrip, errorListTrip] = useRequestData(`${getListTrip}users`)
    
    const navigate = useNavigate();
    
    const goToHome =() =>{
        navigate('/')
    }

    const goToApllication =() => {
        navigate("/trips/application")
    }

    const goToLogin = () => {
        navigate('/login')
    }

    return(
        <div>
            <p>ListTripPage</p>
                 <button onClick={goToHome}>Home</button>
                 <button onClick={goToApllication}>Apllication</button>
                 <button onClick={goToLogin}>Login</button>
            <section>
                 {isLoadingListTrip && <p>Loading Trips</p>}
                 {!isLoadingListTrip && errorListTrip&&<p>Ocorreu um erro com o usuario</p>}

            </section>
        </div>


    )
}

export default ListTripPage;