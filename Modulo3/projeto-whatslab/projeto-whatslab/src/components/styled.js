import styled from "styled-components"

export const  Divpai = styled.div`
display: grid;
grid-template-columns: 1fr 2fr 1fr;
width: 100%;
height: 100%;
`

export const AreaDeMsgm = styled.div`
display: flex;
flex-direction:column;
position: relative;
padding: 10em;
border: 1px solid #000;
border-radius: 1em;
background-color: pink;
border-radius: 1em;
width: 300px;
height:100%;
`
export const BalaoMsgm = styled.div`

background-color: aqua;
display: flex;
justify-content: flex-start;
color: red;

`

export const Button = styled.button`
   width: 10%;
   padding: 0.5em;
   border: none;
   border-radius: 5px;
   background-color: #040404;
   cursor: pointer;
   color: white;
`
export const MainSendMensagem = styled.main`
display: flex;
justify-content: end;
position: absolute;
bottom: 5%;
left: 10%;
`


export const NavDi = styled.nav`
background-color: orange;
width: 200px;
height: 100%;
position: absolute;
left: 0;
color: blueviolet;
`

export const NavLeft = styled.nav`

background-color: orange;
width: 200px;
height: 100%;
position: absolute;
right: 0;
color: blueviolet;

`

export const NavCenter = styled.nav`

display: flex;
align-items: flex-end;
position: absolute;
left: 25%;
bottom: 3%;
`