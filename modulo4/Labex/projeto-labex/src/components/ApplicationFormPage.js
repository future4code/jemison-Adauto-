import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "../hook/useForm";
import axios from "axios";

const form ="https://us-central1-labenu-apis.cloudfunctions.net/labeX/adauto-matos-jemison/trips/:id/apply?Content-Type=application/json"

function ApplicationFormPage (){

    const [body,onChange,clear]=useForm({ email: "", password: ""})
   
    const makeLogin = (event) => {
        event.preventDefault()

        axios.post({form}, body)
        .then((response)=>{
            console.log(response.data);
        }).catch((error)=>{
            console.log("deu erro")
        })
        clear();
    
    
    }
    
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
                 <form onSubmit={makeLogin}>     
                    <label htmlFor='name'>name: no mínimo 3 letras</label> 
                    <input  
                         id="name"
                         name="name"
                         value={body.name}
                         onChange={onChange}
                         placeholder="name"
                         required
                         type="text"
                         pattern=""
                    /><br></br>
                    <label>age: maior do que 18</label> 
                    <input
                         id="age"
                         name="age"
                         value={body.age}
                         onChange={onChange}
                         placeholder="age"
                         required
                         type="number"
                         pattern=""
                    /><br></br>
                    <label>applicationText: no mínimo 30 caracteres</label> 
                    <input
                          id=""
                          name=""
                          value=""
                          onChange=""
                          placeholder=""
                          required
                          type="" 
                          pattern=""                   
                    /><br></br>
                    <label>profession:  Mínimo de 10 caracteres</label> 
                    <input
                           id=""
                           name=""
                           value=""
                           onChange=""
                           placeholder=""
                           required
                           type=""
                           pattern=""
                    
                    /><br></br>
                    <label>country: o usuário deve ver um dropdown com nomes de todos os países</label> 
                    <input
                            id=""
                            name=""
                            value=""
                            onChange=""
                            placeholder=""
                            type=""
                            pattern=""
                    
                    />
                    <label>tripId: id da viagem que o candidato quer ir, o usuário deve ver um dropdown com o seguinte valor: `Nome da Viagem - Planeta` e ao selecionar o id da viagem deve ser enviado ao backend.</label> 
                    <input
                            id=""
                            name=""
                            value=""
                            onChange=""
                            placeholder=""
                            required
                            type=""
                            pattern=""
                    />
                    <button>send</button>
                 
                 </form>
        </div>
    )
}

export default ApplicationFormPage;


//Propositalmente reduzimos as validações no backend, então sejam cuidadosos com os dados que enviarão! 
//Usem o console . log para checar os conteúdo da requisição antes de bater de verdade nos endpoints. 
//Se criarem viagens erradas, podem usar o endpoint de deletar viagens pelo Postman.