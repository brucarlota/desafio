import '@testing-library/jest-dom';
import { describe, expect } from 'vitest';
import { waitFor } from '@testing-library/react';
import useGetProcessos, { GET_PROCESSO_BY_NROCNJ } from './useGetProcessos';
import { hookRenderWrapper } from '../utils/hookRenderWrapper';

const processoMockData = [{
	dataInicio: '10/01/2023',
	id: 'cnj-id-01',
	movimentacoes: [
		{
			data: '24/11/2022',
			descricao: 'eu nibh vulputate mauris sagittis placerat.',
		},
	],
	numeroCNJ: 'proc-nro1',
	partes: {
		autor: 'Rogan Cordeiro',
		reu: 'Jaime de Moura',
	},
	tribunalOrigem: 'tjsp',
}];

const queryProcessoMock = [
  {
    request: {
      query: GET_PROCESSO_BY_NROCNJ,
      variables: { numeroCnj: 'proc-nro1' }
    },
    result: {
      data: {
				processos: processoMockData
			},
    },
  },
];

describe('useGetProcessos', () => {
	it('should return the process properly', async () => {
		const { result } = hookRenderWrapper(queryProcessoMock, useGetProcessos, { busca: 'proc-nro1' });
		
		await waitFor(() => {
			expect(result.current).toEqual(
				{
					loading: false,
					processos: processoMockData
				}
			);
		});
	});
});
