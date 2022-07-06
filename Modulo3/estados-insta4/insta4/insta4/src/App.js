import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {

const postagem = [
  {nomeUsuario:"Bruna", fotoUsuario:'https://picsum.photos/50/50', fotoPost:'https://picsum.photos/200/199'},
  {nomeUsuario:'Antonio', fotoUsuario:'https://picsum.photos/50/34', fotoPost:'https://picsum.photos/200/200'},
  {nomeUsuario:'John', fotoUsuario:'https://picsum.photos/50/45',fotoPost:'https://picsum.photos/200/171'},
  {nomeUsuario:'Yuri', fotoUsuario:'https://picsum.photos/50/23',fotoPost:'https://picsum.photos/200/151'}
]
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

 return(
  <MainContainer>
          {mapUsuario}
   </MainContainer>

 )
}



export default App;
