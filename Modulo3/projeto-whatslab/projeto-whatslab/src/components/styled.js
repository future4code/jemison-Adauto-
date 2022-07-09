import styled from "styled-components"

export const AreaDeMsgm = styled.div`
display: flex;
align-items: flex-start;
position: relative;
padding: 10em;
border: 1px solid #000;
border-radius: 1em;
background-color: pink;
border-radius: 1em;
height: 70%;
width: 50%;
left: 30%;
top: 20%;
`
export const MainSendMensagem = styled.main`

position: absolute;
bottom: 5%;
left: 10%;
`

export const  Divpai = styled.div`
display: grid;
grid-template-columns: 1fr 2fr 1fr;
width: 100%;
height: 100%;
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