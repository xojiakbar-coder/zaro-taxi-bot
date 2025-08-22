import Home from '@/pages/Home/Home';
import Layout from '@/layouts/Main/Main';
import Driver from '@/pages/Driver/Driver/Driver';
import Create from '@/pages/Driver/Driver/Create';
import OrderPage from '@/pages/Passenger/Order/Create';
import DriverRoutes from '@/pages/Driver/Routes/Routes';
import Profile from '@/pages/Passenger/Profile/Profile';
import MyOrders from './../pages/Driver/MyOrders/MyOrders';
// import Form from '@/pages/Driver/Driver/components/Form';
import { Navigate, type RouteObject } from 'react-router-dom';
import PassengerMyOrders from '@/pages/Passenger/MyOrders/MyOrders';

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
      { path: '/driver/change-tariff', element: <Create /> },
      { path: '*', element: <Navigate to="/driver" /> }
    ]
  }
];

export { getRoutesData };
