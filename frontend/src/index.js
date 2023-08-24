import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export const themeColors =  {
  "text": "#2e3e57",
  "background": "#fbfdff",
  "primary": "#C8FFD4",
  "secondary": "#B8E8FC",
  "accent": "#A4A2F9"
};

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     // errorElement: <ErrorPage/>,
//   },
// ]);




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     {/* <RouterProvider router={router} /> */}
     <App></App>
  </React.StrictMode>
);
