import React from 'react';
import { useNavigate } from 'react-router-dom'

function ApplicationFormPage (){

    const navigate = useNavigate();

    const goToHome =() => {
        navigate('/')
    }

    const goToList =() =>{
        navigate('/trips/list')
    }

    const goToLogin =() =>{
        navigate('/login')
    }


    return(
        <div>

            <p>ApplicationFormPage</p>
                <button onClick={goToHome}>Home</button>
                 <button onClick={goToList}>List</button>
                 <button onClick={goToLogin}>Login</button>
        
        </div>
    )
}

export default ApplicationFormPage;