import React from 'react';
import {
  BrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';

import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './components/navbar/Navbar';
import Leftbar from './components/Leftbar/Leftbar';
import Rightbar from './components/Rightbar/Rightbar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
const App = () => {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div className='flex'>
          <Leftbar />
          <div className='flex-6'>
            <Outlet />
          </div>

          <Rightbar />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/profile/:id',
          element: <Profile />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
