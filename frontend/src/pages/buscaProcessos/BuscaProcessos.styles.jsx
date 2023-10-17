import styled from '@emotion/styled';

const FormsWrapper = styled('div')`
	display: flex;
	flex-wrap: wrap;
	width: 100%;

	& .formControl {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		gap: 15px;

		@media (max-width: 600px) {
			flex-direction: column;
		}
	}
`;

export { FormsWrapper };
