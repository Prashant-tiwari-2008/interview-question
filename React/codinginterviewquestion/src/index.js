import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.js'
import './index.css'
import Root from './routes/root'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from "./routes/error-page.jsx";

//importing component for routing
import First from './Questions/first/first'
import Second from './Questions/second/second'
import Checklist from "./Questions/six/index";
import CustomeHook from "./Questions/customeHook/customeHook";
import Timer from "./Questions/Timer/Timer";
import Third from "./Questions/third/generateList.jsx";
import Fourth from "./Questions/fourth/fourth.jsx";
import Fivth from "./Questions/fivth/fivth.jsx";
import Seven from "./Questions/seventh/seven.jsx";
const router = createBrowserRouter([
    {
        path: "/", element: <Root />, errorElement: <ErrorPage />,
        children: [
            { path: "question/first", element: <First /> },
            { path: "question/second", element: <Second /> },
            { path: "question/third", element: <Third /> },
            { path: "question/fourth", element: <Fourth /> },
            { path: "question/fivth", element: <Fivth /> },
            { path: "question/sixth", element: <Checklist /> },
            { path: "question/seven", element: <Seven /> },
            { path: "question/customeHook", element: <CustomeHook /> },
            { path: "question/timer", element: <Timer /> },
        ]
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <RouterProvider router={router} />
</>)