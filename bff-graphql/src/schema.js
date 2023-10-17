const typeDefs = `
	scalar Date

	type Partes {
		autor: String,
		reu: String
	}  

	type Movimentacao {
		data: Date,
		descricao: String
	}

	type Processo {
		id: String,
		numeroCNJ: String,
		partes: Partes,
		tribunalOrigem: String,
		dataInicio: Date,
		movimentacoes: [Movimentacao]
	}

	type Query {
		processos(numeroCNJ: String, tribunal: String): [Processo]
	}

	type Tribunal {
		id: String,
		sigla: String,
		nome: String,
	}

	type Query {
		tribunais: [Tribunal]
	}
`;

export default typeDefs;
