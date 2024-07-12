import React from 'react'
import "./Seller.css"
import PropertyDetails from '../PropertyDetails/PropertyDetails';
import { NavLink } from 'react-router-dom';
function Seller() {
  return (
    <>
      <div className="Seller">
        <div className="SellerHead">
          <div className="column">
            <p>
              Property<br></br>Details
            </p>
          </div>
          <div className="column">
            <p>
              Location<br></br>Details
            </p>
          </div>
          <div className="column">
            <p>
              Features & <br></br>Amenities
            </p>
          </div>
          <div className="column">
            <p>Price Details</p>
          </div>
          <div className="column">
            <p>
              Property<br></br>Images
            </p>
          </div>
        </div>
        <div className="SellerTextContainer">
          <PropertyDetails />
        </div>
        ;
        <div className="SellerFooter">
          <p>Need Help? Call 9999999999</p>
          <NavLink to="/SellerPropertyLocation">
            <button>Next</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Seller
