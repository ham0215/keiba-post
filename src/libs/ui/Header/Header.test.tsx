import { Header } from './Header.container';
import { render } from '@testing-library/react';

describe('Header', () => {
  it('snapshot testing', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
