import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "@styles/index.scss"
import { MainRouter } from './MainRouter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainRouter />
  </StrictMode>,
)
