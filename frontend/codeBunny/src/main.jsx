import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import News from './pages/News.jsx'
import CCPage from './pages/CCPage.jsx'
import Login from './pages/LoginPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import MarketTrendsPage  from './pages/MarketTrendspage.jsx'
import Layout from './components/Layout.jsx'
import MarketTrends from './components/MarketTrends.jsx'
import InterviewPage from './pages/InterviewPage.jsx'
import SystemDesign  from './pages/SystemDesign.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
      },
      {
        path : '/markettrendspage',
        element : <MarketTrendsPage/>
      },
      {
        path : '/interview',
        element : <InterviewPage/>,
        children : [
          {
            path: '/interview/systemdesign',
            element : < SystemDesign/>
          }
        ]
      }
    ]
   
  },

  



  


]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router} />
  </StrictMode>,
)
