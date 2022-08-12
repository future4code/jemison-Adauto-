import React from "react";
import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    const goToHome =() =>{
          navigate('/')

    }

    const goToAdminHomePage =() =>{
          navigate('/admin/trips/list')
    }



    return(

        <div>

            <p>Login</p><br></br>
                <button onClick={goToHome}>Home</button><br></br>                
                <label for='email'>Email</label>
                <input type="email" id="email" name='email'/><br></br>
                <label for="password" >Password</label>
                <input type="password" id="password" name='password'/><br></br>
                <button onCLick={goToAdminHomePage}>Login</button>
        </div>
    )
}

export default Login;