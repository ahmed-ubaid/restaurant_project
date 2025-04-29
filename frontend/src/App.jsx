import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './App.css'
import HomeElement from './HomeElement'


function App() {
  const router=createBrowserRouter([
    {path:"/home",element:<HomeElement/>}
  ]) 

return (
  <>
    <RouterProvider router={router}/>
  </>
)
}

export default App

/*
{
    const router=createBrowserRouter([
      {path:"/home",element:<HomeElement/>}
    ]) 

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
*/