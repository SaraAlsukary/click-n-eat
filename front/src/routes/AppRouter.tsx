import { SuspensedPage } from '@components/index';
import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const HomePage = lazy(() => import("@pages/HomePage"));
const Home = lazy(() => import("@pages/Home/Home"));
const Food = lazy(() => import("@pages/Food/Food"));
const Checkout = lazy(() => import("@pages/Checkout/Checkout"));
const Login = lazy(() => import("@pages/Login/Login"));
const Menu = lazy(() => import("@pages/Menu/Menu"));
const Restaurant = lazy(() => import("@pages/Restuarant/Restaurant"));
const Registeration = lazy(() => import("@pages/Registeration/Registeration"));
function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SuspensedPage><HomePage /></SuspensedPage>,
      children: [{
        index: true,
        element: <Home />
      }, {
        path: 'login',
        element: <SuspensedPage><Login /></SuspensedPage>
      }, {
        path: 'registeration',
        element: <SuspensedPage><Registeration /></SuspensedPage>
      }, {
        path: 'checkout',
        element: <SuspensedPage><Checkout /></SuspensedPage>
      }, {
        path: 'restaurant',
        element: <SuspensedPage><Restaurant /></SuspensedPage>,

      },
      {
        path: 'restaurant/:id',
        element: <SuspensedPage><Menu /></SuspensedPage>,

      }, {
        path: 'restaurant/:id/categories/:mealsId',
        element: <SuspensedPage><Food /></SuspensedPage>
      }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter
