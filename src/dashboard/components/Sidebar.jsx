import React from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import PrecisionManufacturingTwoToneIcon from '@mui/icons-material/PrecisionManufacturingTwoTone';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import WebStoriesTwoToneIcon from '@mui/icons-material/WebStoriesTwoTone';
import AppsTwoToneIcon from '@mui/icons-material/AppsTwoTone';
import EqualizerTwoToneIcon from '@mui/icons-material/EqualizerTwoTone';
import QrCode2TwoToneIcon from '@mui/icons-material/QrCode2TwoTone';

const Sidebar = () => {
  return (
    <div className="app-menu navbar-menu">
      <div className="navbar-brand-box">
        <a href="index.html" className="logo logo-dark">
          <span className="logo-sm">
            <img src="assets/images/logo-sm.png" alt="" height="22" />
          </span>
          <span className="logo-lg">
            <img src="assets/images/logo-dark.png" alt="" height="17" />
          </span>
        </a>
        <a href="index.html" className="logo logo-light">
          <span className="logo-sm">
            <img src="assets/images/logo-sm.png" alt="" height="22" />
          </span>
          <span className="logo-lg">
            <img src="assets/images/logo-light.png" alt="" height="17" />
          </span>
        </a>
        <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
          <i className="ri-record-circle-line"></i>
        </button>
      </div>

      <div id="scrollbar">
        <div className="container-fluid">
          <ul className="navbar-nav" id="navbar-nav">
            <li className="menu-title"><span data-key="t-menu">Menu</span></li>

            <li className="nav-item">
              <a className="nav-link menu-link" href="#sidebarDashboards">
                <DashboardIcon/> <span data-key="t-dashboards">Dashboards</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link menu-link"
                href="#productsCollapse"
                data-bs-toggle="collapse"
                data-bs-target="#productsContent"
                role="button"
                aria-expanded="false"
              >
               <PrecisionManufacturingTwoToneIcon/> <span data-key="t-apps">Products</span>
              </a>
              <div className="collapse menu-dropdown" id="productsContent">
                <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                    <Link to="/dashboard/add-product" className="nav-link" data-key="t-calendar"> Add Product </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/dashboard/view-product" className="nav-link" data-key="t-calendar"> View Products </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Add more collapsible menu items using the same structure */}
            
           


            <li className="nav-item">
              <a
                className="nav-link menu-link"
                href="#categoriesCollapse"
                data-bs-toggle="collapse"
                data-bs-target="#categoriesContent"
                role="button"
                aria-expanded="false"
              >
               <CategoryIcon/> <span data-key="t-apps">Categories</span>
              </a>
              <div className="collapse menu-dropdown" id="categoriesContent">
                <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                    <Link to="/dashboard/add-category" className="nav-link" data-key="t-calendar"> Add Category </Link>
                  </li>
                  <li className="nav-item">
                    <a href="apps-chat.html" className="nav-link" data-key="t-chat"> View Categries </a>
                  </li>
                </ul>
              </div>
            </li>



            <li className="nav-item">
              <a
                className="nav-link menu-link"
                href="#sliderCollapse"
                data-bs-toggle="collapse"
                data-bs-target="#sliderContent"
                role="button"
                aria-expanded="false"
              >
               <WebStoriesTwoToneIcon/> <span data-key="t-apps">Home Slider</span>
              </a>
              <div className="collapse menu-dropdown" id="sliderContent">
                <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                    <Link to="/dashboard/add-category" className="nav-link" data-key="t-calendar"> Add Slide </Link>
                  </li>
                  <li className="nav-item">
                    <a href="apps-chat.html" className="nav-link" data-key="t-chat"> View Slides</a>
                  </li>
                </ul>
              </div>
            </li>



            <li className="nav-item">
              <a
                className="nav-link menu-link"
                href="#blogsCollapse"
                data-bs-toggle="collapse"
                data-bs-target="#blogsContent"
                role="button"
                aria-expanded="false"
              >
                <LibraryBooksTwoToneIcon/> <span data-key="t-apps">Blogs</span>
              </a>
              <div className="collapse menu-dropdown" id="blogsContent">
                <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                    <Link to="/dashboard/add-blog" className="nav-link" data-key="t-calendar"> Create Blog </Link>
                  </li>
                  <li className="nav-item">
                    <a href="apps-chat.html" className="nav-link" data-key="t-chat"> View Blogs </a>
                  </li>
                </ul>
              </div>
            </li>


            <li className="nav-item">
              <a
                className="nav-link menu-link"
                href="#finanacesCollapse"
                data-bs-toggle="collapse"
                data-bs-target="#finanacesContent"
                role="button"
                aria-expanded="false"
              >
                <EqualizerTwoToneIcon/> <span data-key="t-apps">Finances</span>
              </a>
              <div className="collapse menu-dropdown" id="finanacesContent">
                <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                    <Link to="/dashboard/add-category" className="nav-link" data-key="t-calendar"> General </Link>
                  </li>
                  <li className="nav-item">
                    <a href="apps-chat.html" className="nav-link" data-key="t-chat"> Balance Sheet </a>

                  </li>
                  <li className="nav-item">
                    <a href="apps-chat.html" className="nav-link" data-key="t-chat"> Income Statement </a>
                  </li>
                </ul>
              </div>
            </li>


            <li className="nav-item">
              <a
                className="nav-link menu-link"
                href="#ordersCollapse"
                data-bs-toggle="collapse"
                data-bs-target="#ordersContent"
                role="button"
                aria-expanded="false"
              >
                <QrCode2TwoToneIcon/> <span data-key="t-apps">Orders</span>
              </a>
              <div className="collapse menu-dropdown" id="ordersContent">
                <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                    <Link to="/dashboard/add-category" className="nav-link" data-key="t-calendar"> Add Order </Link>
                  </li>
                  <li className="nav-item">
                    <a href="apps-chat.html" className="nav-link" data-key="t-chat"> View Orders </a>
                  </li>
                </ul>
              </div>
            </li>



            <li className="nav-item">
              <a
                className="nav-link menu-link"
                href="#menusCollapse"
                data-bs-toggle="collapse"
                data-bs-target="#menusContent"
                role="button"
                aria-expanded="false"
              >
               <ListTwoToneIcon/> <span data-key="t-apps">Menus</span>
              </a>
              <div className="collapse menu-dropdown" id="menusContent">
                <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                    <Link to="/dashboard/add-category" className="nav-link" data-key="t-calendar"> Add Menu </Link>
                  </li>
                  <li className="nav-item">
                    <a href="apps-chat.html" className="nav-link" data-key="t-chat"> View Menu </a>
                  </li>
                </ul>
              </div>
            </li>


            <li className="nav-item">
              <a
                className="nav-link menu-link"
                href="#componentsCollapse"
                data-bs-toggle="collapse"
                data-bs-target="#componentsContent"
                role="button"
                aria-expanded="false"
              >
                <AppsTwoToneIcon/>  <span data-key="t-apps">Components</span>
              </a>
              <div className="collapse menu-dropdown" id="componentsContent">
                <ul className="nav nav-sm flex-column">
                 
                  <li className="nav-item">
                    <a href="apps-chat.html" className="nav-link" data-key="t-chat"> Header </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* Add more collapsible menu items using the same structure */}
            
            {/* ... Repeat the above structure for other menu items ... */}
            
          </ul>
        </div>
      </div>

      <div className="sidebar-background"></div>
    </div>
  );
}

export default Sidebar;
