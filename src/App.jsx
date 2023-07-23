import React, { useEffect } from 'react';
import Header from './components/Header';
// import SliderCraousal from './components/SliderCraousal';
import Test1 from './test/Test1';
import Home from './pages/Home';
import './css/style.css';
import Header2 from './components/Header2';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from "./dashboard/Layout";
import DashHome from './dashboard/pages/DashHome';
import AddProduct from './dashboard/pages/AddProduct';
const App = () => {

  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith('/dashboard');


  return (
    <div>
      {!isDashboardRoute && <Header2 />}
      {/* <Header2/> */}


      {/* <Home/> */}
      {/* <SearchPage/> */}
      {/* <DetailPage/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/detail-page' element={<DetailPage />} />
        <Route path='/dashboard' element={<Layout />}>
          <Route path='.' element={<DashHome />} />
          <Route path='add-product' element={<AddProduct/>} />
        </Route>
      </Routes>

      {!isDashboardRoute && <Footer />}
      {/* <Footer/> */}
    </div>
  )
}

export default App;
