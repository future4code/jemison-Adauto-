	type Usuarios = {
		cliente: string
		saldoTotal: number
		debitos: number[]
	  }
	const listaBanco: Usuarios[] = 
	[
		{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
		{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
		{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
		{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
		{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
		{ cliente: "Soter", saldoTotal: 1200, debitos: [] },
		{ cliente: "Adauto", saldoTotal: 52000000, debitos:[4339, 55000, 247000, 11000, 500000 ]}
	]
	;
	  
	  function clientesNegativos(listaBanco:  Usuarios[]):  Usuarios[] {
		const clienteGastao:  Usuarios[] = listaBanco.map(listaBanco => {
		  const saldoAtualizado = listaBanco.saldoTotal - listaBanco.debitos.reduce((a, b) => a + b, 0)
		  return { ...listaBanco, saldo: saldoAtualizado }
		}).filter(listaBanco => listaBanco.saldo < 0)
	  
		return clienteGastao
	  }
	  
	 
	  const clientesComSaldoNegativo = clientesNegativos(listaBanco)
	  console.log(clientesComSaldoNegativo)
	  