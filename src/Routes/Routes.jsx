import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Pages/Loading";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          path: '/category/:id',
          element: <CategoryNews />,
          loader: () => fetch("/news.json"),
          hydrateFallbackElement: <Loading/>
        },
        {
          path: '',
          element: <Home />
        }
      ]
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        {
          path: '/auth/login',
          element: <Login />
        },
        {
          path: '/auth/register',
          element: <Register />
        },
      ]
    },
    {
      path: '/news-details/:id',
      element: <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>,
      loader: () => fetch("/news.json")
    },
    {
      path: '/*',
      element: <h2>Error 404</h2>
    }
  ]);

export default router;