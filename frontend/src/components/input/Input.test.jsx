import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Input from './Input';

describe('Input', () => {
	it('should render input component properly', () => {
		const inputProps = { 'data-testid': 'teste-id' };
		render(<Input id='teste-id' inputProps={inputProps} />);

		const input = screen.queryByTestId('teste-id');
		expect(input).toBeInTheDocument();
	});
});
