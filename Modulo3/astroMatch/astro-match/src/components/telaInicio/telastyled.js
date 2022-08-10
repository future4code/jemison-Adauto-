import styled from  'styled-components'

    

export const ContainerCard = styled.div`
         display: flex;
         width: 630px;
         flex-direction: column;
         justify-content: flex-start;
         border: 1px solid black;
         background-color: whitesmoke;
         margin-left: 350px;
         min-height: 600px;
         max-width: 400px;
         width: 100%;
         padding: 10px 20px;
         align-items: center;
         border-radius: 20px;
         border: 2px solid black;
        margin-top: 10px;
` 

export const ContainerHeader = styled.div`
    border-bottom: 1px solid lightgray;
    display: flex;
    align-items: center;
    
    background-color: hotpink;
    height: 95px;
    margin-left: 40px;
    margin-right:40px;
` 
export const ContainerH1 = styled.div`
      
     
     

`


export const FontTitulo = styled.h1`



    font-size: 66px;
    font-family: 'kaldevaderibbon';
    
`


export const ContainerBtton = styled.div`
    
    position: absolute;
    top: 14%;
    right: 54%;
    
    button{
        border-radius: 20px;
        cursor: pointer;
        transition-duration: 0.4s;
    }
    button:hover {
    background-color: aquamarine; 
    color: white;
}
` 