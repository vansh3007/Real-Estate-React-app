import React from 'react'
import "./Seller.css"
import PropertyPhoto from '../PropertyPhoto/PropertyPhoto';
import { NavLink } from 'react-router-dom';
function Seller() {
  return (
    <>
      <div className="Seller">
        <div className="SellerHead">
          <div className="column borderBottom">
            <p>
              Property<br></br>Details
            </p>
          </div>
          <div className="column borderBottom">
            <p>
              Location<br></br>Details
            </p>
          </div>
          <div className="column borderBottom">
            <p>
              Features & <br></br>Amenities
            </p>
          </div>
          <div className="column borderBottom">
            <p>Price Details</p>
          </div>
          <div className="column borderBottom">
            <p>
              Property<br></br>Images
            </p>
          </div>
        </div>
        <div className="SellerTextContainer">
          <PropertyPhoto />
        </div>
        ;
        <div className="SellerFooter">
          <p>Need Help? Call 9999999999</p>
          <button>Next</button>
        </div>
      </div>
      <div className="SellerOverflowOuter">
        <div className="SellerOverflow">
          <div className="SellerOverFlowContainer">
            <p>POST PROPERTY ON DYLAN ESTATE?</p>
            <NavLink to="/FinalPage">
              <button>Continue</button>
            </NavLink>
            <pre>
              By continuing you agree to our
              <b> Terms and Conditions & Privacy Policy</b>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seller
