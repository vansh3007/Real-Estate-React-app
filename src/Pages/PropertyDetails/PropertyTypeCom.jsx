import React from 'react'

function PropertyTypeCom() {
  return (
    <>
      <div className="CommercialExtend">
        <div className="donate-now">
          <input
            type="radio"
            id="Office"
            name="CommercialExtend"
            className="CommercialExtendInput"
          />
          <label for="Office" id="Office">
            Office Working
          </label>
          <input
            type="radio"
            id="Co Working"
            name="CommercialExtend"
            className="CommercialExtendInput"
          />
          <label for="Co Working" id="Co Working">
            Co Working
          </label>
          <input
            type="radio"
            id="Restaurant"
            name="CommercialExtend"
            className="CommercialExtendInput"
          />
          <label for="Restaurant" id="Restaurant">
            Restaurant/Cafe
          </label>
          <br></br>
          <br></br>
          <input
            type="radio"
            id="Shop"
            name="CommercialExtend"
            className="CommercialExtendInput"
          />
          <label for="Shop" id="Shop">
            Shop/Showroom
          </label>

          <input
            type="radio"
            id="Industrial Building"
            name="CommercialExtend"
            className="CommercialExtendInput"
          />
          <label for="Industrial Building" id="Industrial Building">
            Industrial Building
          </label>
          <input
            type="radio"
            id="Industrial Shed"
            name="CommercialExtend"
            className="CommercialExtendInput"
          />
          <label for="Industrial Shed" id="Industrial Shed">
            Industrial Shed
          </label>
          <br></br>
          <br></br>
          <input
            type="radio"
            id="WareHouse"
            name="CommercialExtend"
            className="CommercialExtendInput"
          />
          <label for="WareHouse" id="WareHouse">
            WareHouse/GoDown
          </label>
        </div>
      </div>
    </>
  );
}

export default PropertyTypeCom
