import { useContext } from "react";
import { HomeContext } from "../pages/Home";

export function useHomeContext() {
  const context = useContext(HomeContext);
  if (!context) {
    throw Error("useHomeContext must be within HomeContext.Provider");
  }
  return context;
}
