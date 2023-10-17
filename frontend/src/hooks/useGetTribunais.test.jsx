import '@testing-library/jest-dom';
import { afterAll, describe, expect } from 'vitest';
import { renderHook, waitFor, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import useGetTribunais, { GET_TRIBUNAIS } from './useGetTribunais';
import { hookRenderWrapper } from '../utils/hookRenderWrapper';

const tribunaisMockData = [
	{
		id: 'id-test-1',
		sigla: 'Trib 1'
	},
	{
		id: 'id-test-2',
		sigla: 'Trib 2'
	}
];

const queryTribunaisMock = [
  {
    request: {
      query: GET_TRIBUNAIS,
    },
    result: {
      data: {
				tribunais: tribunaisMockData
			},
    },
  },
];

// export const hookRenderWrapper = (mock, hook, hookParams) => {
//   const wrapper = ({ children }) => (
//     <MockedProvider mocks={mock} addTypename={false}>
//       {children}
//     </MockedProvider>
//   );
//   const { result } = renderHook(() => hook(hookParams), { wrapper });
//   return {
//     result,
//   };
// };

describe('useGetTribunais', () => {
	it('should return the list of courts available', async () => {
		const { result } = hookRenderWrapper(queryTribunaisMock, useGetTribunais);
		expect(result).toBeDefined();
		await waitFor(() => {
			expect(result.current).toEqual(
				{
					loading: false,
					tribunais: tribunaisMockData
				}
			);
		});
	});
});
