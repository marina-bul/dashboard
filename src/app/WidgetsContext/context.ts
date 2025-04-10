import { createContext } from "react";

import type { Widget } from "shared/hooks/useWidgets";

interface WidgetsContextProps {
  activeWidgets: Widget[];
  activateWidget: (newWidget: Widget) => void;
  resetWidget: (id: string) => void;
}

export const WidgetsContext = createContext<WidgetsContextProps | null>(null);
