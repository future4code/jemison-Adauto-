import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hook/useForm";
import axios from "axios";


function Login() {
    
    const urlLogin ="https://us-central1-labenu-apis.cloudfunctions.net/labeX/adauto-matos-jemisson/login"

    const [body,onChange,clear]=useForm({ email: "", password: ""})
   
    const fazerLogin = (event) => {
        event.preventDefault()
        axios.post(urlLogin, body).
        then((response)=>{
            console.log(response.data);
        }).catch((error)=>{
            console.log("deu erro")
        })
        clear();
    }

    const navigate = useNavigate();

    const goToHome =() =>{
          navigate('/')

    }

    const goToAdminHomePage =() =>{
          navigate('/admin/trips/list')
    }



    return(

        <div>

            
            <h1> Login </h1>
                <button onClick={goToHome}>Home</button><br></br>                
                <div>
           <form onSubmit={fazerLogin}>
                <label htmlFor="email">E-mail: </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    value={body.email}
                    onChange={onChange}
                    required 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <label htmlFor="password">Senha: </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="password"
                    value={body.password}
                    onChange={onChange}
                    pattern="^.{3,}"
                />
                <button onClick={goToAdminHomePage}>Login</button>
            </form>
        </div>

                
        </div>
    )
}

export default Login;