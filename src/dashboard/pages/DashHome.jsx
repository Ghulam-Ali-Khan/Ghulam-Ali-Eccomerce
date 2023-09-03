import React from 'react';
import { LineChart } from '@mui/x-charts';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const DashHome = () => {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 3500, 3000, 2500, 2000, 1500];
  const xLabels = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Step',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">

          <div className="row">


            <div style={{ minWidth: "100%" }} className='card'>
              <div className="col-lg-12 col-xl-12 col-md-12">
                <LineChart
                  style={{ minWidth: "100%" }}
                  height={300}
                  series={[{ data: uData, area: true }]}
                  xAxis={[{ scaleType: 'point', data: xLabels }]}


                />

                <div className="graph-text-label">
                  <MonetizationOnIcon className='icon' />  <h6>Sales Chart</h6>
                </div>
              </div>

            </div>

          </div>


          <div className="row">
            <div className="col-xl-3 col-md-6" style={{ paddingLeft: "0px" }}>

              <div className="card card-animate">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <p className="text-uppercase fw-medium text-muted text-truncate mb-0"> Today Earnings</p>
                    </div>
                    <div className="flex-shrink-0">
                      <h5 className="text-success fs-14 mb-0">
                        <i className="ri-arrow-right-up-line fs-13 align-middle"></i> +16.24 %
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex align-items-end justify-content-between mt-4">
                    <div>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-4">$<span className="counter-value" data-target="559.25">0</span>k </h4>

                    </div>
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-success-subtle rounded fs-3">
                        <i className="bx bx-dollar-circle text-success"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">

              <div className="card card-animate">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <p className="text-uppercase fw-medium text-muted text-truncate mb-0">today Orders</p>
                    </div>
                    <div className="flex-shrink-0">
                      <h5 className="text-danger fs-14 mb-0">
                        <i className="ri-arrow-right-down-line fs-13 align-middle"></i> -3.57 %
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex align-items-end justify-content-between mt-4">
                    <div>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-4"><span className="counter-value" data-target="36894">0</span></h4>

                    </div>
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-info-subtle rounded fs-3">
                        <i className="bx bx-shopping-bag text-info"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">

              <div className="card card-animate">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <p className="text-uppercase fw-medium text-muted text-truncate mb-0">Today Customers</p>
                    </div>
                    <div className="flex-shrink-0">
                      <h5 className="text-success fs-14 mb-0">
                        <i className="ri-arrow-right-up-line fs-13 align-middle"></i> +29.08 %
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex align-items-end justify-content-between mt-4">
                    <div>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-4"><span className="counter-value" data-target="183.35">0</span>M </h4>

                    </div>
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-warning-subtle rounded fs-3">
                        <i className="bx bx-user-circle text-warning"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6" style={{ paddingRight: "0px" }}>

              <div className="card card-animate">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <p className="text-uppercase fw-medium text-muted text-truncate mb-0"> Total Products</p>
                    </div>
                    <div className="flex-shrink-0">
                      <h5 className="text-muted fs-14 mb-0">
                        +0.00 %
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex align-items-end justify-content-between mt-4">
                    <div>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-4">$<span className="counter-value" data-target="165.89">0</span>k </h4>

                    </div>
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-primary-subtle rounded fs-3">
                        <i className="bx bx-cart text-primary"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className   ="row">
                                    <div className   ="col-xl-6" style={{paddingLeft:"0px"}}>
                                        <div className   ="card">
                                            <div className   ="card-header align-items-center d-flex">
                                                <h4 className   ="card-title mb-0 flex-grow-1">Best Selling Products</h4>
                                                <div className   ="flex-shrink-0">
                                                    <div className   ="dropdown card-header-dropdown">
                                                        <a className   ="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <span className   ="fw-semibold text-uppercase fs-12">Sort by:
                                                            </span><span className   ="text-muted">Today<i className   ="mdi mdi-chevron-down ms-1"></i></span>
                                                        </a>
                                                        <div className   ="dropdown-menu dropdown-menu-end">
                                                            <a className   ="dropdown-item" href="#">Today</a>
                                                            <a className   ="dropdown-item" href="#">Yesterday</a>
                                                            <a className   ="dropdown-item" href="#">Last 7 Days</a>
                                                            <a className   ="dropdown-item" href="#">Last 30 Days</a>
                                                            <a className   ="dropdown-item" href="#">This Month</a>
                                                            <a className   ="dropdown-item" href="#">Last Month</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className   ="card-body">
                                                <div className   ="table-responsive table-card">
                                                    <table className   ="table table-hover table-centered align-middle table-nowrap mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className   ="d-flex align-items-center">
                                                                        <div className   ="avatar-sm bg-light rounded p-1 me-2">
                                                                            <img src="assets/images/products/img-1.png" alt="" className   ="img-fluid d-block" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className   ="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className   ="text-reset">Branded T-Shirts</a></h5>
                                                                            <span className   ="text-muted">24 Apr 2021</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$29.00</h5>
                                                                    <span className   ="text-muted">Price</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">62</h5>
                                                                    <span className   ="text-muted">Orders</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">510</h5>
                                                                    <span className   ="text-muted">Stock</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$1,798</h5>
                                                                    <span className   ="text-muted">Amount</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className   ="d-flex align-items-center">
                                                                        <div className   ="avatar-sm bg-light rounded p-1 me-2">
                                                                            <img src="assets/images/products/img-2.png" alt="" className   ="img-fluid d-block" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className   ="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className   ="text-reset">Bentwood Chair</a></h5>
                                                                            <span className   ="text-muted">19 Mar 2021</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$85.20</h5>
                                                                    <span className   ="text-muted">Price</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">35</h5>
                                                                    <span className   ="text-muted">Orders</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal"><span className   ="badge bg-danger-subtle text-danger">Out of stock</span> </h5>
                                                                    <span className   ="text-muted">Stock</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$2982</h5>
                                                                    <span className   ="text-muted">Amount</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className   ="d-flex align-items-center">
                                                                        <div className   ="avatar-sm bg-light rounded p-1 me-2">
                                                                            <img src="assets/images/products/img-3.png" alt="" className   ="img-fluid d-block" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className   ="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className   ="text-reset">Borosil Paper Cup</a></h5>
                                                                            <span className   ="text-muted">01 Mar 2021</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$14.00</h5>
                                                                    <span className   ="text-muted">Price</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">80</h5>
                                                                    <span className   ="text-muted">Orders</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">749</h5>
                                                                    <span className   ="text-muted">Stock</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$1120</h5>
                                                                    <span className   ="text-muted">Amount</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className   ="d-flex align-items-center">
                                                                        <div className   ="avatar-sm bg-light rounded p-1 me-2">
                                                                            <img src="assets/images/products/img-4.png" alt="" className   ="img-fluid d-block" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className   ="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className   ="text-reset">One Seater Sofa</a></h5>
                                                                            <span className   ="text-muted">11 Feb 2021</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$127.50</h5>
                                                                    <span className   ="text-muted">Price</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">56</h5>
                                                                    <span className   ="text-muted">Orders</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal"><span className   ="badge bg-danger-subtle text-danger">Out of stock</span></h5>
                                                                    <span className   ="text-muted">Stock</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$7140</h5>
                                                                    <span className   ="text-muted">Amount</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className   ="d-flex align-items-center">
                                                                        <div className   ="avatar-sm bg-light rounded p-1 me-2">
                                                                            <img src="assets/images/products/img-5.png" alt="" className   ="img-fluid d-block" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className   ="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className   ="text-reset">Stillbird Helmet</a></h5>
                                                                            <span className   ="text-muted">17 Jan 2021</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$54</h5>
                                                                    <span className   ="text-muted">Price</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">74</h5>
                                                                    <span className   ="text-muted">Orders</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">805</h5>
                                                                    <span className   ="text-muted">Stock</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$3996</h5>
                                                                    <span className   ="text-muted">Amount</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className   ="align-items-center mt-4 pt-2 justify-content-between row text-center text-sm-start">
                                                    <div className   ="col-sm">
                                                        <div className   ="text-muted">
                                                            Showing <span className   ="fw-semibold">5</span> of <span className   ="fw-semibold">25</span> Results
                                                        </div>
                                                    </div>
                                                    <div className   ="col-sm-auto  mt-3 mt-sm-0">
                                                        <ul className   ="pagination pagination-separated pagination-sm mb-0 justify-content-center">
                                                            <li className   ="page-item disabled">
                                                                <a href="#" className   ="page-link">←</a>
                                                            </li>
                                                            <li className   ="page-item">
                                                                <a href="#" className   ="page-link">1</a>
                                                            </li>
                                                            <li className   ="page-item active">
                                                                <a href="#" className   ="page-link">2</a>
                                                            </li>
                                                            <li className   ="page-item">
                                                                <a href="#" className   ="page-link">3</a>
                                                            </li>
                                                            <li className   ="page-item">
                                                                <a href="#" className   ="page-link">→</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className   ="col-xl-6" style={{paddingRight:"0px"}}>
                                        <div className   ="card">
                                            <div className   ="card-header align-items-center d-flex">
                                                <h4 className   ="card-title mb-0 flex-grow-1">Best Selling Category</h4>
                                                <div className   ="flex-shrink-0">
                                                    <div className   ="dropdown card-header-dropdown">
                                                        <a className   ="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <span className   ="fw-semibold text-uppercase fs-12">Sort by:
                                                            </span><span className   ="text-muted">Today<i className   ="mdi mdi-chevron-down ms-1"></i></span>
                                                        </a>
                                                        <div className   ="dropdown-menu dropdown-menu-end">
                                                            <a className   ="dropdown-item" href="#">Today</a>
                                                            <a className   ="dropdown-item" href="#">Yesterday</a>
                                                            <a className   ="dropdown-item" href="#">Last 7 Days</a>
                                                            <a className   ="dropdown-item" href="#">Last 30 Days</a>
                                                            <a className   ="dropdown-item" href="#">This Month</a>
                                                            <a className   ="dropdown-item" href="#">Last Month</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className   ="card-body">
                                                <div className   ="table-responsive table-card">
                                                    <table className   ="table table-hover table-centered align-middle table-nowrap mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className   ="d-flex align-items-center">
                                                                        <div className   ="avatar-sm bg-light rounded p-1 me-2">
                                                                            <img src="assets/images/products/img-1.png" alt="" className   ="img-fluid d-block" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className   ="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className   ="text-reset">Branded T-Shirts</a></h5>
                                                                            <span className   ="text-muted">24 Apr 2021</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$29.00</h5>
                                                                    <span className   ="text-muted">Price</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">62</h5>
                                                                    <span className   ="text-muted">Orders</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">510</h5>
                                                                    <span className   ="text-muted">Stock</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$1,798</h5>
                                                                    <span className   ="text-muted">Amount</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className   ="d-flex align-items-center">
                                                                        <div className   ="avatar-sm bg-light rounded p-1 me-2">
                                                                            <img src="assets/images/products/img-2.png" alt="" className   ="img-fluid d-block" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className   ="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className   ="text-reset">Bentwood Chair</a></h5>
                                                                            <span className   ="text-muted">19 Mar 2021</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$85.20</h5>
                                                                    <span className   ="text-muted">Price</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">35</h5>
                                                                    <span className   ="text-muted">Orders</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal"><span className   ="badge bg-danger-subtle text-danger">Out of stock</span> </h5>
                                                                    <span className   ="text-muted">Stock</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$2982</h5>
                                                                    <span className   ="text-muted">Amount</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className   ="d-flex align-items-center">
                                                                        <div className   ="avatar-sm bg-light rounded p-1 me-2">
                                                                            <img src="assets/images/products/img-3.png" alt="" className   ="img-fluid d-block" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className   ="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className   ="text-reset">Borosil Paper Cup</a></h5>
                                                                            <span className   ="text-muted">01 Mar 2021</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$14.00</h5>
                                                                    <span className   ="text-muted">Price</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">80</h5>
                                                                    <span className   ="text-muted">Orders</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">749</h5>
                                                                    <span className   ="text-muted">Stock</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$1120</h5>
                                                                    <span className   ="text-muted">Amount</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className   ="d-flex align-items-center">
                                                                        <div className   ="avatar-sm bg-light rounded p-1 me-2">
                                                                            <img src="assets/images/products/img-4.png" alt="" className   ="img-fluid d-block" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className   ="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className   ="text-reset">One Seater Sofa</a></h5>
                                                                            <span className   ="text-muted">11 Feb 2021</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$127.50</h5>
                                                                    <span className   ="text-muted">Price</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">56</h5>
                                                                    <span className   ="text-muted">Orders</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal"><span className   ="badge bg-danger-subtle text-danger">Out of stock</span></h5>
                                                                    <span className   ="text-muted">Stock</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$7140</h5>
                                                                    <span className   ="text-muted">Amount</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className   ="d-flex align-items-center">
                                                                        <div className   ="avatar-sm bg-light rounded p-1 me-2">
                                                                            <img src="assets/images/products/img-5.png" alt="" className   ="img-fluid d-block" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className   ="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className   ="text-reset">Stillbird Helmet</a></h5>
                                                                            <span className   ="text-muted">17 Jan 2021</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$54</h5>
                                                                    <span className   ="text-muted">Price</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">74</h5>
                                                                    <span className   ="text-muted">Orders</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">805</h5>
                                                                    <span className   ="text-muted">Stock</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$3996</h5>
                                                                    <span className   ="text-muted">Amount</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className   ="align-items-center mt-4 pt-2 justify-content-between row text-center text-sm-start">
                                                    <div className   ="col-sm">
                                                        <div className   ="text-muted">
                                                            Showing <span className   ="fw-semibold">5</span> of <span className   ="fw-semibold">25</span> Results
                                                        </div>
                                                    </div>
                                                    <div className   ="col-sm-auto  mt-3 mt-sm-0">
                                                        <ul className   ="pagination pagination-separated pagination-sm mb-0 justify-content-center">
                                                            <li className   ="page-item disabled">
                                                                <a href="#" className   ="page-link">←</a>
                                                            </li>
                                                            <li className   ="page-item">
                                                                <a href="#" className   ="page-link">1</a>
                                                            </li>
                                                            <li className   ="page-item active">
                                                                <a href="#" className   ="page-link">2</a>
                                                            </li>
                                                            <li className   ="page-item">
                                                                <a href="#" className   ="page-link">3</a>
                                                            </li>
                                                            <li className   ="page-item">
                                                                <a href="#" className   ="page-link">→</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    
                                </div> 

                                <div className   ="row">
                                    <div className   ="col-xl-12" style={{paddingLeft:"0px",paddingRight:"0px"}}>
                                        <div className   ="card">
                                            <div className   ="card-header align-items-center d-flex">
                                                <h4 className   ="card-title mb-0 flex-grow-1">Our Top Customers</h4>
                                                <div className   ="flex-shrink-0">
                                                    <div className   ="dropdown card-header-dropdown">
                                                        <a className   ="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <span className   ="fw-semibold text-uppercase fs-12">Sort by:
                                                            </span><span className   ="text-muted">Today<i className   ="mdi mdi-chevron-down ms-1"></i></span>
                                                        </a>
                                                        <div className   ="dropdown-menu dropdown-menu-end">
                                                            <a className   ="dropdown-item" href="#">Today</a>
                                                            <a className   ="dropdown-item" href="#">Yesterday</a>
                                                            <a className   ="dropdown-item" href="#">Last 7 Days</a>
                                                            <a className   ="dropdown-item" href="#">Last 30 Days</a>
                                                            <a className   ="dropdown-item" href="#">This Month</a>
                                                            <a className   ="dropdown-item" href="#">Last Month</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className   ="card-body">
                                                <div className   ="table-responsive table-card">
                                                    <table className   ="table table-hover table-centered align-middle table-nowrap mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className   ="d-flex align-items-center">
                                                                        <div className   ="avatar-sm bg-light rounded p-1 me-2">
                                                                            <img src="assets/images/products/img-1.png" alt="" className   ="img-fluid d-block" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className   ="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className   ="text-reset">Branded T-Shirts</a></h5>
                                                                            <span className   ="text-muted">24 Apr 2021</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$29.00</h5>
                                                                    <span className   ="text-muted">Price</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">62</h5>
                                                                    <span className   ="text-muted">Orders</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">510</h5>
                                                                    <span className   ="text-muted">Stock</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$1,798</h5>
                                                                    <span className   ="text-muted">Amount</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className   ="d-flex align-items-center">
                                                                        <div className   ="avatar-sm bg-light rounded p-1 me-2">
                                                                            <img src="assets/images/products/img-2.png" alt="" className   ="img-fluid d-block" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className   ="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className   ="text-reset">Bentwood Chair</a></h5>
                                                                            <span className   ="text-muted">19 Mar 2021</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$85.20</h5>
                                                                    <span className   ="text-muted">Price</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">35</h5>
                                                                    <span className   ="text-muted">Orders</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal"><span className   ="badge bg-danger-subtle text-danger">Out of stock</span> </h5>
                                                                    <span className   ="text-muted">Stock</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$2982</h5>
                                                                    <span className   ="text-muted">Amount</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className   ="d-flex align-items-center">
                                                                        <div className   ="avatar-sm bg-light rounded p-1 me-2">
                                                                            <img src="assets/images/products/img-3.png" alt="" className   ="img-fluid d-block" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className   ="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className   ="text-reset">Borosil Paper Cup</a></h5>
                                                                            <span className   ="text-muted">01 Mar 2021</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$14.00</h5>
                                                                    <span className   ="text-muted">Price</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">80</h5>
                                                                    <span className   ="text-muted">Orders</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">749</h5>
                                                                    <span className   ="text-muted">Stock</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$1120</h5>
                                                                    <span className   ="text-muted">Amount</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className   ="d-flex align-items-center">
                                                                        <div className   ="avatar-sm bg-light rounded p-1 me-2">
                                                                            <img src="assets/images/products/img-4.png" alt="" className   ="img-fluid d-block" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className   ="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className   ="text-reset">One Seater Sofa</a></h5>
                                                                            <span className   ="text-muted">11 Feb 2021</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$127.50</h5>
                                                                    <span className   ="text-muted">Price</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">56</h5>
                                                                    <span className   ="text-muted">Orders</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal"><span className   ="badge bg-danger-subtle text-danger">Out of stock</span></h5>
                                                                    <span className   ="text-muted">Stock</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$7140</h5>
                                                                    <span className   ="text-muted">Amount</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className   ="d-flex align-items-center">
                                                                        <div className   ="avatar-sm bg-light rounded p-1 me-2">
                                                                            <img src="assets/images/products/img-5.png" alt="" className   ="img-fluid d-block" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className   ="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className   ="text-reset">Stillbird Helmet</a></h5>
                                                                            <span className   ="text-muted">17 Jan 2021</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$54</h5>
                                                                    <span className   ="text-muted">Price</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">74</h5>
                                                                    <span className   ="text-muted">Orders</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">805</h5>
                                                                    <span className   ="text-muted">Stock</span>
                                                                </td>
                                                                <td>
                                                                    <h5 className   ="fs-14 my-1 fw-normal">$3996</h5>
                                                                    <span className   ="text-muted">Amount</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className   ="align-items-center mt-4 pt-2 justify-content-between row text-center text-sm-start">
                                                    <div className   ="col-sm">
                                                        <div className   ="text-muted">
                                                            Showing <span className   ="fw-semibold">5</span> of <span className   ="fw-semibold">25</span> Results
                                                        </div>
                                                    </div>
                                                    <div className   ="col-sm-auto  mt-3 mt-sm-0">
                                                        <ul className   ="pagination pagination-separated pagination-sm mb-0 justify-content-center">
                                                            <li className   ="page-item disabled">
                                                                <a href="#" className   ="page-link">←</a>
                                                            </li>
                                                            <li className   ="page-item">
                                                                <a href="#" className   ="page-link">1</a>
                                                            </li>
                                                            <li className   ="page-item active">
                                                                <a href="#" className   ="page-link">2</a>
                                                            </li>
                                                            <li className   ="page-item">
                                                                <a href="#" className   ="page-link">3</a>
                                                            </li>
                                                            <li className   ="page-item">
                                                                <a href="#" className   ="page-link">→</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                   
                                </div> 
        </div>
      </div>
    </div>
  );
};

export default DashHome;
