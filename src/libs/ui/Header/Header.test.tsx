import { Header } from './Header.container';
import { render } from '@testing-library/react';

jest.mock('next/router', () => require('next-router-mock'));

describe('Header', () => {
  it('snapshot testing', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
