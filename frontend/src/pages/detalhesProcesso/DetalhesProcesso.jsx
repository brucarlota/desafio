import React from 'react';
import DetalhesWrapper from './DetalhesProcesso.styles';
import { Container, Divider, List, ListItem, Typography } from '@mui/material';
import { formatCNJ } from '../../utils/formatter';

const DetalhesProcesso = ({ processo }) => {
	const numeroProcesso = formatCNJ(processo.numeroCNJ);
	const tribunalOrigem = processo.tribunalOrigem.toUpperCase();
	return (
		<Container>
			<DetalhesWrapper>
				<section className="title">
					<Typography className='title__processo' variant='h2'>Processo n. {numeroProcesso} do {tribunalOrigem}</Typography>
					<Typography className='title__subtitle label' variant='subtitle1'>Distribuído em {processo.dataInicio}</Typography>
				</section>
				<section className="movimentacoes">
					<Typography variant='h4'>Movimentações</Typography>
					{processo.movimentacoes.length === 0 && 
						<div className='movimentacoes__empty'>
							<Typography variant='body1'>Não há movimentações</Typography>
						</div>
					}
					<List className='movimentacoes__list'>
						{processo.movimentacoes.map((movimentacao, index) => (
							<div key={index}>
								{index > 0 &&  <Divider component="li" />}
								<ListItem className='movimentacoes__list-item' alignItems="flex-start">
									<Typography variant='body1'>{movimentacao.data}</Typography>
									<Typography variant='body1'>{movimentacao.descricao}</Typography>
								</ListItem>
							</div>
						))}
					</List>
				</section>
				<section className="detalhes">
					<Typography className='detalhes__title' variant='h5'>Detalhes do Processo</Typography>
					<Typography variant='body1'>{tribunalOrigem}</Typography>
					<div className="detalhes__partes">
						<Divider className='divider' />
						<Typography variant='h6'>Partes envolvidas</Typography>
						<div>
							<Typography variant='body1'>{processo.partes.autor}</Typography>
							<Typography className='label' variant='subtitle2'>Parte envolvida - Autor</Typography>
						</div>
						<div>
							<Typography variant='body1'>{processo.partes.reu}</Typography>
							<Typography className='label' variant='subtitle2'>Parte envolvida - Reu</Typography>
						</div>
					</div>
				</section>
			</DetalhesWrapper>
		</Container>
	);
};

export default DetalhesProcesso;
