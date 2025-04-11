import { Widget } from "shared/hooks/useWidgets";

export const WIDGET_LOCAL_STORAGE_KEY = "activeWidgets";

export const WIDGETS_LIST: Widget[] = [
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