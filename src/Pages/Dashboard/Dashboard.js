import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Pay from "./UserComponents/Pay";
import MyOrders from "./UserComponents/MyOrders";
import AddReview from "./UserComponents/AddReview";
import MakeAdmin from "./AdminComponents/MakeAdmin";
import ManageOrders from "./AdminComponents/ManageOrders";
import ManageProducts from "./AdminComponents/ManageProducts";
import AddProduct from "./AdminComponents/AddProduct";

const Dashboard = () => {
  const { user, logout, admin } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <>
      <div className="row g-0">
        <div className="col-md-12 bg-primary text-white text-center p-3">
          <h1>
            # {user.displayName} 's{" "}
            <span className="text-warning">Dashboard</span>
          </h1>
        </div>
        <div style={{ height: "150vh" }} className="col-md-2 p-4 bg-success">
          <Link to="/explore">
            <button className="btn btn-link fs-6 text-decoration-none text-white">
              <i class="fas fa-home"></i> Explore
            </button>
          </Link>
          {/* Admins Options */}
          {admin ? (
            <>
              <Link to={`${url}/makeadmin`}>
                <button className="btn btn-link fs-6 text-decoration-none text-white">
                  <i class="fas fa-user-cog"></i> Make Admin
                </button>
              </Link>
              <Link to={`${url}/manageorders`}>
                <button className="btn btn-link fs-6 text-decoration-none text-white">
                  <i class="far fa-list-alt"></i> Manage Orders
                </button>
              </Link>
              <Link to={`${url}/manageproducts`}>
                <button className="btn btn-link fs-6 text-decoration-none text-white">
                  <i class="fas fa-list-ol"></i> Manage Products
                </button>
              </Link>
              <Link to={`${url}/addproduct`}>
                <button className="btn btn-link fs-6 text-decoration-none text-white">
                  <i class="far fa-calendar-plus"></i> Add Product
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to={`${url}/pay`}>
                <button className="btn btn-link fs-6 text-decoration-none text-white">
                  <i class="fas fa-shopping-cart"></i> Payment
                </button>
              </Link>
              <Link to={`${url}/myorders`}>
                <button className="btn btn-link fs-6 text-decoration-none text-white">
                  <i class="fas fa-list-ol"></i> My Orders
                </button>
              </Link>
              <Link to={`${url}/review`}>
                <button className="btn btn-link fs-6 text-decoration-none text-white">
                  <i class="far fa-comment-alt"></i> Review
                </button>
              </Link>
            </>
          )}
          <button
            onClick={logout}
            className="btn btn-link fs-6 text-decoration-none text-white"
          >
            <i class="fas fa-sign-out-alt"></i> Log Out
          </button>
        </div>
        <div className="col-md-10 container-fluid">
          <Switch>
            <Route exact path={path}>
              <h2 className="mt-4 text-center">
                <i class="far fa-calendar-check"></i> Welcome to your{" "}
                <span className="text-success">Dashboard</span>
              </h2>
              <h5 className="pt-3 text-center">
                Here you will find all the activities of you in Falcons Eye
                website. <br /> We certainly managed a detailed interface to
                maximize your comforts.
              </h5>
            </Route>
            <Route path={`${path}/pay`}>
              <Pay></Pay>
            </Route>
            <Route path={`${path}/myorders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/review`}>
              <AddReview></AddReview>
            </Route>
            <Route path={`${path}/makeadmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/manageorders`}>
              <ManageOrders></ManageOrders>
            </Route>
            <Route path={`${path}/manageproducts`}>
              <ManageProducts></ManageProducts>
            </Route>
            <Route path={`${path}/addproduct`}>
              <AddProduct></AddProduct>
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
