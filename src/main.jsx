import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Order from './components/Order/Order';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import carProductsLoader from './loaders/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './Provider/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Order></Order>
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: carProductsLoader
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
)
