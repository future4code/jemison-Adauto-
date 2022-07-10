import React, { useState } from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Divdiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
  border: 1px solid gray;
  border-radius: 5%;
`
function App() {

  const [inputNome, setInputNome] = useState("")
  const [inputFotoPerfil, setInputFotoPerfil] = useState("")
  const [inputPuplicacao, setInputPuplicacao] = useState("")

const [postagem, setPostagem] = useState ([
  {nomeUsuario:"Bruna", fotoUsuario:'https://picsum.photos/50/50', fotoPost:'https://picsum.photos/200/199'},
  {nomeUsuario:'Antonio', fotoUsuario:'https://picsum.photos/50/34', fotoPost:'https://picsum.photos/200/200'},
  {nomeUsuario:'John', fotoUsuario:'https://picsum.photos/50/45',fotoPost:'https://picsum.photos/200/171'},
  {nomeUsuario:'Yuri', fotoUsuario:'https://picsum.photos/50/23',fotoPost:'https://picsum.photos/200/151'}
])

 const mapUsuario = postagem.map((intem, index) => {
   return(
  <Post key={index}
      nomeUsuario = {intem.nomeUsuario}
      fotoUsuario = {intem.fotoUsuario}
      fotoPost = {intem.fotoPost}
      />
   )
 })

   console.log(mapUsuario)

   const handleInputNome = (e) => {
    setInputNome(e.target.value)
   }

   const handleInputFotoPerfil = (e) => {
    setInputFotoPerfil(e.target.value)
   }

   const handleInputPublicacao = (e) => {
    setInputPuplicacao(e.target.value)
   }
   
   //add intem
   const addPost = (e) => {
    e.preventDefault()
   

   setPostagem([...postagem,
    {nomeUsuario:inputNome,
    fotoUsuario:inputFotoPerfil,
    fotoPost:inputPuplicacao}
  ])
  setInputNome("")
  setInputFotoPerfil("")
  setInputPuplicacao("")
   
}

 return(
  <MainContainer>
    <Divdiv>
    <label>Nome Usuario:</label>
    <input placeholder='Insira seu nome!'
     value={inputNome}
     onChange = {handleInputNome}
     />

     <label>Foto Perfil:</label>
      <input
        placeholder='Insira seu nome !'
        value={inputFotoPerfil}
        onChange={handleInputFotoPerfil}
      />

      <label> Foto Publicação :</label>
      <input
        placeholder='Insira seu nome !'
        value={inputPuplicacao}
        onChange={handleInputPublicacao}
      />
      
      <button onClick={addPost}>Adicionar</button>
      
    
    </Divdiv>      
          {mapUsuario}

   </MainContainer>

 )
}



export default App;
