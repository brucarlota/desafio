import React, { useState } from 'react';
import StyledSelect from './Select.styles';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from '@mui/material';

const Select = ({ id, label, optionList, value, handleChange }) => {
	return (
		<>
			<InputLabel id={id}>{label}</InputLabel>
			<StyledSelect
				id={id}
				labelId={id}
				className={id}
				placeholder={label}
				onChange={handleChange}
				value={value}
				label={label}
				inputProps={{
					'data-testid': id
				}}
			>
				<MenuItem value={0}>TODOS OS TRIBUNAIS</MenuItem>
				{optionList.map((item,index) => (
					<MenuItem key={index} value={item.sigla}>{item.sigla.toUpperCase()}</MenuItem>
				))}
			</StyledSelect>
		</>
	);
};

export default Select;
