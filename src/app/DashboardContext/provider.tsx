import { 
  useCallback, 
  useEffect, 
  useMemo, 
  useState 
} from "react";

import { DashboardContext } from "./context";
import { 
  GRID_CONFIG, 
  GRID_ELEMENT_HEIGHT, 
  LAYOUT_LOCAL_STORAGE_KEY 
} from "shared/constants/layoutConst";
import { WIDGET_LOCAL_STORAGE_KEY } from "shared/constants/widgetsConst";

import type { FC, PropsWithChildren } from "react";
import type { Layout } from "react-grid-layout";


export const DashboardProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeWidgetIds, setActiveWidgetIds] = useState<string[]>([]);
  const [layout, setLayout] = useState<Layout[]>([]);
  
  const activateWidget = useCallback((id: string) => {
    setActiveWidgetIds(prev => [...prev, id]);
  }, []);
  
  const handleLayoutChange = useCallback((newLayout: Layout[]) => {
    const updatedLayout = [...newLayout];
    const layoutMap = new Map(layout.map(item => [item.i, item]))  
    
      
    if(newLayout.length > layout.length) {
      const newItemIndex = newLayout.findIndex((item) => !layoutMap.has(item.i))

        updatedLayout[newItemIndex] = {
          i: updatedLayout[newItemIndex].i,
          x: 0,
          y: 0,
          w: GRID_CONFIG.COLS,
          h: GRID_ELEMENT_HEIGHT,
        };
    }
      
    setLayout(updatedLayout);
  }, [layout]);
  
  const loadFromStorage = useCallback(() => {
    const storedWidgetsStr = localStorage.getItem(WIDGET_LOCAL_STORAGE_KEY);
    const savedLayoutStr = localStorage.getItem(LAYOUT_LOCAL_STORAGE_KEY);

    let storedWidgets: string[] = [];
    let savedLayout: Layout[] = [];
      
    try {
      storedWidgets = storedWidgetsStr ? JSON.parse(storedWidgetsStr) : [];
      savedLayout = savedLayoutStr ? JSON.parse(savedLayoutStr) : [];
    } catch (error) {
      console.error("Can't load data from localstorage:", error);
    }

    setTimeout(() => {
      setActiveWidgetIds(storedWidgets);
      setLayout(savedLayout);
    }, 0);

  }, []);
  
  const saveToStorage = useCallback(() => {
    setTimeout(() => {
      localStorage.setItem(WIDGET_LOCAL_STORAGE_KEY, JSON.stringify(activeWidgetIds));
      localStorage.setItem(LAYOUT_LOCAL_STORAGE_KEY, JSON.stringify(layout));
    }, 0)

  }, [activeWidgetIds, layout]);
  

  useEffect(() => {
    loadFromStorage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const value = useMemo(() => ({
    activeWidgetIds,
    layout,

    activateWidget,
    resetWidget: (id: string) => setActiveWidgetIds(prev => prev.filter(wid => wid !== id)),
    handleLayoutChange,

    loadFromStorage,
    saveToStorage
  }), [ 
    activeWidgetIds, layout, 
    activateWidget, handleLayoutChange,
    loadFromStorage, saveToStorage
  ]);
  
  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}