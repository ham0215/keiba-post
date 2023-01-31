import { render } from '@testing-library/react';

import { Link } from './Link.component';

describe('Link', () => {
  it('snapshot testing', () => {
    const { asFragment } = render(<Link href="/keiba">keiba</Link>);
    expect(asFragment()).toMatchSnapshot();
  });
});
