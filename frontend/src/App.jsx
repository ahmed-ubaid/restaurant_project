import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './App.css'
import HomeElement from './pages/HomeElement'
import About from "./pages/About"
import Menu from "./pages/Menu"
import Booking from "./pages/Booking"
import Navbar from "./components/Navbar"
import Payment from "./pages/Payment"

function App() { 
  const router=createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        { index: true, element: <HomeElement /> },
        { path: 'home', element: <HomeElement /> },
        { path: 'about', element: <About /> },
        { path: 'menu', element: <Menu /> },
        { path: 'booking', element: <Booking /> }
      ]
    },
    {path:'/payment',element:<Payment/>}
    
  ]);

return (
  <div id="appDiv" >
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