import { gql, useQuery } from '@apollo/client';

export const GET_TRIBUNAIS = gql`
	query Tribunais {
		tribunais {
			id
			sigla
		}
	}
`;

const useGetTribunais = () => {
	const { data, loading } = useQuery(GET_TRIBUNAIS);

	return { loading, tribunais: data?.tribunais };
};

export default useGetTribunais;
