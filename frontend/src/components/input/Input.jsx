import StyledInput from './Input.styles';
import InputMask from '@mona-health/react-input-mask';

const Input = ({ id, label, value, inputProps, handleChange }) => {
	return (
		<InputMask 
			value={value} 
			onChange={handleChange} 
			mask="9999999-99.9999.9.99.9999"
			maskPlaceholder={null}
		>
			<StyledInput 
				id={id} 
				classame={id} 
				placeholder={label} 
				inputProps={inputProps} 
			/>
		</InputMask>

	);
};

export default Input;
