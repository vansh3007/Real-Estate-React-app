import React from "react";
import "./FinalPage.css"
import { NavLink } from "react-router-dom";

function FinalPage() {
  return (
    <div className="FinalPage">
      <h4>Thank you for listing your property with us,</h4>
      <p>Your listing will be reviewed and will go live within 24 hours.</p>
      <p>
        We will now manage your listing and get in touch with you after finding
        the best suitable tenant as per your preference.
      </p>
      <pre>-Dylan Estates</pre>
      <b></b>
      <div className="buttonContainer">
        <button>Edit Property Listing</button>
        <NavLink to="/Preview">
          <button>Preview Property Listing</button>
        </NavLink>
      </div>
    </div>
  );
}

export default FinalPage;
