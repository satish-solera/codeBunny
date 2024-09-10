import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import News from './pages/News.jsx'
import CCPage from './pages/CCPage.jsx'
import Login from './pages/LoginPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.jsx'
const router = createBrowserRouter([
  
 
  {
    path : '/',
    element : < Layout/>,
    children : [
      {
        path : '/',
        element : < App />
      },
      {
        path : '/ccpage',
        element : < CCPage />
      },
      {
        path : '/news',
        element : < News />
      },
      {
        path : '/login',
        element : <Login/>
      },
    
      {
        path : '/profilepage',
        element : <ProfilePage/>
      }
    ]
   
  },

  



  


]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router} />
  </StrictMode>,
)
