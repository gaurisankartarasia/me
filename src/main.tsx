import { StrictMode } from 'react'
import {NextUIProvider} from "@nextui-org/react";


import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('gaurisankar')!).render(
  <StrictMode>
<NextUIProvider>
    <App />
    </NextUIProvider>
  </StrictMode>
)



