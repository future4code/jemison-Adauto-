import styled from 'styled-components';
import React,{useState, useEffect} from 'react';
import { baseURL } from '../constants';
import axio from axio

const GetMatches ="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Adauto/matches"
const Clear="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Adauto/clear"

function Matche (props) {
    const [lista, setLista] = useState([])

    const pegaLista = () =>{
       axios
       .get(GetMatches)
       .then((response) =>{
        console.log(response.data.matches)
       })
       .catch((err) =>{
        console.log(err)
       })


    useEffect(() =>{

       pegaPerfil()
        
    }, [])


    const escolherPessoa = (choice) =>{
            const body = {
            id:pessoa.id,
            choice:choice,
        }
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
                    <img src={item.foto} key={lista.id}/>
                    {item.name}
                    )
                
            })}
            </div>
            <div>
                <button onClick={apagaPerfil}>Deletar Matchs</button>
            </div>
        </div>
       )
    }

}

export default Match;