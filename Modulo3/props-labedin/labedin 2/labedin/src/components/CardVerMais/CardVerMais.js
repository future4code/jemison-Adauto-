import React from 'react';
import './CardVerMais.css'

function CardVerMais(props) {
    return (
        <div className="seemorecard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardVerMais;