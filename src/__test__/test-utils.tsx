import { render, RenderOptions } from '@testing-library/react';
import type { User } from 'libs/firestore/User';
import { UserContext } from 'libs/hooks/UserContext';
import { ReactNode } from 'react';
import { ReactElement } from 'react';

type Props = {
  currentUser?: User | null;
  children: ReactNode;
};

const Wrapper = ({ currentUser = null, children }: Props) => {
  const setCurrentUser = jest.fn();

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: RenderOptions & { currentUser: User },
) => {
  return render(ui, {
    wrapper: (props) => Wrapper({ ...props, ...options }),
    ...options,
  });
};

export * from '@testing-library/react';
export { customRender as render };
