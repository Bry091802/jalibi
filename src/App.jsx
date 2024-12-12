import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/pages/frontend/Welcome';
import Order from './components/pages/frontend/Order';
import Advertisement from './components/pages/backend/advertisement/Advertisement';
import { StoreProvider } from './components/store/storeContext';
import Foods from './components/pages/backend/foods/Foods';
import Category from './components/pages/backend/category/Category';
import Dashboard from './components/pages/backend/dashboard/Dashboard';
import Login from './components/pages/backend/access/Login';
import SetPassword from './components/pages/backend/access/SetPassword';
import ForgotPassword from './components/pages/backend/access/ForgotPassword';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <StoreProvider>
   <Router>
      <Routes>
       <Route index element={<Welcome/>}/>
       <Route path="/order" index element={<Order/>}/>
       <Route path="/admin/dashboard" index element={<Dashboard/>}/>
       <Route path="/admin/advertisement" index element={<Advertisement/>}/>
       <Route path="/admin/foods" index element={<Foods/>}/>
       <Route path="/admin/category" index element={<Category/>}/>
       <Route path="/admin/login" index element={<Login/>}/>
       <Route path="/admin/setpassword" index element={<SetPassword/>}/>
       <Route path="/admin/forgotpassword" index element={<ForgotPassword/>}/>

      </Routes>
   </Router>
   </StoreProvider>
   </QueryClientProvider>
  );
};

export default App