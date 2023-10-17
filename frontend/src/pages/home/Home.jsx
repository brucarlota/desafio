import React from 'react';
import BuscaProcessos from '../buscaProcessos/BuscaProcessos';
import { Container, Typography } from '@mui/material';
import HomeWrapper from './Home.styles';

const Home = () => {
	return (
		<Container>
			<HomeWrapper>
				<Container>
					<div className='header'>
						<Typography className='title' variant='h1'>Consulta Processual</Typography>
						<Typography className='body' variant='h6'>Selecione um Tribunal para listar os processos ou buscar pelo número unificado</Typography>
					</div>
				</Container>
				<BuscaProcessos id='form__home' />
			</HomeWrapper>
		</Container>
	);
};

export default Home;
