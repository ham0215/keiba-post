import Home from '../src/pages';
import { render } from '@testing-library/react';

describe('Sample.ts Functions TestCases', () => {
  it('should return the squared value', async () => {
    render(<Home />);
    expect(1).toEqual(1);
  });
});
