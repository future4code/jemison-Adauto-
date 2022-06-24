import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardVerMais from './components/CardVerMais/CardVerMais';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoperfil from './components/img/perfilfoto.jpg';
import posto from './components/img/gasolina-velha-2.jpg';
import malagueta from './components/img/malaguetabistro.jpg';
import home from './components/img/home.jfif';
import email from './components/img/email.jfif';
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoperfil} 
          nome="Adauto - DEV" 
          descricao="Oi, eu sou o Adauto. Desenvolvedor Front end. Sou pai, skatista, artista, cozinheiro, adoro tecnologia e aluno da Labenu."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
        <div>
          <CardVerMais
          imagem={home}
          nome="São Paulo/SP"
          />
        </div>
        <div>
          <CardVerMais
          imagem={email}
          nome="adauto.matosjr@gmail.com"
          />
        </div>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={posto} 
          nome="Posto shell Nossa Senhora do Aviso" 
          descricao="Frentista. Atendimento ao cliente e abastecimento de autos" 
        />
        
        <CardGrande 
          imagem={malagueta} 
          nome="MalaguetaBistro" 
          descricao="Socio-proprietario, restaurante focado em comida cazeira de boa qualidade" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
