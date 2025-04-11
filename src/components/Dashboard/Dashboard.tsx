import { memo, useMemo, type FC } from 'react';
import RGL, { WidthProvider } from "react-grid-layout";

import { useDashboard } from "app/DashboardContext/hook";
import { GRID_CONFIG } from "shared/constants/layoutConst";
import { WIDGETS_LIST } from "shared/constants/widgetsConst";

import { WidgetItem } from "./elems/WidgetItem";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

interface DashboardProps {
  isEditing: boolean
}

const GridLayout = WidthProvider(RGL);

export const Dashboard: FC<DashboardProps> = memo(({ isEditing }) => {

  const { 
    activeWidgetIds, 
    layout, 
    handleLayoutChange, 
    resetWidget 
  } = useDashboard();

  const activeWidgets = useMemo(() => {
    return WIDGETS_LIST.filter((widget) => activeWidgetIds.includes(widget.id))
  }, [activeWidgetIds])
  
  
  return (
    <GridLayout
      layout={layout}
      cols={GRID_CONFIG.COLS}
      rowHeight={GRID_CONFIG.ROW_HEIGHT}
      margin={[10, 10]}
      containerPadding={[10, 10]}
      onLayoutChange={handleLayoutChange}
      draggableHandle=".drag-handle"
      useCSSTransforms={true}
      isResizable={false}
    >
      {activeWidgets.map((widget) => {
        const widgetLayout = layout.find(l => l.i === widget.id);       

        return (
          <div
            key={widget.id}
            className="group relative rounded-lg shadow bg-white overflow-hidden"
            data-grid={{
              i: widget.id,
              x: widgetLayout?.x ?? 0,
              y: widgetLayout?.y ?? Infinity,
              w: widgetLayout?.w ?? 4,
              h: widgetLayout?.h ?? 2,
              isResizable: isEditing,
              isDraggable: isEditing,
            }}
          >
          {isEditing && (
            <button
              onClick={() => resetWidget(widget.id)}
              className="absolute p-1 top-4 right-4 z-10 border rounded bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          )}
            <WidgetItem widget={widget} />
          </div>
        )}
      )}
    </GridLayout>
  );
});