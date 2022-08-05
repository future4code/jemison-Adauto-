import React, { useState } from 'react';
import './App.css';
import {Etapa01} from './components/etapa01'
import {Etapa02} from './components/etapa02'
import {Etapa03} from './components/etapa03'
import {Etapa04} from './components/etapa04'


function App() {

  const [proxima, setProxima]= useState('Etapa01')

const Renderiza =() => {

  switch (proxima){

   case 'Etapa01':
   return <Etapa01 etapa ={etapa}/>
   break

   case 'Etapa02':
   return <Etapa02 etapa ={etapa}/>
   break

   case 'Etapa03':
   return <Etapa03 etapa ={etapa}/>
   break

   case 'Etapa04':
   return <Etapa04 etapa ={etapa}/>
   break
  }
}
  function etapa(props){
    setProxima(props)
  }

  return (
    <div>
      <Renderiza/>
    </div>
  );
}

export default App;
