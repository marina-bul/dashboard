import clsx from 'clsx';

import { Dashboard } from "components/Dashboard/Dashboard"
import { WidgetsPanel } from "components/WidgetsPanel/WidgetsPanel"
import { WidgetsProvider } from "app/WidgetsContext/provider"
import { useDashboardEditMode } from "shared/hooks/useDashboardEditMode";

function App() {
  const { isEditing, startEditing, cancelEditing, saveEditing } = useDashboardEditMode();
  
  return (
    <WidgetsProvider>
      <div className="min-h-screen w-screen flex flex-col">
      <header className="flex justify-between items-center p-6 border-b shadow-sm bg-[accbee] bg-opacity-50 sticky">
      <h1 className="text-xl font-bold">My Dashboard</h1>
      <div>
        {isEditing ? (
          <div className="flex gap-2">
            <button
              onClick={cancelEditing}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              onClick={saveEditing}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Save dashboard
            </button>
          </div>
        ) : (
          <button
            onClick={startEditing}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Edit dashboard
          </button>
        )}
      </div>
    </header>
        <main className="flex-grow mt-10 p-6">
          <div
            className={clsx("transition-all duration-500 overflow-hidden",
             isEditing ? "max-h-[1000px] opacity-100 mb-4" : "max-h-0 opacity-0" 
            )}
          >
          <WidgetsPanel />
          </div>
          <Dashboard />
        </main>
      </div>
    </WidgetsProvider>
  )
}

export default App
