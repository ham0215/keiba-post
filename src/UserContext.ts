import { Dispatch, createContext } from 'react';
import { User } from './firestore/User';

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: Dispatch<User | null> | undefined;
};

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: undefined,
});
