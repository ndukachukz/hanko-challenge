"use client";
import { Hanko } from "@teamhanko/hanko-elements";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { hankoApi } from "../utils/hanko";

type InitialState = {
  userId?: string;
  hanko?: Hanko;
};

const initialState: InitialState = {};

export const AppContext = createContext<
  [appState: InitialState, setAppState: Dispatch<SetStateAction<InitialState>>]
>([initialState, () => {}]);

export function AppProvider({ children }: { children: ReactNode }) {
  const [appState, setAppState] = useState<InitialState>(initialState);

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setAppState((prevState) => ({ ...prevState, hanko: new Hanko(hankoApi) }))
    );
  }, []);

  return (
    <AppContext.Provider value={[appState, setAppState]}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppState() {
  const appState = useContext(AppContext);
  return appState;
}
