import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {appRoute} from './appRoute/appRoute'
import Header from './default/Header'




function App() {
  return(
  
        <RouterProvider router={appRoute}/>
    )
}

export default App
