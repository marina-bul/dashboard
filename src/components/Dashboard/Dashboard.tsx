import RGL, { WidthProvider } from "react-grid-layout";

import { useWidgetsContext } from "app/WidgetsContext/hook";
import { useWidgetLayout, GRID_CONFIG } from "shared/hooks/useWidgetLayout";

import { WidgetItem } from "./elems/WidgetItem";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const GridLayout = WidthProvider(RGL);

export const Dashboard = () => {
  const { activeWidgets } = useWidgetsContext();
  const { layout, handleLayoutChange } = useWidgetLayout();
  
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
      {activeWidgets.map(widget => (
        <div
          key={widget.id}
          className="border rounded shadow bg-white overflow-hidden"
        >
          <WidgetItem widget={widget} />
        </div>
      ))}
    </GridLayout>
  );
};