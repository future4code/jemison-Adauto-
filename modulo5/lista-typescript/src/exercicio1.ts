const frase = (nome: string, dataNascimento: string): string =>{
    const [dia, mes, ano] = dataNascimento.split("/");
    const retorno: string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`;
    return retorno;
  };
   console.log(frase("Adauto", "04/abril/1989"))

