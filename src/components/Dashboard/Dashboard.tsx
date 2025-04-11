import { memo, useMemo } from 'react';
import RGL, { WidthProvider } from "react-grid-layout";

import { useDashboard } from "app/DashboardContext/hook";
import { GRID_CONFIG } from "shared/constants/layoutConst";
import { WIDGETS_LIST } from "shared/constants/widgetsConst";

import { WidgetItem } from "./elems/WidgetItem";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const GridLayout = WidthProvider(RGL);

export const Dashboard = memo(() => {

  const { activeWidgetIds, layout, handleLayoutChange } = useDashboard();

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
    >
      {activeWidgets.map((widget) => (
        <div
          key={widget.id}
          className="border rounded shadow bg-white overflow-hidden"
        >
          <WidgetItem widget={widget} />
        </div>
      ))}
    </GridLayout>
  );
});