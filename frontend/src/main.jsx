import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:(
      <div>
        <h1>hello world</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path:"about",
    element: <div>About </div>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
