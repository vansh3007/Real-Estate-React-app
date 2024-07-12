import React, { useState } from "react";
import "./PropertyDetails.css";
import PropertyTypeCom from "./PropertyTypeCom";
import PropertyTypeRes from "./PropertyTypeRes";


function PropertyDetails() {
  const [Res, setRes] = useState(false);
  const [Com, setCom] = useState(false);

  const handleRes = () => {
    setRes(true);
    setCom(false);
  }
  const handleCom = () => {
    setRes(false);
    setCom(true);
  };

  const handleLand = () => {
    setRes(false);
    setCom(false);
  };

const handleBuildArea = (event) => {
  event.target.value = "580 Sq.ft";
  };
  const handleCarpetArea = (event) => {
      event.target.value = "580 Sq.ft";
  };
  const handlePropertyON = (event) => {
    event.target.value = "2";
  };
  const handleTotalFloor = (event) => {
    event.target.value = "5";
  };

  return (
    <div className="PropertyDetails">
      <div className="PropertyFor">
        <label for="PropertyFor">
          <b className="star">* </b>Property for:
        </label>
        <br></br>
        <br></br>
        <form className="PropertyForForm">
          <div className="radiobox">
            <input
              type="radio"
              id="Rent"
              name="PropertyFor"
              className="radio"
            ></input>
            <label for="Rent" className="radioLable">
              Rent
            </label>
          </div>
          <div className="radiobox">
            <input
              type="radio"
              id="Sale"
              name="PropertyFor"
              className="radio"
            ></input>
            <label for="Sale" className="radioLable">
              Sale
            </label>
          </div>
        </form>
      </div>

      <div className="PropertyType">
        <label for="PropertyType">
          <b className="star">* </b>Property type:
        </label>
        <br></br>
        <br></br>
        <form className="PropertyTypeForm">
          <div className="radiobox">
            <input
              type="radio"
              id="Residential"
              name="PropertyType"
              className="radio"
              onClick={handleRes}
            ></input>
            <label for="Residential" className="radioLable">
              Residential
            </label>
          </div>
          <div className="radiobox">
            <input
              type="radio"
              id="Commercial"
              name="PropertyType"
              className="radio"
              onClick={handleCom}
            ></input>
            <label for="Commercial" className="radioLable">
              Commercial
            </label>
          </div>
          <div className="radiobox">
            <input
              type="radio"
              id="Land/Plot"
              name="PropertyType"
              className="radio"
              onClick={handleLand}
            ></input>
            <label for="Land/Plot" className="radioLable">
              Land/Plot
            </label>
          </div>
        </form>
      </div>
      {Com && <PropertyTypeCom />}
      {Res && <PropertyTypeRes />}

      
      <div className="area">
        <div className="BuildupArea">
          <label for="BuildupArea">
            Build up Area:<b className="star">* </b>
          </label>
          <br></br>
          <br></br>
          <input
            readOnly
            type="text"
            id="BuildupArea"
            name="BuildupArea"
            className="areaInput"
            placeholder="0 Sq.ft"
            onClick={handleBuildArea}
          ></input>
        </div>
        <div className="CarpetArea">
          <label for="CarpetArea">
            Carpet Area:<b className="star">* </b>
          </label>
          <br></br>
          <br></br>
          <input
            readOnly
            type="text"
            id="CarpetArea"
            name="CarpetArea"
            className="areaInput"
            placeholder="0 Sq.ft"
            onClick={handleCarpetArea}
          ></input>
        </div>
      </div>

      <div className="floorContanier">
        <div className="floor">
          <div className="PropertyOn">
            <label for="PropertyOn">
              Property on Floor:<b className="star">* </b>
            </label>
            <br></br>
            <br></br>
            <input
              readOnly
              type="text"
              id="PropertyOn"
              name="PropertyOn"
              className="floorInput"
              placeholder="Floor"
              onClick={handlePropertyON}
            ></input>
          </div>
          <div className="TotlaFloor">
            <label for="TotlaFloor">
              Total Floor:<b className="star">* </b>
            </label>
            <br></br>
            <br></br>
            <input
              readOnly
              type="text"
              id="TotlaFloor"
              name="TotlaFloor"
              className="floorInput"
              value="Total Floor"
              onClick={handleTotalFloor}
            ></input>
          </div>
        </div>
        <div className="faceing">
          <label for="faceing">
            Property Facing:<b className="star">* </b>
          </label>
          <br></br>
          <br></br>
          <select
            readOnly
            type="text"
            id="faceing"
            name="faceing"
            className="areaInput"
          >
            <option disabled selected>Select</option>
            <option>North</option>
            <option>South</option>
            <option>East</option>
            <option>West</option>
            <option>North-East</option>
          </select>
        </div>
      </div>

      <div className="propertyAge">
        <label for="propertyAge">
          Property Age <b className="star">* </b>
        </label>
        <br></br>
        <br></br>
        <form className="propertyAgeForm">
          <div class="donate-now">
            <input
              type="radio"
              id="a25"
              name="propertyAge"
              className="propertyAgeInput"
            />
            <label for="a25" id="a25">
              Less Than 1 Year
            </label>
            <input
              type="radio"
              id="a50"
              name="propertyAge"
              className="propertyAgeInput"
            />
            <label for="a50" id="a50">
              1-3 Years
            </label>
            <input
              type="radio"
              id="a75"
              name="propertyAge"
              className="propertyAgeInput"
            />
            <label for="a75" id="a75">
              3-5 Years
            </label>
            <input
              type="radio"
              id="a100"
              name="propertyAge"
              className="propertyAgeInput"
            />
            <label for="a100" id="a100">
              5-10 Years
            </label>
            <input
              type="radio"
              id="other"
              name="propertyAge"
              className="propertyAgeInput"
            />
            <label for="other" id="other">
              More Than 10 Years
            </label>
          </div>
        </form>
      </div>

      <div className="BhkType">
        <label for="BhkType">
          BHK Type <b className="star">* </b>
        </label>
        <br></br>
        <br></br>
        <form className="BhkTypeForm">
          <div class="donate-now">
            <input
              type="radio"
              id="1 RK"
              name="BhkType"
              className="BhkTypeInput"
            />
            <label for="1 RK" id="1 RK">
              1 RK
            </label>
            <input
              type="radio"
              id="1 BHK"
              name="BhkType"
              className="BhkTypeInput"
            />
            <label for="1 BHK" id="1 BHK">
              1 BHK
            </label>
            <input
              type="radio"
              id="2 BHK"
              name="BhkType"
              className="BhkTypeInput"
            />
            <label for="2 BHK" id="2 BHK">
              2 BHK
            </label>
            <input
              type="radio"
              id="3 BHK"
              name="BhkType"
              className="BhkTypeInput"
            />
            <label for="3 BHK" id="3 BHK">
              3 BHK
            </label>
            <input
              type="radio"
              id="a100"
              name="BhkType"
              className="BhkTypeInput"
            />
            <label for="4 BHK" id="4 BHK">
              4 BHK
            </label>
            <input
              type="radio"
              id="5+ BHK"
              name="BhkType"
              className="BhkTypeInput"
            />
            <label for="5+ BHK" id="5+ BHK">
              5+ BHK
            </label>
          </div>
        </form>
      </div>

      <div className="Bathroom">
        <label for="Bathroom">
          Bathroom/Toilets <b className="star">* </b>
        </label>
        <br></br>
        <br></br>
        <form className="BathroomForm">
          <div class="donate-now">
            <input
              type="radio"
              id="1 Bath"
              name="Bathroom"
              className="BathroomInput"
            />
            <label for="1 Bath" id="1 Bath">
              1
            </label>
            <input
              type="radio"
              id="2 Bath"
              name="Bathroom"
              className="BathroomInput"
            />
            <label for="2 Bath" id="2 Bath">
              2
            </label>
            <input
              type="radio"
              id="3 Bath"
              name="Bathroom"
              className="BathroomInput"
            />
            <label for="3 Bath" id="3 Bath">
              3
            </label>
            <input
              type="radio"
              id="a100"
              name="Bathroom"
              className="BathroomInput"
            />
            <label for="4 Bath" id="4 Bath">
              4
            </label>
            <input
              type="radio"
              id="5 Bath"
              name="Bathroom"
              className="BathroomInput"
            />
            <label for="5 Bath" id="5 Bath">
              5
            </label>
            <input
              type="radio"
              id="6 Bath"
              name="Bathroom"
              className="BathroomInput"
            />
            <label for="6 Bath" id="6 Bath">
              6+
            </label>
          </div>
        </form>
      </div>

      <div className="Balcony">
        <label for="Balcony">
          Balcony<b className="star">* </b>
        </label>
        <br></br>
        <br></br>
        <form className="BalconyForm">
          <div class="donate-now">
            <input
              type="radio"
              id="0 Balcony"
              name="Balcony"
              className="BalconyInput"
            />
            <label for="0 Balcony" id="0 Balcony">
              0
            </label>
            <input
              type="radio"
              id="1 Balcony"
              name="Balcony"
              className="BalconyInput"
            />
            <label for="1 Balcony" id="1 Balcony">
              1
            </label>
            <input
              type="radio"
              id="2 Balcony"
              name="Balcony"
              className="BalconyInput"
            />
            <label for="2 Balcony" id="2 Balcony">
              2
            </label>
            <input
              type="radio"
              id="3 Balcony"
              name="Balcony"
              className="BalconyInput"
            />
            <label for="3 Balcony" id="3 Balcony">
              3
            </label>
            <input
              type="radio"
              id="4+ Balcony"
              name="Balcony"
              className="BalconyInput"
            />
            <label for="4+ Balcony" id="4+ Balcony">
              4+
            </label>
          </div>
        </form>
      </div>

      <div className="Tenant">
        <label for="Tenant">
          Tenant Preference <b className="star">* </b>
        </label>
        <br></br>
        <br></br>
        <form className="TenantForm">
          <div class="donate-now">
            <input
              type="radio"
              id="Any"
              name="Tenant"
              className="TenantInput"
            />
            <label for="Any" id="Any">
              Any
            </label>
            <input
              type="radio"
              id="Family"
              name="Tenant"
              className="TenantInput"
            />
            <label for="Family" id="Family">
              Family
            </label>
            <input
              type="radio"
              id="Bacholor(Man)"
              name="Tenant"
              className="TenantInput"
            />
            <label for="Bacholor(Man)" id="Bacholor(Man)">
              Bacholor(Man)
            </label>
            <input
              type="radio"
              id="Bacholor(Women)"
              name="Tenant"
              className="TenantInput"
            />
            <label for="Bacholor(Women)" id="Bacholor(Women)">
              Bacholor(Women)
            </label>
          </div>
        </form>
      </div>

      <div className="Availability">
        <label for="Availability">
          Availability <b className="star">* </b>
        </label>
        <br></br>
        <br></br>
        <form className="AvailabilityForm">
          <div class="donate-now">
            <input
              type="radio"
              id="Immediate"
              name="Availability"
              className="AvailabilityInput"
            />
            <label for="Immediate" id="Immediate">
              Immediate
            </label>
            <input
              type="radio"
              id="15 Days"
              name="Availability"
              className="AvailabilityInput"
            />
            <label for="15 Days" id="15 Days">
              Within 15 Days
            </label>
            <input
              type="radio"
              id="1 Month"
              name="Availability"
              className="AvailabilityInput"
            />
            <label for="1 Month" id="1 Month">
              Within 1 Month
            </label>
            <input
              type="radio"
              id="2 Month"
              name="Availability"
              className="AvailabilityInput"
            />
            <label for="2 Month" id="2 Month">
              Within 2 Month
            </label>
          </div>
        </form>
      </div>

      <div className="PropertyDes">
        <label for="PropertyDes">
          Property Description <b className="star">*</b>
        </label>
        <br></br>
        <br></br>
        <input
          type="text"
          id="PropertyDes"
          value="Add a description for your property to attract the best tenant"
        ></input>
      </div>
    </div>
  );
}

export default PropertyDetails;
