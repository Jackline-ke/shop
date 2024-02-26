import React from 'react'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <span>Home</span>,
  },
  {
    path: "/category/:id",
    element: <span>Categories</span>,
  },
  {
    path: "/product/:id",
    element: <span>Product</span>,
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App