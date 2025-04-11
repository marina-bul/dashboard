import { useCallback, useState } from 'react';
import clsx from 'clsx';

import { useDashboard } from 'app/DashboardContext/hook';
import { Dashboard } from "components/Dashboard/Dashboard"
import { WidgetsPanel } from "components/WidgetsPanel/WidgetsPanel"
import { Header } from 'components/Header/Header';

function App() {
  const [isEditing, setIsEditing] = useState(false);

  const { loadFromStorage, saveToStorage } = useDashboard();

  const startEditing = useCallback(() => setIsEditing(true), []);

  const cancelEditing = useCallback(() => {
    loadFromStorage();
    setIsEditing(false)
  }, [loadFromStorage]);

  const saveDashboard = useCallback(() => {
    saveToStorage();
    setIsEditing(false);
  }, [saveToStorage]);

  
  return (
      <div className="w-full h-screen flex flex-col">
        <Header 
          mode={isEditing ? 'edit' : 'default'} 
          onChangeMode={startEditing}
          onCancel={cancelEditing}
          onSave={saveDashboard}
        />
        <main className="flex-grow mt-10 p-6 overflow-y-auto">
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
  )
}

export default App
