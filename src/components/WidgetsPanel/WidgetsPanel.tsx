import clsx from 'clsx';

import { useWidgetsContext } from 'app/WidgetsContext/hook';

import type { Widget } from 'shared/hooks/useWidgets';

const WIDGETS_LIST: Widget[] = [
  { 
    id: "task-tracker", 
    name: "Task Tracker",
    content: (
      <div className="p-3">
        <h3 className="text-lg font-semibold mb-2">Текущие задачи</h3>
        <div className="space-y-2">
          <div className="bg-blue-50 p-2 rounded border border-blue-200">
            Задача 1: Обновить документацию
          </div>
          <div className="bg-green-50 p-2 rounded border border-green-200">
            Задача 2: Подготовить отчет
          </div>
          <div className="bg-yellow-50 p-2 rounded border border-yellow-200">
            Задача 3: Исправить ошибки в коде
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
        <h3 className="text-lg font-semibold mb-2">Открытые запросы</h3>
        <div className="bg-gray-50 p-2 rounded border">
          <div className="font-bold text-3xl text-center">12</div>
          <div className="text-sm text-center text-gray-500">Необработанных запросов</div>
        </div>
      </div>
    )
  },
  { 
    id: "new-tickets", 
    name: "New Tickets",
    content: (
      <div className="p-3">
        <h3 className="text-lg font-semibold mb-2">Новые запросы</h3>
        <div className="bg-green-50 p-2 rounded border border-green-200">
          <div className="font-bold text-3xl text-center">5</div>
          <div className="text-sm text-center text-gray-500">Сегодня</div>
        </div>
      </div>
    )
  },
];

export const WidgetsPanel = () => {
  const { activeWidgets, activateWidget, resetWidget } = useWidgetsContext();

  return (
    <section className="transition-all duration-300 bg-gray-100 rounded-xl p-4 shadow-inner">          
            <h2 className="text-xl font-bold mb-4">Manage Widgets</h2>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 p-2 rounded-lg w-full"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {WIDGETS_LIST.map((widget) => {
                const isActive = activeWidgets.find((item) => item.id === widget.id);

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
  
                    {isActive 
                      ? (
                        <button 
                          className="bg-white text-black px-2 rounded border border-[#0B5FA5]"
                          onClick={() => resetWidget(widget.id)}
                        >
                          Remove
                        </button> 
                      )
                      : (
                        <button 
                          className="bg-white text-black px-2 rounded border border-[#0B5FA5]"
                          onClick={() => activateWidget(widget)}
                        >
                          Add
                        </button> 
                      )
                    } 
                  </div>
                )
              })}
            </div>
        </section>
  )
}