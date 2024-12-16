import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ForgotPassword from "./components/pages/backend/access/ForgotPassword";
import Login from "./components/pages/backend/access/Login";
import SetPassword from "./components/pages/backend/access/SetPassword";
import Advertisement from "./components/pages/backend/advertisement/Advertisement";
import Category from "./components/pages/backend/category/Category";
import Dashboard from "./components/pages/backend/dashboard/Dashboard";
import Foods from "./components/pages/backend/foods/Foods";
import Settings from "./components/pages/backend/settings/Settings";
import Order from "./components/pages/frontend/Order";
import Welcome from "./components/pages/frontend/Welcome";
import { StoreProvider } from "./components/store/storeContext";
import Role from "./components/pages/backend/settings/role/Role";
import { routeAdmin } from "./routes/routesAdmin";
import { routeDeveloper } from "./routes/RoutesDeveloper";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route index element={<Welcome />} />
            <Route path="/order" index element={<Order />} />

            {routeAdmin.map((item, key) => {
              return (
                <Route path={item.route} key={key} element={item.element} />
              );
            })}
            {routeDeveloper.map((item, key) => {
              return (
                <Route path={item.route} key={key} element={item.element} />
              );
            })}
            {/* <Route path="/admin/dashboard" index element={<Dashboard/>}/>
       <Route path="/admin/settings" index element={<Settings />}/>
       <Route path="/admin/settings/role" index element={<Role />}/>
       <Route path="/admin/settings/developer" index element={<Settings />}/>
       <Route path="/admin/settings/admin" index element={<Settings />}/>
       <Route path="/admin/advertisement" index element={<Advertisement/>}/>
       <Route path="/admin/foods" index element={<Foods/>}/>
       <Route path="/admin/category" index element={<Category/>}/> */}
            <Route path="/admin/login" index element={<Login />} />
            <Route path="/admin/setpassword" index element={<SetPassword />} />
            <Route
              path="/admin/forgotpassword"
              index
              element={<ForgotPassword />}
            />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
