import React from 'react';
import { gql, useQuery } from '@apollo/client';

export const GET_PROCESSO_BY_NROCNJ = gql`
	query Processos($numeroCnj: String, $tribunal: String) {
		processos(numeroCNJ: $numeroCnj, tribunal: $tribunal) {
			dataInicio
			id
			movimentacoes {
				data
				descricao
			}
			numeroCNJ
			partes {
				autor
				reu
			}
			tribunalOrigem
		}
	}
`;

const useGetProcessos = (params) => {
	const todosOsTribunais = params.tribunal === '' || params.tribunal === 0;
	const { loading, data } = useQuery(GET_PROCESSO_BY_NROCNJ, {
		variables: {
			numeroCnj: params.busca,
			tribunal: todosOsTribunais ? undefined : params.tribunal
		}
	});

	return { loading, processos: data?.processos };
};

export default useGetProcessos;
