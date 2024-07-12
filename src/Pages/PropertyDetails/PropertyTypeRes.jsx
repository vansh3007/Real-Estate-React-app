import React from 'react'

function PropertyTypeRes() {
  return (
    <>
      <div className="ResidentialExtend">
        <div class="donate-now">
          <input
            type="radio"
            id="Flat"
            name="ResidentialExtend"
            className="ResidentialExtendInput"
          />
          <label for="Flat" id="Flat">
            Flat/Apartment
          </label>
          <input
            type="radio"
            id="Villa"
            name="ResidentialExtend"
            className="ResidentialExtendInput"
          />
          <label for="Villa" id="Villa">
            House/Villa
          </label>
        </div>
      </div>
    </>
  );
}

export default PropertyTypeRes
