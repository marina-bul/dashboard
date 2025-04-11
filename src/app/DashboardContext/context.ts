import { createContext } from "react";

import type { Layout } from "react-grid-layout";

interface WidgetsContextProps {
  activeWidgetIds: string[];
  layout: Layout[];
  activateWidget: (id: string) => void;
  resetWidget: (id: string) => void;
  handleLayoutChange: (newLayout: Layout[]) => void;
  loadFromStorage: () => void;
  saveToStorage: () => void
}

export const DashboardContext = createContext<WidgetsContextProps | null>(null);