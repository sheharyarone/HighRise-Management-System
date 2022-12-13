import React, { useState } from "react";
import BillManage from "./BillManage";

function Billing() {
  const [activeTab, setActiveTab] = useState("Parking");

  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="row m-4">
      <div className="col-12 m-4">
        <button>Back to Home</button>
      </div>
      <h1 className="ms-4">Facilities Pricing</h1>
      <div className="col-sm-12 col-lg-5 m-4">
        <div
          className={
            activeTab !== "parking" ? "row text-muted pb-4" : "row pb-4"
          }
          onClick={() => handleClick("parking")}
        >
          <div className="col-sm-1">
            <img
              className="img-fluid"
              src="https://powercode.co.uk/static/media/firstSelected.dea3608e.svg"
              alt=""
            />
          </div>
          <div className="col-sm-8">
            <h3 className={activeTab !== "parking" ? "fw-bolder" : " "}>
              Parking
            </h3>
          </div>
        </div>

        <div
          className={activeTab !== "gym" ? "row text-muted pb-4" : "row pb-4"}
          onClick={() => handleClick("gym")}
        >
          <div className="col-sm-1">
            <img
              className="img-fluid"
              src="https://powercode.co.uk/static/media/firstSelected.dea3608e.svg"
              alt=""
            />
          </div>
          <div className="col-sm-8">
            <h3 className={activeTab !== "gym" ? "fw-bolder" : " "}>Gym</h3>
          </div>
        </div>
        <div
          className={activeTab !== "pool" ? "row text-muted" : "row"}
          onClick={() => handleClick("pool")}
        >
          <div className="col-sm-1">
            <img
              className="img-fluid"
              src="https://powercode.co.uk/static/media/firstSelected.dea3608e.svg"
              alt=""
            />
          </div>
          <div className="col-sm-8">
            <h3 className={activeTab !== "pool" ? "fw-bolder" : " "}>
              Swimming Pool
            </h3>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-lg-6">
        <BillManage facility_name={activeTab} />
      </div>
    </div>
  );
}
export default Billing;
