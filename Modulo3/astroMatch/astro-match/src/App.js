import React,{useState} from 'react';
import TelaMatchs from './components/match/Match';
import TelaInicial from './components/telaInicio/Tela';

function App(props) {
  
  const [tela, setTela] = useState('inicial')
  
  const trocaTela = (tela) => {
    setTela(tela)
  }
  const renderizarTela = () =>{
    switch(tela){
      case 'inicial':
      return <TelaInicial trocaTela={trocaTela}/>
      case 'matchs':
      return <TelaMatchs trocaTela={trocaTela}/>
      default:
        return null;
    }
  }
  
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
}

export default App;
