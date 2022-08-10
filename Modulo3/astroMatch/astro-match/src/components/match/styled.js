import styled from "styled-components";


export const ContainerList = styled.div`
  min-height: 600px;
  max-width: 400px;
  width: 100%;
  background-color: pink;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  justify-content: flex-start;
  border-radius: 20px;
  border: 1px solid black;
  margin-left: 350px;
  margin-top: 10px;
` 
export const HeaderContainer = styled.div`
   border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
`
export const FontTitulo = styled.h1`



    font-size: 66px;
    font-family: 'kaldevaderibbon';
    
`

export const ContainerMatchs = styled.div`
    
    position: absolute;
    bottom: 30%;
   
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 1px 1px 1px 1px ;
    margin-top: 20px;
    border-radius: 20px;
  
   
    img{
       
       width:50px;
       height:50px;
       border-radius:20px;
       margin-top:8px;
       margin-left:10px;
   }
`

export const ButtonContainer = styled.div`
        margin-top: 30px;
        margin-left: 180px;
        size: 100px;
        position: absolute;
        bottom: 5%;
        left: 25%;
    button{
        cursor:pointer;
        border-radius: 20px;
        background-color: lightgray;
        border: 2px solid black;
        transition-duration: 0.4s;
}
    button:hover {
        background-color: #FF0000; /* red*/
        color: white;
}
       
` 

export const ButtonHeader = styled.div`
    
    button{
        border-radius: 20px;
        cursor: pointer;
        transition-duration: 0.4s;
        transform: rotate(360deg);
    }
    button:hover {
    background-color: blue; 
    color: white;
}
` 