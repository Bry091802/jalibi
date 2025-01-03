import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ForgotPassword from "./components/pages/backend/access/ForgotPassword";
import Login from "./components/pages/backend/access/Login";
import SetPassword from "./components/pages/backend/access/SetPassword";
import Order from "./components/pages/frontend/Order";
import Welcome from "./components/pages/frontend/Welcome";
import { StoreProvider } from "./components/store/storeContext";
import { routeAdmin } from "./routes/routesAdmin";
import { routeDeveloper } from "./routes/RoutesDeveloper";
import DeveloperCreatePassword from "./components/pages/backend/access/create-password/DeveloperCreatePassword";
import DeveloperLogin from "./components/pages/backend/access/DeveloperLogin";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route index element={<Welcome />} />
            <Route path="/order" index element={<Order />} />

            {routeDeveloper.map((item, key) => {
              return (
                <Route path={item.route} key={key} element={item.element} />
              );
            })}

            {routeAdmin.map((item, key) => {
              return (
                <Route path={item.route} key={key} element={item.element} />
              );
            })}

            <Route
              path="/developer/create-password"
              index
              element={<DeveloperCreatePassword />}
            />
            <Route path="/developer/login" index element={<DeveloperLogin />} />

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
