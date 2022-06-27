import foto from './img/logo0.jpg'
import './App.css';

function App() {
  const titulo ='Olá! Eu sou o Adauto!'
  const falarBoaNoite =()=>{
    (alert`Boa Noite`)
  }
  return (
    <div className="App">
       
      <h1>{titulo}</h1>
      <header className="App-header">
        <img src ={foto} className="logo" alt="logo" />
       <h2> Este é o meu primeiro site React</h2>
        
       <button onClick={falarBoaNoite}>Aperte este botão</button>
      
         
        
        
      </header>
      
    </div>
  );
}

export default App;