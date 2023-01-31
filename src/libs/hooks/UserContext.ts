import type { User } from 'libs/firestore/User';
import { createContext, Dispatch } from 'react';

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: Dispatch<User | null | undefined> | undefined;
};

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: undefined,
});
