
import Card from '../card/Card'
import { ContainerHeader, ContainerCard, FontTitulo, ContainerBtton, ContainerH1 } from './telastyled'

function TelaInicial(props) {



    return(
            
                <ContainerCard>
                    <ContainerHeader>
                    <ContainerH1>
                        <FontTitulo>Astromatch!</FontTitulo>
                    <ContainerBtton>
                        <button onClick={() => props.trocaTela('matchs')}>Ir para Matchs</button>
                    </ContainerBtton>
                    </ContainerH1>
                    </ContainerHeader>
                    <Card/>
                </ContainerCard>
              
    )
}

export default TelaInicial;