import { useEffect } from "react";
import { useAppState } from "../context";

export function useUser() {
  const [appState, setAppState] = useAppState();

  useEffect(() => {
    appState.hanko?.user
      .getCurrent()
      .then((user) => {
        setAppState((state) => ({ ...state, userId: user.id }));
      })
      .catch((userError) => {
        console.log("GET LOGGED IN USER ERROR => ", userError.message);
      });
  }, []);

  return appState.userId;
}
