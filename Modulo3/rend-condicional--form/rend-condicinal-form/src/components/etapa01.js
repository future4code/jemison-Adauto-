import React, { useState } from "react";



export function Etapa01({etapa}) {
   const[inputEscolaridade ,setInputEscolaridade] = useState('');


   function handleInputEscolaridade (e){
      setInputEscolaridade(e.target.value)
   }
   return(
      <div>
      <form>
<h1>ETAPA 1: Dados gerais</h1>
<label>
   Nome:
   <input type="text" name="nome"          />
</label>

<br></br>

<label for="date">Data de Nascimento</label>
<span id="date-format">(DD-MM-YYYY):</span>
<input type="date" id="date" aria-describedby="date-format" name="date" min="1900-03-01" max="2031-01-01" /><br></br>

<label>
   Email:
   <input type="text" name="email"/>
</label>
   <br></br>

   <label>Escolaridade </label><br/>

<select value={inputEscolaridade} onChange={handleInputEscolaridade}> <br/>

 <option value="1">Ensino Medio Incompleto</option>
 <option value="2">Ensino Medio Completo </option>
 <option value="3">Superior Incompleto</option>
 <option value="4">Superior Completo</option>

</select><br/>


<input type="Submit" value="Proximo" />
   </form>
</div>
   )
}
