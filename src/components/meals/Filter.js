import React from "react";
import "../meals/Filter.css";

const Filter = () => {
  return (
    <div>
      <div className="filter">
        <div className="">
          <label>
            <i class="fa fa-search" aria-hidden="true"></i>
          </label>
          <input type="text"></input>
        </div>
        <div className="">
          <label>
            category<i class="fa fa-filter" aria-hidden="true"></i>
          </label>
          <select value="">
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="1970">1970</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
