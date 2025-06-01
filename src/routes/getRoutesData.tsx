import Home from '@/pages/Home/Home';
import Layout from '@/layouts/Main/Layout';
import Driver from '@/pages/Driver/Driver/Driver';
import OrderPage from '@/pages/Passenger/Order/Order';
import Profile from '@/pages/Passenger/Profile/Profile';
import Form from '@/pages/Driver/Driver/components/Form';
import MyOrders from './../pages/Driver/MyOrders/MyOrders';
import { Navigate, type RouteObject } from 'react-router-dom';
import PassengerMyOrders from '@/pages/Passenger/MyOrders/MyOrders';
import DriverRoutes from '@/pages/Driver/DriverRoutes/DriverRoutes';

const getRoutesData: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/orders/:id', element: <OrderPage /> },
      { path: '/profile', element: <Profile /> },
      { path: '/my-orders', element: <PassengerMyOrders /> },
      { path: '*', element: <Navigate to="/" /> }
    ]
  },
  {
    element: <Layout />,
    children: [
      { path: '/driver', element: <Driver /> },
      { path: '/driver/new-order', element: <DriverRoutes /> },
      { path: '/driver/my-orders', element: <MyOrders /> },
      { path: '/driver/change-tariff', element: <Form /> },
      { path: '*', element: <Navigate to="/driver" /> }
    ]
  }
];

export { getRoutesData };
