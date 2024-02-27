import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import Categories from './pages/Categories/Categories';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';

//arrow function that will have contain the main components
const Layout = () =>{
  return(
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    child: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/products/:id",
        element: <Categories/>
      },
      {
        path:"/product/:id",
        element: <Product/>
      },
    ]
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App