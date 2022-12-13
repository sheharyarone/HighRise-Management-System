import React from "react";
import "./HomeAdmin.css";
function HomeAdmin() {
  return (
    <div className="py-5 bg-homeResident">
      <h1 className="pt-5 pb-lg-5 pb-md-3 pb-sm-2 mx-5 text-center text-secondary">
        Welcome, Admin
      </h1>
      <div className="row mt-5">
        <button className="col-xl-2 col-md-3 col-sm-4 bg-secondary m-5 rounded-5">
          <div className="row">
            <div className="col-4">
              <img
                className="img-fluid d-inline-block m-2"
                src={require("./Assets/cafe.png")}
                alt=""
              />
            </div>
            <div className="col-6 mt-lg-4 mt-md-3">
              <h4 className="fw-bold">Appartment Management</h4>
            </div>
          </div>
        </button>
        <button className="col-xl-2 col-md-3 col-sm-4 bg-secondary m-5 rounded-5">
          <div className="row">
            <div className="col-4">
              <img
                className="img-fluid d-inline-block m-2"
                src={require("./Assets/cafe.png")}
                alt=""
              />
            </div>
            <div className="col-6 mt-lg-4 mt-md-3">
              <h4 className="fw-bold">Cafe Menu</h4>
            </div>
          </div>
        </button>
        <button className="col-xl-2 col-md-3 col-sm-4 bg-secondary m-5 rounded-5">
          <div className="row">
            <div className="col-4">
              <img
                className="img-fluid d-inline-block m-2"
                src={require("./Assets/cafe.png")}
                alt=""
              />
            </div>
            <div className="col-6 mt-lg-4 mt-md-3">
              <h4 className="fw-bold">Billing</h4>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default HomeAdmin;
