import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import LoginPage from './pages/login.jsx'
import RegisPage from './pages/regis.jsx'
import ProductPage from './pages/products.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hoyy</h1>,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/regis',
    element: <RegisPage />
  },
  {
    path: '/products',
    element: <ProductPage />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
