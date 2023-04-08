enum Role  {
    USER = "user",
    ADMIN = "admin"
} 

type Cadastro = {
   name: string
   email: string
   role: Role
}


const cadastro = [
	{name: "Rogério", email: "roger@email.com", role: Role.USER},
	{name: "Ademir", email: "ademir@email.com", role: Role.ADMIN},
	{name: "Aline", email: "aline@email.com", role: Role.USER},
	{name: "Jéssica", email: "jessica@email.com", role: Role.USER},  
	{name: "Adilson", email: "adilson@email.com", role: Role.USER},  
	{name: "Carina", email: "carina@email.com", role: Role.ADMIN}      
] 

const lista = (txt: Cadastro[]) =>{
    const listaFiltrada: string[] = txt
         .filter((Cadastro) => Cadastro.role === Role.ADMIN)
         .map((Cadastro) => Cadastro.email)
         return listaFiltrada
}



  
  console.log(lista(cadastro))