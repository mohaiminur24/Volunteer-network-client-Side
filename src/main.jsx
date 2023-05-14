import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthcationContext from './Components/AuthContextLayout/AuthcationContext'
import { RouterProvider } from 'react-router-dom'
import router from './Components/RouterLayout/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthcationContext>
      <RouterProvider router={router}/>
    </AuthcationContext>
  </React.StrictMode>,
)
