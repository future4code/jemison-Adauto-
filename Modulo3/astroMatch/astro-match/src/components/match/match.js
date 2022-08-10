import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { ContainerList, HeaderContainer, ContainerMatchs, ButtonContainer, ButtonHeader, FontTitulo } from './styled'


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
        <ContainerList>
            <HeaderContainer>
                <div>
                    <FontTitulo>Astromatch!</FontTitulo>
                </div>
                <ButtonHeader>
                    <button onClick={() => props.trocaTela('inicial')}>Voltar</button>
                </ButtonHeader>
                {lista.map((item) => {
                    return (
                         <ContainerMatchs>
                            <img src={item.photo} key={lista.id}/>
                             {item.name}
                         </ContainerMatchs>
                    )
                
                })}
                </HeaderContainer>
            <ButtonContainer>
                <button onClick={apagaPerfil}>Deletar Matchs</button>
            </ButtonContainer>
        </ContainerList>
       )
    }



export default Match;