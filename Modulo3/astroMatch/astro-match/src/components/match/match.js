import styled from 'styled-components';
import React,{useState, useEffect} from 'react';
import axios from 'axios';

const GetMatches ="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Adauto/matches"
const Clear="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Adauto/clear"

function Match (props) {
    const [lista, setLista] = useState([])

    const pegaLista = () =>{
       axios
       .get(GetMatches)
       .then((response) =>{
        console.log(response.data.matches)
        setLista(response.data.matches)
       })
       .catch((err) =>{
        console.log(err)
       })

    }
    useEffect(() =>{

       pegaLista()
        
    }, [])


    const apagaPerfil = () =>{
           
       
        axios
        .put(Clear)
        .then((response) => {
            pegaLista()
            alert ('Caixa de Match limpa')
        })
        .catch((err) =>{
            console.log(err)
        })
       
    }
       return(
        <div>
            <div>
                <div>
                    <h1>AstroMatch</h1>
                </div>
                <div>
                    <button onClick={() => props.trocaTela('inicial')}>Voltar</button>
                </div>
                {lista.map((item) => {
                    return (
                        <div>
                    <img src={item.foto} key={lista.id}/>
                    {item.name}
                    </div>
                    )
                
                })}
                </div>
            <div>
                <button onClick={apagaPerfil}>Deletar Matchs</button>
            </div>
        </div>
       )
    }



export default Match;