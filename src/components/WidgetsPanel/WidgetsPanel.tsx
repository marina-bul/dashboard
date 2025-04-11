import { ChangeEvent, memo, useEffect, useState } from 'react';
import clsx from 'clsx';

import { WIDGETS_LIST } from 'shared/constants/widgetsConst';
import { useDashboard } from 'app/DashboardContext/hook';

export const WidgetsPanel = memo(() => {

  const { activeWidgetIds, activateWidget, resetWidget } = useDashboard();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWidgets, setFilteredWidgets] = useState(WIDGETS_LIST);
  
  useEffect(() => {
    if (!searchTerm.length) { 
      setFilteredWidgets(WIDGETS_LIST);
      return
    };

    const timerId = setTimeout(() => {
      const results = WIDGETS_LIST.filter((widget) => {
        return widget.name.toLowerCase().includes(searchTerm.toLowerCase())
      });
      setFilteredWidgets(results);
    }, 500); 

    return () => clearTimeout(timerId);
  }, [searchTerm]);
  
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section 
      className="transition-all duration-300 bg-gray-100 rounded-xl p-4 shadow-inner"
    >          
      <h2 className="text-xl font-bold mb-4">Manage Widgets</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 p-2 rounded-lg w-full"
          onChange={handleSearchChange}
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {filteredWidgets.map((widget) => {
          const isActive = !!activeWidgetIds.find((id) => id === widget.id);

            return (
              <div
                key={widget.id}
                className={
                  clsx("flex items-center justify-between border border-[#0B5FA5] p-4 rounded-lg ",
                  isActive ? "bg-blue-200" : "bg-gray-100"
                  )
                }
                >
                <span>{widget.name}</span>
  
                  <button 
                    className="bg-white text-black px-2 rounded border border-[#0B5FA5]"
                    onClick={() => 
                      isActive
                      ? resetWidget(widget.id)
                      : activateWidget(widget.id)
                    }
                  >
                    {isActive ? "Remove" : "Add"}
                  </button> 
              </div>
            )
          })}
        </div>
    </section>
  )
})