import { useContext } from "react";
import { AppContext } from "../App";

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw Error("useAppContext must be used within AppContext.Provider");
  }
  return context;
}
