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
import Checklist from "./Questions/six/index.jsx";

const router = createBrowserRouter([
    {
        path: "/", element: <Root />, errorElement: <ErrorPage />,
        children: [
            { path: "question/first", element: <First /> },
            { path: "question/second", element: <Second /> },
            { path: "question/sixth", element: <Checklist /> },
        ]
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <RouterProvider router={router} />
</>)