import React from "react";
import Chat from "pages/Chat";
import DashboardCustomer from "pages/DashboardCustomer";
import DashboardRestaurant from "pages/DashboardRestaurant";
import SettingsRestaurant from "pages/SettingsRestaurant";
import CustomerReviews from "pages/CustomerReviews";
import Bills from "pages/Bills";
import Menu from "pages/Menu";
import SettingsCustomer from "pages/SettingsCustomer";
import FavoriteMenu from "pages/FavoriteMenu";
import OrdersRestaurant from "pages/OrdersRestaurant";
import OrderHistory from "pages/OrderHistory";
import FoodOrder from "pages/FoodOrder";
import Notification from "pages/Notification";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/foodorder" element={<FoodOrder />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/ordersrestaurant" element={<OrdersRestaurant />} />
        <Route path="/favoritemenu" element={<FavoriteMenu />} />
        <Route path="/settingscustomer" element={<SettingsCustomer />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/customerreviews" element={<CustomerReviews />} />
        <Route path="/settingsrestaurant" element={<SettingsRestaurant />} />
        <Route path="/dashboardrestaurant" element={<DashboardRestaurant />} />
        <Route path="/dashboardcustomer" element={<DashboardCustomer />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
