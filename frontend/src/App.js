import React from 'react';
// import './App.css';
import Login from './auth/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './auth/Signup';
import Home from './pages/Home';
import ProductView from './pages/ProductView';
import Dashboard from './component/Dashboard';
import Category from './component/category/Category';
import EditCategory from './component/category/EditCategory';
import Product from './component/product/Product';
import AddProduct from './component/product/AddProduct';
import Report from './component/Report';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/home/view/:id' element={<ProductView />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/category' element={<Category />}></Route>
        <Route path='category/:id' element={<EditCategory />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/product/addproduct' element={<AddProduct />}></Route>
        <Route path='/report' element={<Report />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
