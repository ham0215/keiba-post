import ExternalLink from '.';
import { render } from '@testing-library/react';

describe('ExternalLink', () => {
  it('snapshot testing', () => {
    const { asFragment } = render(
      <ExternalLink href="/keiba" variant="body1">
        keiba
      </ExternalLink>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
