import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Links from './Links'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Links />
    </BrowserRouter>
)
