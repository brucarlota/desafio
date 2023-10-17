import styled from '@emotion/styled';

const DetalhesWrapper = styled('div')`
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	margin-bottom: 2rem;

	& .label {
		color: grey;
	}

	& .divider {
		margin: 15px 0;
	}

	@media (max-width: 600px) {
		flex-direction: column;
	}

	& section.title {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		flex-direction: column;
		padding: 1rem;
		background: rgba(212, 202, 205, 0.5);

		& .title__processo {
			font-size: 2rem;
			font-weight: bold;
		}
	}

	& section.movimentacoes {
		display: flex;
		flex: 3;
		flex-wrap: wrap;
		flex-direction: column;

		& .movimentacoes__empty {
			padding: 20px 0;
		}

		& .movimentacoes__list {
			& .movimentacoes__list-item{
				display: flex;
				flex-wrap: wrap;
				flex-direction: column;
				padding: 10px 0;
				align-items: flex-start;
			}
		}
	}

	& section.detalhes {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;

		& .detalhes__title {
			padding-bottom: 10px;
		}

		& .detalhes__partes div {
			padding-bottom: 15px;
		}
	}
`;

export default DetalhesWrapper;
