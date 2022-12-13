import React from "react";
function PriceChange({ facility_name }) {
  return (
    <div>
      <h4>{facility_name} : $5 </h4>
      <form>
        <label for="price" class="form-label text-white">
          New Price
        </label>
        <input
          type="int"
          class="form-control"
          id="price"
          placeholder="Enter updated price"
          name="price"
        />
        <button className="btn btn-primary mt-4" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default PriceChange;
