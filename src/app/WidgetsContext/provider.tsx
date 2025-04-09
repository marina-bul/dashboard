import { useWidgets } from "shared/hooks/useWidgets";
import { WidgetsContext } from "./context";

import type { FC } from "react";

export const WidgetsProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const widgetsData = useWidgets();

  return (
    <WidgetsContext.Provider value={widgetsData}>
      {children}
    </WidgetsContext.Provider>
  );
};

