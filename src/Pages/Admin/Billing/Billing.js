import React from "react";

function Billing() {
  return (
    <div>
      <h1 className="text-center mt-5">Billing</h1>
      <form action="">
        <label className="form-label">Enter the bill id : </label>
        <input placeholder="bill_id" type="int" />
        <label className="form-label">Enter the cnice of owner : </label>
        <input placeholder="cnic" type="int" />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Billing;
