import React, { useState, useEffect } from 'react';
import { FormsWrapper } from './BuscaProcessos.styles';
import { Container, FormControl, TextField } from '@mui/material';
import Select from '../../components/select/Select';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import useGetTribunais from '../../hooks/useGetTribunais';
import useSearchContext from '../../hooks/useSearchContext';
import { useNavigate } from 'react-router-dom';

const BuscaProcessos = ({ id }) => {
	const [selectValue, setSelectValue] = useState('');
	const [inputValue, setInputValue] = useState('');
	const { tribunais } = useGetTribunais();
	const navigate = useNavigate();

	const { 
		tribunalSelecionado, 
		setTribunalSelecionado,
		busca,
		setBusca } = useSearchContext();
	
	const handleChangeSelect = (e) => {
		setSelectValue(e.target.value);
	};

	const handleChangeBusca = (e) => {
		setInputValue(e.target.value);
	};

	const handleSearch = () => {
		setTribunalSelecionado(selectValue);
		setBusca(inputValue.replaceAll('.', '').replaceAll('-', ''));
		navigate('/busca');
	};

	useEffect(() => {
		setInputValue(busca);
		setSelectValue(tribunalSelecionado);
	}, []);
	

	return (
		<FormsWrapper data-testid={id} className='formWrapper'>
			<Container>
				<FormControl className='formControl'>
					<Select id='busca__select'
						optionList={tribunais || []} 
						label='Tribunal'
						value={selectValue}
						handleChange={handleChangeSelect} 
					/>
					<Input id='busca__input' 
						label='Número do Processo'
						handleChange={handleChangeBusca}
						value={inputValue} />
					<Button id='busca__btn'
						handleClick={handleSearch}
					>Buscar</Button>
				</FormControl>
			</Container>
		</FormsWrapper>
	);
};

export default BuscaProcessos;
