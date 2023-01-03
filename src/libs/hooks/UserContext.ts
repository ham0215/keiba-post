import { Dispatch, createContext } from 'react';
import type { User } from 'libs/firestore/User';

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: Dispatch<User | null | undefined> | undefined;
};

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: undefined
});
