import {
  mockDisabledUser,
  mockUser,
} from 'libs/firestore/User/testing/mockUser';

import TopPage from '../pages';
import { render, screen } from './test-utils';

// eslint-disable-next-line @typescript-eslint/no-require-imports
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('libs/features/Top', () => ({
  Top: () => <div data-testid="top" />,
}));

describe('TopPage', () => {
  it('should render Please Login when currentUser is null', () => {
    render(<TopPage />);
    expect(screen.getByText('Please Login!!!!')).toBeInTheDocument();
  });

  it('should render Please Login when currentUser is enabled user', () => {
    render(<TopPage />, { currentUser: mockUser });
    expect(screen.getByTestId('top')).toBeInTheDocument();
  });

  it('should render Please Login when currentUser is disabled user', () => {
    render(<TopPage />, { currentUser: mockDisabledUser });
    expect(screen.getByText('Please Login!!!!')).toBeInTheDocument();
  });
});
