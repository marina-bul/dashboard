import { useState, useCallback } from "react";

export interface Widget {
  id: string;
  name: string;
  isActive: boolean;
}

const DEFAULT_WIDGETS: Widget[] = [
  { 
    id: "task-tracker", 
    name: "Task Tracker", 
    isActive: false 
  },
  { 
    id: "open-tickets", 
    name: "Open Tickets", 
    isActive: false 
  },
  { 
    id: "new-tickets", 
    name: "New Tickets", 
    isActive: false 
  },
  { 
    id: "due-today", 
    name: "Due Today", 
    isActive: false 
  },
  { 
    id: "due-this-week", 
    name: "Due This Week", 
    isActive: false 
  },
  { 
    id: "overdue-tickets", 
    name: "Overdue Tickets", 
    isActive: false 
  },
  { 
    id: "red-flag-tickets", 
    name: "Red Flag Tickets", 
    isActive: false 
  },
  { 
    id: "large-projects", 
    name: "Large Projects", 
    isActive: false 
  }
];


export const useWidgets = () => {
  const [widgets, setWidgets] = useState<Widget[]>(DEFAULT_WIDGETS);
  const [activeWidgets, setActiveWidgets] = useState<Widget[]>([]);

  const activateWidget = useCallback((id: string) => {
    setWidgets(prev =>
      prev.map((widget) => {
        return widget.id === id ? { ...widget, isActive: true } : widget
      })
    );
    setActiveWidgets((prev) => {
      const newWidget = widgets.find((widget) => widget.id===id)

      if(!newWidget) return prev

      return [...prev, newWidget]
    })
  }, [widgets]);

  const resetWidget = useCallback((id: string) => {
    setWidgets(prev =>
      prev.map((widget) => {
        return widget.id === id ? { ...widget, isActive: false } : widget
      })
    );

    setActiveWidgets(prev => prev.filter((widget) => widget.id !== id))
  }, []);


  return {
    widgets,
    activeWidgets,
    activateWidget,
    resetWidget
  };
};
