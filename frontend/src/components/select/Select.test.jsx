import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Select from './Select';

describe('Select', () => {
	it('should render select component properly', () => {
		const inputProps = { 'data-testid': 'teste-id' };
		const options = [{ id: '1', sigla: 'abcd' }];
		render(<Select id='teste-id' inputProps={inputProps} optionList={options} />);

		const select = screen.queryByTestId('teste-id');
		expect(select).toBeInTheDocument();
	});
});
