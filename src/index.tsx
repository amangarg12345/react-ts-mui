import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Form from './Components/Form';
import Contact from './Components/Contact';

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/form",
        element: <Form/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
    ]
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={AppRouter}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
