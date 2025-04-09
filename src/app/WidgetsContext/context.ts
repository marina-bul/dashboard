import { createContext } from "react";

import type { Widget } from "shared/hooks/useWidgets";

interface WidgetsContextProps {
  widgets: Widget[];
  activeWidgets: Widget[];
  activateWidget: (id: string) => void;
  resetWidget: (id: string) => void;
}

export const WidgetsContext = createContext<WidgetsContextProps | null>(null);
