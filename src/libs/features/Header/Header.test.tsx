import { render } from '@testing-library/react';
import { Header } from './Header.container';

jest.mock('next/router', () => require('next-router-mock'));

describe('Header', () => {
  it('snapshot testing', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
