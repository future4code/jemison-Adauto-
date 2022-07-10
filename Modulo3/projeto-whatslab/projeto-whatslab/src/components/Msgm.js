import React,{useState} from 'react'
import {AreaDeMsgm, Divpai, NavDi, NavLeft, NavCenter, MainSendMensagem, Button, BalaoMsgm} from './styled'




export function Msgm(){

    const [inputUsuario ,setInputNomeDeUsuario] = useState('');
    const[inputMensagem,setInputMensagem] = useState('');
    const[usuario,setUsuario] = useState ([{nome: "Adauto", mensagem: "Olá, como posso te ajudar!" }])
    
    function handleInputNomeDeUsuario (e){
        setInputNomeDeUsuario(e.target.value)
        
    }
    function handleInputMensagem (e){
        setInputMensagem(e.target.value)
    }

    const addUsuario = (e) => {
        e.preventDefault()

        setUsuario ([...usuario, {nome:inputUsuario, mensagem:inputMensagem}])
        setInputMensagem("")
        setInputNomeDeUsuario("")
    }
    
    const mensagensMapeada = usuario.map((pessoa, index) => {
        
            
                return(
            <BalaoMsgm key={index}>
                <b><u>{pessoa.nome}</u></b>
                <p>{pessoa.mensagem}</p>
            </BalaoMsgm>
                )
              
    })

    
    return (
        <Divpai>
            <NavDi></NavDi>
            <NavCenter>
            <AreaDeMsgm>            
            
            
                {mensagensMapeada}

            </AreaDeMsgm>
            <MainSendMensagem>
                
             <label/>
                <input 
                 placeholder="Escreva seu nome" size={15}
                 value = {inputUsuario}
                 onChange = {handleInputNomeDeUsuario}
                /> 
             <label/>
             <input 
                 placeholder="Escreva sua mensagem" size={40}
                 value = {inputMensagem}
                 onChange = {handleInputMensagem}
             />
             <Button onClick={addUsuario}>Enviar</Button>
            </MainSendMensagem>
            </NavCenter>
            <NavLeft></NavLeft>
        </Divpai>
    );
  }




