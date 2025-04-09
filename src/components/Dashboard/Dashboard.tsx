import { useWidgetsContext } from "app/WidgetsContext/hook";

export const Dashboard = () => {
  const { activeWidgets } = useWidgetsContext();
  
  return (
    <div className="flex flex-wrap gap-4">
      {activeWidgets.map((widget) => (
        <div className="flex-shrink-0 bg-white p-2">
          {widget.name}
        </div>
      ))}
    </div>
  )
}