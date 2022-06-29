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
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />

<Post
            nomeUsuario={'Antonio'}
            fotoUsuario={'https://picsum.photos/50/34'}
            fotoPost={'https://picsum.photos/200/200'}
          />

<Post
            nomeUsuario={'John'}
            fotoUsuario={'https://picsum.photos/50/45'}
            fotoPost={'https://picsum.photos/200/171'}
          />

<Post
            nomeUsuario={'Yuri'}
            fotoUsuario={'https://picsum.photos/50/23'}
            fotoPost={'https://picsum.photos/200/151'}
          />
        </MainContainer>
)

}



export default App;
