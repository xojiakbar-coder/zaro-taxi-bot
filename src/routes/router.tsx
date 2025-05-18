import Home from '../pages/Home/Home';
import Admin from '../pages/Admin/Admin';
import Order from '../pages/Order/Order';
import Layout from '../layouts/Main/index';
import Driver from '../pages/Driver/Driver';
import Clients from '../pages/Admin/Clients';
import Drivers from '../pages/Admin/Drivers';
import { Route, Routes } from 'react-router-dom';
// import Cashback from '../pages/Cashback/Cashback';
// import Direction from '../pages/Direction/Direction';
import GenericElement from '../view';
import MyOrders from '@/pages/MyOrders/List';

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/driver" element={<Driver />} />
        {/* <Route path="/cashback" element={<Cashback />} /> */}
        {/* <Route path="/direction" element={<Direction />} /> */}
        <Route path="/profile" element={<GenericElement />} />
        <Route path="/my-orders" element={<MyOrders />} />
      </Route>

      <Route path="/admin" element={<Admin />}>
        <Route path="drivers" element={<Drivers />} />
        <Route path="clients" element={<Clients />} />
      </Route>
    </Routes>
  );
}

export default Router;
