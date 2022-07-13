import React, { useState } from "react";



export function Etapa02({etapa}){
   

   return(
      
      <section> 
 <h1>ETAPA 2: Informações educacionais </h1>
<label>
     Qual o curso?
   <input type="text" name="nome"          />
</label><br></br>

<label>
     Qual a unidade de ensino?
   <input type="text" name="nome"          />
</label>

<input type="Submit" value="Proximo" />
    </section>

    
   )
}

