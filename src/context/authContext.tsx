import React, { createContext, useReducer, ReactNode } from 'react';

interface User {
  email: string;
  token: string;
}

interface State {
  user: User | null;
}

interface Action {
  type: string;
  payload?: User;
}

type Dispatch = (action: Action) => void;

export const AuthContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

export const authReducer: <State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const initialState: State = {
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  console.log('AuthContext state:', state);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
