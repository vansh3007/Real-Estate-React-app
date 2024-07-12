import React, { useState } from 'react'
import "./PropertyLocation.css"
import Location from "../../assets/location.png"
import Pointer from "../../assets/pointer.svg"
function PropertyLocation() {
    
    const handleBuilding = (event) => {
      event.target.value = "Gokul Village Chs 2";
    }

    const handleLocation = (event) => {
        event.target.value = "Shanti Park,Miraroad East"; 
    }

    const handleLandmark = (event) => {
        event.target.value = "Near Railway Station";
    }

    const handleCity = (event) => {
        event.target.value = "Mumbai,Maharashtra";
    }

    const handleMap = (event) => {
        event.target.value = "Gokul Village chs 2, shanti park, miraroad east";
        setPoint(true);

    };
    const [point, setPoint] = useState(false);

    return (
      <div className="PropertyLocation">
        <div className="area">
          <div className="Building">
            <label for="Building">
              Building/Society Name<b className="star">* </b>
            </label>
            <br></br>
            <br></br>
            <input
              readOnly
              type="text"
              id="Building"
              name="Building"
              className="areaInput"
              placeholder="Enter Apartment Name"
              onClick={handleBuilding}
            ></input>
          </div>
          <div className="Location">
            <label for="Location">
              Location/Area <b className="star">* </b>
            </label>
            <br></br>
            <br></br>
            <input
              readOnly
              type="text"
              id="Location"
              name="Location"
              className="areaInput"
              placeholder="Eg: sheetal nagar"
              onClick={handleLocation}
            ></input>
          </div>
        </div>

        <div className="area">
          <div className="Landmark">
            <label for="Landmark">
              Landmark/Street Name<b className="star">* </b>
            </label>
            <br></br>
            <br></br>
            <input
              readOnly
              type="text"
              id="Landmark"
              name="Landmark"
              className="areaInput"
              placeholder="Prominent Landmark"
              onClick={handleLandmark}
            ></input>
          </div>
          <div className="City">
            <label for="City">
              City<b className="star">* </b>
            </label>
            <br></br>
            <br></br>
            <input
              readOnly
              type="text"
              id="City"
              name="City"
              className="areaInput"
              placeholder="Enter City Name"
              onClick={handleCity}
            ></input>
          </div>
        </div>

        <div className="map">
          <label>Map Location on Map</label>
          <br></br>
          <br></br>
          <div className="mapbox">
            <div className="inputBox">
              <img src={Location}></img>
              <input
                value="Search your society or nearest landmark"
                readOnly
                onClick={handleMap}
              ></input>
                    </div>
                    {point && (
            <div className="pointerContainer">
              <img src={Pointer}></img>
                        </div>
                        )}
          </div>
        </div>
      </div>
    );
}

export default PropertyLocation
