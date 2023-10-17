import React from 'react';
import BuscaProcessos from '../buscaProcessos/BuscaProcessos';
import useGetProcessos from '../../hooks/useGetProcessos';
import useSearchContext from '../../hooks/useSearchContext';
import DetalhesProcesso from '../detalhesProcesso/detalhesProcesso';
import ExibeDetalhesWrapper from './ExibeDetalhes.styles';
import EmptyState from '../emptyState/EmptyState';

const ExibeDetalhes = () => {
	const { tribunalSelecionado, busca } = useSearchContext();
	const params = {
		busca,
		tribunal: tribunalSelecionado
	};
	const { processos, loading } = useGetProcessos(params);
	const noResults = !loading && processos && processos.length === 0;

	return (
		<ExibeDetalhesWrapper>
			<div className='buscaWrapper'>
				<BuscaProcessos id='exibeDetalhes__form'/>
			</div>
			<main className='mainContent'>
				{processos && processos.map((processo, index) => (
					<DetalhesProcesso key={index} processo={processo} />
				))}
				{noResults && 
					<EmptyState
						id='emptyState__noResult'
						image="./src/assets/images/no-results.png"
						altImage='no result found'
						text='Nenhum resultado encontrado para esta busca' 
					/>
				}
				{!processos && 
					<EmptyState
						id='emptyState__information'
						image="./src/assets/images/information.png"
						altImage='information'
						text='Selecione um Tribunal para listar os processos ou buscar pelo número unificado' 
					/>
				}
			</main>
		</ExibeDetalhesWrapper>
	);
};

export default ExibeDetalhes;
