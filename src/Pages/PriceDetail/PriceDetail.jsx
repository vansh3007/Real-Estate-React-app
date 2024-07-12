import React from 'react'
import "./PriceDetail.css"
function PriceDetail() {
  const handleBuildRent = (event) => {
    event.target.value = "Rs 20000 /Month";
  };
  const handleBuildSecurity = (event) => {
    event.target.value = "Rs 20000 /Month";
  };
  const handleBuildMaintance = (event) => {
    event.target.value = "Rs 2000";
  };
  const handleBuildMonthly = (event) => {
    event.target.value = "Monthly";
  };
  return (
    <div className="PriceDetail">
      <div className="area">
        <div className="Rent">
          <label for="Rent">
            Rent<b className="star">* </b>
          </label>
          <br></br>
          <br></br>
          <input
            readOnly
            type="text"
            id="Rent"
            name="Rent"
            className="areaInput"
            placeholder="Enter Rent"
            onClick={handleBuildRent}
          ></input>
        </div>
        <div className="Security">
          <label for="Security">
            Security <b className="star">* </b>
          </label>
          <br></br>
          <br></br>
          <input
            readOnly
            type="text"
            id="Security"
            name="Security"
            className="areaInput"
            placeholder="Enter Security Deposit"
            onClick={handleBuildSecurity}
          ></input>
        </div>
      </div>
      <div className="area">
        <div className="Maintance">
          <label for="Maintance">
            Maintance<b className="star">* </b>
          </label>
          <br></br>
          <br></br>
          <select
            readOnly
            type="text"
            id="Maintance"
            name="Maintance"
            className="areaInput"
          >
            <option value="Maintance" disabled selected>
              Maintance
            </option>
            <option>Included in Rent</option>
            <option>Extra Maintance</option>
          </select>
        </div>
        <div className=" Maintance-Cost">
          <label for="Maintance-Cost">
            Maintance<b className="star">* </b>
          </label>
          <br></br>
          <br></br>
          <div className="maintanceInput">
            <input
              readOnly
              type="text"
              id="Maintance-Cost"
              name="Maintance-Cost"
              className="MaintanceCostInput"
              placeholder="Enter Maintance Cost"
              onClick={handleBuildMaintance}
            ></input>
            <input
              readOnly
              type="text"
              id="Maintance-Cost"
              name="Maintance-Cost"
              className="MaintanceCostInput"
              placeholder="Monthly"
            ></input>
          </div>
        </div>
      </div>
      <div className="PriceAdditional">
        <label for="PriceAdditional">
          Additional Pricing details to convey to agent ?
        </label>
        <br></br>
        <br></br>
        <input
          readOnly
          type="text"
          id="PriceAdditional"
          name="PriceAdditional"
          className="areaInput additionalInput"
          placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us. "
          onClick={handleBuildMonthly}
        ></input>
      </div>
    </div>
  );
}

export default PriceDetail
