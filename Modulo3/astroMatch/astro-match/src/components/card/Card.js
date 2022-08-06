import styled from 'styled-components';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Coracao from '../image/like.jpg'
import Excluir from '../image/hate.jpg'

const GetProfile ='https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Adauto/person'
const PostChoose ='https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Adauto/choose-person'

function Card() {
  const [pessoa, setPessoa] = useState({})

  const pegaPerfil =() =>{
    axios
    .get(GetProfile)
    .then((response) =>{
      console.log(response.data)
      setPessoa(response.data.profile)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  useEffect(() =>{
    pegaPerfil()
  }, [])  

   const escolhe = (choice) =>{
    const body ={
      id:pessoa.id,
      choice:choice,
    }
   

   axios
    .post(PostChoose , body)
    .then((response) =>{
      pegaPerfil()
    })
    .catch((err) =>{
      console.log(err)
    })
  }
  const likePerson = () =>{
    escolhe(true)
  }

  const hatePerson = () => {
    escolhe(false)
  }

    return (
      <div>
         <div>
                <img  src={pessoa.photo} alt='Imagem Usuario' />
                
            <div>
                <div> {pessoa.name}, {pessoa.age} </div>
                <div> {pessoa.bio} </div>
            </div>
            </div>
            <div>
                <button onClick={hatePerson}><img src ={Excluir} /></button>
                <button onClick={likePerson}><img src ={Coracao} /></button>
            </div>
        
      </div>
    )
  }

  
  
export default Card;