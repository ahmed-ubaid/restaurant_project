import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './App.css'
import HomeElement from './HomeElement'


function App() {
  const router=createBrowserRouter([
    {path:"/home",element:<HomeElement/>}
  ]) 

return (
  <div style={{width:"98.9vw",height:"100vh"}}>
    <RouterProvider router={router}/>
  </div>
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