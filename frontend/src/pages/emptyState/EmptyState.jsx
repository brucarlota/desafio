import React from 'react';
import EmptyStateWrapper from './EmptyState.styles';
import { Typography } from '@mui/material';

const EmptyState = ({ id, image, altImage, text }) => {
	return (
		<EmptyStateWrapper className={id}>
			{image && <img className='image' src={image} alt={altImage} />}
			<Typography variant='h6'>{text}</Typography>
		</EmptyStateWrapper>
	);
};

export default EmptyState;
