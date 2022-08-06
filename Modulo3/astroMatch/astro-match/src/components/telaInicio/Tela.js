import styled from 'styled-components';
import Card from '../card/Card'


function TelaInicial(props) {



    return(
            
                <div>
                    <div>
                        <h1>AstroMatch</h1>
                    </div>
                    <div>
                        <button onClick={() => props.trocaTela('matchs')}>Ir para Matchs</button>
                    </div>
                    <Card/>
                </div>
              
    )
}

export default TelaInicial;