import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import News from "./pages/News.jsx";
import CCPage from "./pages/CCPage.jsx";
import Login from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import MarketTrendsPage from "./pages/MarketTrendspage.jsx";
import Layout from "./components/Layout.jsx";
import MarketTrends from "./components/MarketTrends.jsx";
import InterviewPage from "./pages/InterviewPage.jsx";
import SystemDesign from "./pages/SystemDesign.jsx";
import CodingRound from "./pages/CodingRound.jsx";
import UiDesign from "./pages/UiDesign.jsx";
import SignupPage from "./pages/SignupPage.jsx";


import "./index.css";

import { createBrowserRouter, RouterProvider  } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/codecomponetspage",
        element: <CCPage />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },

      {
        path: "/profilepage",
        element: <ProfilePage />,
      },
      {
        path: "/markettrendspage",
        element: <MarketTrendsPage />,
      },
      {
        path : '/interview',
        element: < InterviewPage />,
      },
            // {
            //   path: "/interview",
            //   element: <InterviewPage />,
            // },
      
            {
              path: "/systemdesign",
              element: <SystemDesign />,
            },
      
            {
              path: "/codinground",
              element: <CodingRound />,
            },
      
            {
              path : '/uidesign',
              element : < UiDesign/>
            }
        ]
      }
    ])

    // path: "/interview",
    // element : < InterviewPage/>,
    // children: [
    //   {
    //     path: "/interview",
    //     element: <InterviewPage />,
    //   },

    //   {
    //     path: "/interview/systemdesign",
    //     element: <SystemDesign />,
    //   },

    //   {
    //     path: "/interview/codinground",
    //     element: <CodingRound />,
    //   },

    //   {
    //     path : '/interview/uidesign',
    //     element : < UiDesign/>
    //   }

    // ],


  

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
