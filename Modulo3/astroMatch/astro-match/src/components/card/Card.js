import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Coracao from '../image/like.jpg'
import Excluir from '../image/hate.jpg'
import { ContainerButton, ContainerImage, Image, ImageBlur, TextContainer, NameAge, Bio } from '../card/styled'


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
         <ContainerImage>
                <Image  src={pessoa.photo} alt='Imagem Usuario' />
                <ImageBlur src={pessoa.photo} />
            <TextContainer>
                <NameAge> {pessoa.name}, {pessoa.age} </NameAge>
                <Bio> {pessoa.bio} </Bio>
            </TextContainer>
            </ContainerImage>
            <ContainerButton>
                <button onClick={hatePerson}><img src ={Excluir} alt="Deslike" width="55" height="55" /></button>
                <button onClick={likePerson}><img src ={Coracao} alt="Like" width="55" height="55" /></button>
            </ContainerButton>
        
      </div>
    )
  }

  
  
export default Card;