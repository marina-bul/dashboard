import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { DashboardProvider } from 'app/DashboardContext/provider.tsx'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DashboardProvider>
      <App />
    </DashboardProvider>
  </StrictMode>,
)
