import React from 'react';
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { useProtectedePage } from "../hook/useProtectePage";
import axios from "axios";

function AdminHomePage() {
    useProtectedePage()

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/login",
        {
            headers: {
                auth: token
            }
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log("Deu erro: ", error.response)
        })
    }, [])



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