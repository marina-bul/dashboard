import { Dashboard } from "components/Dashboard/Dashboard"
import { WidgetsPanel } from "./components/WidgetsPanel/WidgetsPanel"
import { WidgetsProvider } from "app/WidgetsContext/provider"

function App() {
  return (
    <WidgetsProvider>
      <div className="min-h-screen w-screen flex flex-col">
        <header className="fixed top-0 left-0 right-0 bg-opacity-75 text-white p-4">
          <h1 className="text-xl text-[#0B5FA5]">Dashboard</h1>
        </header>
        <main className="flex-grow mt-16 p-4">
          <WidgetsPanel />
          <Dashboard />
        </main>
      </div>
    </WidgetsProvider>
  )
}

export default App
