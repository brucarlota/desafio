import React from 'react';
import StyledButton from './Button.styles';

const Button = ({ children, id, handleClick }) => {
	return (
		<StyledButton
			id={id}
			data-testid={id}
			onClick={handleClick}
			variant='contained'
		>
			{children}
		</StyledButton>
	);
};

export default Button;
