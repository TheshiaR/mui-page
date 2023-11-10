import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/index'

function App() {
  
  return (
   <div id="page">
      <RouterProvider router= {router}/>
   </div>
  )
}

export default App
