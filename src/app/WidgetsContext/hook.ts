import { useContext } from "react";

import { WidgetsContext } from "./context";


export const useWidgetsContext = () => {
  const context = useContext(WidgetsContext);
  if (!context) {
    throw new Error("useWidgetsContext must be used within a WidgetsProvider");
  }
  return context;
};