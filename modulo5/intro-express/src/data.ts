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


  export const postDosUsuarios: PostsUser[] =
  [
        {
         userId: 1,
         id: 1,
         title: "alo alo",
         body: "tudo nosso"
        },
        {
         userId: 1,
         id: 2,
         title: "aqui e agora",
         body: "asdasdasdasdasdsa"
        },
        {
         userId: 1,
         id: 3,
         title: "asdasd",
         body: "et"
        },
        {
         userId: 2,
         id: 4,
         title: "peace and love",
         body: "no war"
        },
        {
         userId: 2,
         id: 5,
         title: "odio",
         body: "e amor"
        },
        {
         userId: 2,
         id: 6,
         title: "estude",
         body: "para um futuro melhor"
        },
        {
          userId: 3,
          id: 7,
          title: "codando",
          body: "para saber"
        },
        {
         userId: 3,
         id: 8,
         title: "mestre dos magos",
         body: "caverna do dragão"
        },
        {
         userId: 3,
         id: 9,
         title: "rodeio de cotia",
         body: "super faturamento e desvio de dinheiro"
        },
        {
          userId: 4,
          id: 10,
          title: "construir casa",
          body: "terreno"
        },
        {
         userId: 4,
         id: 11,
         title: "clara nunes",
         body: "canto das 3 raças"
        },
        {
         userId: 4,
         id: 12,
         title: "alguma coisa em algum lugar",
         body: "acalanta meu coraçao"
        },       
        {          
          userId: 5,
          id: 13,
          title: "bora meu filho",
          body: "bora bora abre a porta"
        },
        {
         userId: 5,
         id: 14,
         title: "El capone",
         body: "poderoso chefao"
        },
        {
         userId: 5,
         id: 15,
         title: "repteis",
         body: "teoria da evolução"
        },
  ]
 