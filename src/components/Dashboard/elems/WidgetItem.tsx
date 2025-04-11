import { memo } from "react";

import type { FC } from "react";
import type { Widget } from "shared/constants/widgetsConst";

interface WidgetItemProps {
  widget: Widget
}

export const WidgetItem: FC<WidgetItemProps> = memo(({ widget }) => {

  return (
    <div className="p-3">
      <div 
        className="drag-handle cursor-move bg-gray-100 p-2 rounded-t mb-1 text-sm font-semibold flex justify-between items-center"
      >
        <span>{widget.name}</span>
      </div>
      <div className="flex-grow overflow-auto">
        {widget.content}
      </div>
    </div>
  );
});