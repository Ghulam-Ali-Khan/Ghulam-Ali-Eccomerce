import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div   className="app-menu navbar-menu">
         
            <div   className="navbar-brand-box">
               
                <a href="index.html"   className="logo logo-dark">
                    <span   className="logo-sm">
                        <img src="assets/images/logo-sm.png" alt="" height="22" />
                    </span>
                    <span   className="logo-lg">
                        <img src="assets/images/logo-dark.png" alt="" height="17" />
                    </span>
                </a>
                
                <a href="index.html"   className="logo logo-light">
                    <span   className="logo-sm">
                        <img src="assets/images/logo-sm.png" alt="" height="22" />
                    </span>
                    <span   className="logo-lg">
                        <img src="assets/images/logo-light.png" alt="" height="17" />
                    </span>
                </a>
                <button type="button"   className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                    <i   className="ri-record-circle-line"></i>
                </button>
            </div>

            <div id="scrollbar">
                <div   className="container-fluid">

                    <div id="two-column-menu">
                    </div>
                    <ul   className="navbar-nav" id="navbar-nav">
                        <li   className="menu-title"><span data-key="t-menu">Menu</span></li>
                        <li   className="nav-item">
                            <a   className="nav-link menu-link" href="#sidebarDashboards" >
                                <i   className="ri-dashboard-2-line"></i> <span data-key="t-dashboards">Dashboards</span>
                            </a>
                           
                        </li> 
                        <li   className="nav-item">
                            <a   className="nav-link menu-link" href="#sidebarApps" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarApps">
                                <i   className="ri-apps-2-line"></i> <span data-key="t-apps">Products</span>
                            </a>
                            <div   className="collapse menu-dropdown" id="sidebarApps">
                                <ul   className="nav nav-sm flex-column">
                                    <li   className="nav-item">
                                        <Link to="/dashboard/add-product"   className="nav-link" data-key="t-calendar"> Add Product </Link>
                                    </li>
                                    <li   className="nav-item">
                                        <a href="apps-chat.html"   className="nav-link" data-key="t-chat"> Chat </a>
                                    </li>
                                    <li   className="nav-item">
                                        <a href="#sidebarEmail"   className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarEmail" data-key="t-email">
                                            Email
                                        </a>
                                        <div   className="collapse menu-dropdown" id="sidebarEmail">
                                            <ul   className="nav nav-sm flex-column">
                                                <li   className="nav-item">
                                                    <a href="apps-mailbox.html"   className="nav-link" data-key="t-mailbox"> Mailbox </a>
                                                </li>
                                                <li   className="nav-item">
                                                    <a href="#sidebaremailTemplates"   className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebaremailTemplates" data-key="t-email-templates">
                                                        Email Templates
                                                    </a>
                                                    <div   className="collapse menu-dropdown" id="sidebaremailTemplates">
                                                        <ul   className="nav nav-sm flex-column">
                                                            <li   className="nav-item">
                                                                <a href="apps-email-basic.html"   className="nav-link" data-key="t-basic-action"> Basic Action </a>
                                                            </li>
                                                            <li   className="nav-item">
                                                                <a href="apps-email-ecommerce.html"   className="nav-link" data-key="t-ecommerce-action"> Ecommerce Action </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    
                                </ul>
                            </div>
                        </li>

                        <li   className="nav-item">
                            <a   className="nav-link menu-link" href="#sidebarLayouts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarLayouts">
                                <i   className="ri-layout-3-line"></i> <span data-key="t-layouts">Layouts</span> <span   className="badge badge-pill bg-danger" data-key="t-hot">Hot</span>
                            </a>
                            <div   className="collapse menu-dropdown" id="sidebarLayouts">
                                <ul   className="nav nav-sm flex-column">
                                    <li   className="nav-item">
                                        <a href="layouts-horizontal.html" target="_blank"   className="nav-link" data-key="t-horizontal">Horizontal</a>
                                    </li>
                                    <li   className="nav-item">
                                        <a href="layouts-detached.html" target="_blank"   className="nav-link" data-key="t-detached">Detached</a>
                                    </li>
                                    <li   className="nav-item">
                                        <a href="layouts-two-column.html" target="_blank"   className="nav-link" data-key="t-two-column">Two Column</a>
                                    </li>
                                    <li   className="nav-item">
                                        <a href="layouts-vertical-hovered.html" target="_blank"   className="nav-link" data-key="t-hovered">Hovered</a>
                                    </li>
                                </ul>
                            </div>
                        </li> 

                 

                    </ul>
                </div>
               
            </div>

            <div   className="sidebar-background"></div>
        </div> 
    </>
  )
}

export default Sidebar
