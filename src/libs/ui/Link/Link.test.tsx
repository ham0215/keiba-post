import { Link } from './Link.component';
import { render } from '@testing-library/react';

describe('Link', () => {
  it('snapshot testing', () => {
    const { asFragment } = render(<Link href="/keiba">keiba</Link>);
    expect(asFragment()).toMatchSnapshot();
  });
});
