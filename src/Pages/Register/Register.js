import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import formImg from "../../images/register.png";
import Footer from "../../Shared/Footer/Footer";
import Menubar from "../../Shared/Menubar/Menubar";

const Register = () => {
  const [regData, setRegData] = useState({});
  const history = useHistory();

  const { user, registerUser, authError, isLoading } = useAuth();

  const handleRegisterSubmit = (e) => {
    if (regData.password1 !== regData.password2) {
      alert("Your password didn't matched, try again!");
      return;
    }
    registerUser(regData.email, regData.password1, regData.userName, history);
    e.preventDefault();
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegData = { ...regData };
    newRegData[field] = value;
    setRegData(newRegData);
  };
  return (
    <>
      <Menubar></Menubar>
      <div className="row container-fluid">
        <div className="col-sm-6">
          <h2 className="text-center mt-5">Register</h2>
          {!isLoading && (
            <form onSubmit={handleRegisterSubmit} className="px-5">
              <div className="form-group mb-2">
                <label htmlFor="exampleInputEmail1">User Name</label>
                <input
                  type="name"
                  name="userName"
                  onBlur={handleOnBlur}
                  className="form-control"
                  id="exampleInputName1"
                  aria-describedby="emailHelp"
                  placeholder="Enter User Name"
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name="password1"
                  onBlur={handleOnBlur}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
                  className="form-control"
                  id="exampleInputPassword2"
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Register
              </button>
              <div className="d-block text-center">
                <Link to="/login">
                  <button
                    type="button"
                    className="text-decoration-none mt-2 btn btn-link fs-5"
                  >
                    Already a user? Please Log In
                  </button>
                </Link>
              </div>
            </form>
          )}
          {isLoading && (
            <div className="text-center">
              <div className="spinner-border text-secondary " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {user?.email && (
            <div className="alert alert-success" role="alert">
              <i className="far fa-check-circle me-2"></i> Your account created
              successfully!
            </div>
          )}
          {authError && (
            <div className="alert alert-danger" role="alert">
              <i className="fas fa-exclamation-triangle me-2"></i> {authError}
            </div>
          )}
        </div>
        <div className="col-sm-6">
          <img className="w-100" src={formImg} alt="" />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Register;
