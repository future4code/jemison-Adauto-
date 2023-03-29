type Usuario = {
    id:number,
    nome:string,
    telefone:number,
    website:string,
    email:string
}

type PostsUser = {
   userId:number,
   id:number,
   title:string,
   body:string
}

export const user: Usuario[] =
[
    {
      id: 1,
      nome: "Cuidado com a Cuca",
      telefone: 1-70-3456-8010,
      website: "cucafolclore.org",
      email: "cuca@april.biz",
    },
    {
      id: 2,
      nome: "Ronaldo Nasare do Santos",
      telefone: 692-65939125,
      website: "aimeujoelho.net",
      email: "jogamuito@gordao.com"
    },
    {
      id: 3,
      nome: "Silassiai ",
      telefone: 1-463-420-420,
      website: "ramiro.info",
      email: "Nathan@yesenia.net"
    },
    {
      id: 4,
      nome: "Silvio Santos",
      telefone: 493-170-9623-156,
      website: "showdomilhao.biz",
      email: "maoihihi@kory.com"
    },
    {
      id: 5,
      nome: "Anita avassaladora",
      telefone: 6969-954-1289,
      website: "asuaanita.info",
      email: "anitinha@annie.ca"
    },
  ]

 