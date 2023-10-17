import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

export const hookRenderWrapper = (mock, hook, hookParams) => {
  const wrapper = ({ children }) => (
    <MockedProvider mocks={mock} addTypename={false}>
      {children}
    </MockedProvider>
  );
  const { result } = renderHook(() => hook(hookParams), { wrapper });
  return {
    result,
  };
};
