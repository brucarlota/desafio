import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Button from './Button';

describe('Button', () => {
	it('should render button properly', () => {
		render(<Button id='teste-id'>btn-teste</Button>);

		const button = screen.getByTestId('teste-id');
		const buttonText = screen.getByText('btn-teste');

		expect(button).toBeInTheDocument();
		expect(buttonText).toBeInTheDocument();
	});
});
