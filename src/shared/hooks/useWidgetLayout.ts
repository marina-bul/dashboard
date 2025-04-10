import { useState, useEffect, useCallback } from "react";

import type { Layout } from "react-grid-layout";

const LOCAL_STORAGE_KEY = "dashboardLayout";

export const GRID_CONFIG = {
  ROW_HEIGHT: 30,
  COLS: 12,
  BREAKPOINTS: {
    lg: 1200,
    md: 996,
    sm: 768,
    xs: 480
  },
  COLS_BY_BREAKPOINT: {
    lg: 12,
    md: 10,
    sm: 6,
    xs: 4
  }
};

const GRID_ELEMENT_HEIGHT = 5;

export const useWidgetLayout = () => {

  const [layout, setLayout] = useState<Layout[]>([]);
  
  useEffect(() => {
    const savedLayoutStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    let savedLayout: Layout[] = [];
      
    try {
      savedLayout = savedLayoutStr ? JSON.parse(savedLayoutStr) : [];
    } catch (error) {
      console.error("Ошибка загрузки layout:", error);
    }
      
    setLayout(savedLayout);

    }, []);


  const handleLayoutChange = useCallback((newLayout: Layout[]) => {
    const updatedLayout = [...newLayout];
      
    if(newLayout.length > layout.length) {
      const newItemIndex = newLayout.length-1

        updatedLayout[newItemIndex] = {
          i: updatedLayout[newItemIndex].i,
          x: 0,
          y: 0,
          w: GRID_CONFIG.COLS,
          h: GRID_ELEMENT_HEIGHT,
        };
    }
      
    setLayout(updatedLayout);

    localStorage.setItem("dashboardLayout", JSON.stringify(updatedLayout));

  }, [layout]);

  return { layout, handleLayoutChange };
};
