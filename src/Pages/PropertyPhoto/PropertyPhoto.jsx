import React from 'react'
import "./PropertyPhoto.css"
function PropertyPhoto() {
  return (
    <div className="PropertyPhoto">
      <pre>Add Photos / videos to attract more tenants! </pre>
      <p>
        Add Photos of living room, bedroom, bathroom, floor, doors, kitchen,
        balcony, location map, neighborhood, etc
      </p>

      <div className="cam">
        <div className="camContainer">
          <i className="fa-solid fa-camera"></i>
          <br></br>
          <button>+ Add Photo Now </button>
        </div>
      </div>
      <pre>OR</pre>
      <pre>
        We can upload them for you! You can email the pictures and videos to us
        at Dylanestate.com
      </pre>
      <div className="format">
        <p >Acccepted format are .jpg,.gif,.bmp and .png</p>
        <p>
          Maximuum size allowed is 20 MB. Minimum dimension allowed 600*400
          Pixel
        </p>
      </div>
    </div>
  );
}

export default PropertyPhoto
