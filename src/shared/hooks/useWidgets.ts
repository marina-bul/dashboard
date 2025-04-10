import { useState, useCallback, useEffect, ReactNode } from "react";

export interface Widget {
  id: string;
  name: string;
  content: ReactNode;

}

export const useWidgets = () => {
  const [activeWidgets, setActiveWidgets] = useState<Widget[]>([]);

  const activateWidget = useCallback((newWidget: Widget) => {
    setActiveWidgets((prev) => {
      return [...prev, newWidget]
    });

  }, []);

  const resetWidget = useCallback((id: string) => {
    setActiveWidgets(prev => prev.filter((widget) => widget.id !== id));

  }, []);

  useEffect(() => {
    const loadStoredWidgets = (): Widget[] => {
      const stored = localStorage.getItem('dashboardWidgets');
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch (error) {
          console.error("Ошибка парсинга widgets из localStorage", error);
        }
      }
      return [];
    };

    setActiveWidgets(loadStoredWidgets())
  }, [])


  return {
    activeWidgets,
    activateWidget,
    resetWidget
  };
};
