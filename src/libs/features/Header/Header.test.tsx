import { render } from '@testing-library/react';

import { Header } from './Header.container';

// eslint-disable-next-line @typescript-eslint/no-require-imports
jest.mock('next/router', () => require('next-router-mock'));

describe('Header', () => {
  it('snapshot testing', () => {
    const { asFragment } = render(<Header currentUser={null} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
