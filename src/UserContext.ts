import { Dispatch, createContext } from 'react';
import firebase from 'firebase';

type UserContextType = {
  user: firebase.User | null;
  setUser: Dispatch<firebase.User | null> | undefined;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: undefined,
});
