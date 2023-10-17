import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import BuscaProcessos from './BuscaProcessos';
import useGetTribunais from '../../hooks/useGetTribunais';

vi.mock('../../hooks/useGetTribunais');
vi.mock('react-router-dom');

describe('BuscaProcessos', () => {
	beforeEach(() => {
		vi.mocked(useGetTribunais).mockReturnValue({ tribunais: [] });
	});

	it('should display the form properly', () => {
		render(<BuscaProcessos id='form-test'></BuscaProcessos>);

		const form = screen.getByTestId('form-test');
		expect(form).toBeInTheDocument();
	});
});
