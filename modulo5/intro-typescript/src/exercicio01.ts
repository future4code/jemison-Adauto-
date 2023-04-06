  console.log(checaTriangulo(4, 4, 4))*/
  const ladoA = process.argv[2]
  const ladoB = process.argv[3]
  const ladoC = process.argv[4]

  function cauculaTriangulo(){

    if (ladoA !== ladoB && ladoB !== ladoC) {
        return "Escaleno";
      } else if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero";
      } else {
        return "Isósceles";
      }
  }

  console.log(cauculaTriangulo)
