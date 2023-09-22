import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Layout } from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import SingleCountry from './components/Countries/SingleCountry';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />
  },
  {
    path: "country/:countrycode",
    element: <SingleCountry />
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <RouterProvider router={router} />
    
  </React.StrictMode>,
)
