import { ReactNode } from "react";

export const WIDGET_LOCAL_STORAGE_KEY = "activeWidgets";

export interface Widget {
  id: string;
  name: string;
  content: ReactNode
}

export const WIDGETS_LIST: Widget[] = [
  { 
    id: "liqn-tracker", 
    name: "`LIQN` Tracker",
    content: (
      <div className="p-3">
        <div className="space-y-2">
          <div className="bg-blue-50 p-2 rounded border border-blue-200">
            Task 1: Update Documentation
          </div>
          <div className="bg-green-50 p-2 rounded border border-green-200">
            Task 2: Prepare Report
          </div>
          <div className="bg-yellow-50 p-2 rounded border border-yellow-200">
            Task 3: Fix Code Errors
          </div>
        </div>
      </div>
    )
  },
  { 
    id: "open-tickets", 
    name: "Open Tickets",
    content: (
      <div className="p-3">
        <div className="bg-gray-50 p-2 rounded border">
          <div className="font-bold text-3xl text-center">12</div>
          <div className="text-sm text-center text-gray-500">Unprocessed Requests</div>
        </div>
      </div>
    )
  },
  { 
    id: "new-tickets", 
    name: "New Tickets",
    content: (
      <div className="p-3">
        <div className="bg-green-50 p-2 rounded border border-green-200">
          <div className="font-bold text-3xl text-center">5</div>
          <div className="text-sm text-center text-gray-500">Today</div>
        </div>
      </div>
    )
  },
  { 
    id: "weather", 
    name: "Weather",
    content: (
      <div className="p-3">
        <div className="bg-amber-50 p-2 rounded border">
          <div className="font-bold text-3xl text-center">Sunny</div>
          <div className="text-sm text-center text-gray-500">Temperature: 22°C</div>
        </div>
      </div>
    )
  },
  { 
    id: "steps-tracker", 
    name: "Steps Tracker",
    content: (
      <div className="p-3">
        <div className="bg-blue-50 p-2 rounded border border-blue-200">
          <div className="font-bold text-3xl text-center">10,000</div>
          <div className="text-sm text-center text-gray-500">Steps Today</div>
        </div>
      </div>
    )
  },
  { 
    id: "calendar", 
    name: "Calendar",
    content: (
      <div className="p-3">
        <div className="bg-green-50 p-2 rounded border border-green-200">
          <div className="pb-2 font-bold text-3xl text-center">Today</div>
          <div className="text-sm text-center text-gray-500">
            {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    )
  },
];