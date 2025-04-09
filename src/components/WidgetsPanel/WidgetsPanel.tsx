import clsx from 'clsx';

import { useWidgetsContext } from 'app/WidgetsContext/hook';

export const WidgetsPanel = () => {
  const { widgets, activateWidget, resetWidget } = useWidgetsContext();

  return (
    <section className="py-4">          
          <div className="rounded-2xl p-4 bg-white shadow w-full">
            <h2 className="text-lg mb-4">Manage Widgets</h2>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 p-2 rounded-lg w-full"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {widgets.map((widget) => (
                <div
                  key={widget.id}
                  className={
                    clsx("flex items-center justify-between border border-[#0B5FA5] p-4 rounded-lg ",
                      widget.isActive ? "bg-blue-200" : "bg-gray-100"
                    )
                  }
                >
                  <span>{widget.name}</span>

                  {widget.isActive 
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
                        onClick={() => activateWidget(widget.id)}
                      >
                        Add
                      </button> 
                    )
                  } 

                </div>
              ))}
            </div>
          </div>
        </section>
  )
}