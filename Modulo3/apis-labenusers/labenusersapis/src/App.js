import React,{useState} from 'react';
import TelaUser from './components/telaUser';
import TelaLista from './components/telaLista';


function App() {
    const [screen, setScreen] = useState('start')

      const changeScreen = (screen) =>{
          setScreen(screen)
      }

      const renderScreen = () =>{
          switch (screen) {
              case 'start':
                  return <TelaUser changeScreen={changeScreen}/>
              case 'list':
                  return <TelaLista changeScreen={changeScreen} />  
              default:
                  return null;      
          }
      }

      return (
        <div>
          {renderScreen()}
        </div>
      );
}

export default App;



