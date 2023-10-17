import styled from "@emotion/styled";

const HomeWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin: auto;
	padding-top: 10%;
	flex-direction: column;

	& .header {
		width: 100%;
		padding-bottom: 3rem;
	}

	& .title {
		font-size: 3rem;
		font-weight: normal;
		
	}
`;

export default HomeWrapper;
