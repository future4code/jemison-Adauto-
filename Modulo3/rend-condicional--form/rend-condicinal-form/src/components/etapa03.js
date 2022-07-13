import React, { useState } from "react";



export function Etapa03({etapa}){
    const[Curso ,setCurso] = useState('');


    function handleCurso (e){
       setCurso(e.target.value)

    }
   return(
      <section>
        <h1>ETAPA 3: Informações </h1>

      
       <label>
      1. Por que você não terminou um curso de graduação?
   <input type="text" name="nome"          />
</label><br></br>


<label>Você fez algum curso complementar? </label><br/>

<select value={Curso} onChange={handleCurso}> <br/>

 <option value="4">Curso técnico</option>
 <option value="4">Cursos de inglês </option>
 <option value="4">Não fiz curso complementar</option>
 
 <input type="Submit" value="Proximo" />
</select><br/>
      </section>
   )
}

