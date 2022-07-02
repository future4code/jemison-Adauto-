import React from 'react';
import './App.css';
import {Nav, Footer, Nav3, Main, Imput, NavMeio} from './style.js';

function App() {
  return (
    <div class="DivPai">
      <header>aqui vai uma img</header>
      
      <Main>
        
        <Nav><p>nav direita</p> </Nav>
        <NavMeio>
          <label>Remetente</label>
          <Imput type="text" id="name" name="name"></Imput>
          <label>Mensagem</label>
          <Imput type="text" id="msg" name="msg"></Imput>
          <button>Enviar Mensagem</button>
          
         </NavMeio>
        <Nav3><p>nav esquerda</p> </Nav3>
        
      </Main>
      <Footer><p>coppyright ₢ todos os direitos reservados a Adauto de Matos company ltda</p></Footer>
    </div>
  );
}

export default App;
