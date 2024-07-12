import React from "react";
import "./PropertyFeature.css";

import img1 from "../../assets/img/1.svg";
import img2 from "../../assets/img/2.svg";
import img3 from "../../assets/img/3.svg";
import img4 from "../../assets/img/4.svg";
import img5 from "../../assets/img/5.svg";
import img6 from "../../assets/img/6.svg";
import img7 from "../../assets/img/7.svg";
import img8 from "../../assets/img/8.svg";
import img9 from "../../assets/img/9.svg";
import img10 from "../../assets/img/10.svg";
import img11 from "../../assets/img/11.svg";
import img12 from "../../assets/img/12.svg";
import img13 from "../../assets/img/13.svg";
import img14 from "../../assets/img/14.svg";
import img15 from "../../assets/img/15.svg";
import img16 from "../../assets/img/16.svg";
import img17 from "../../assets/img/17.svg";
import img18 from "../../assets/img/18.svg";
import img19 from "../../assets/img/19.svg";
import img20 from "../../assets/img/20.svg";

function PropertyFeature() {
  return (
    <div className="PropertyFeature">
      <div className="general">
        <label>General Features</label>
      </div>
      <div className="NonVeg">
        <div className="NonVeg">
          <label for="NonVeg">
            <b className="star">* </b>Non-Veg
          </label>
          <br></br>
          <br></br>
          <form className="NonVegForm">
            <div className="radiobox">
              <input
                type="radio"
                id="Allowed"
                name="NonVeg"
                className="radio"
              ></input>
              <label for="Allowed" className="radioLable">
                Allowed
              </label>
            </div>
            <div className="radiobox">
              <input
                type="radio"
                id="Not Allowed"
                name="NonVeg"
                className="radio"
              ></input>
              <label for="Not Allowed" className="radioLable">
                Not Allowed
              </label>
            </div>
          </form>
        </div>
      </div>

      <div className="Pet">
        <div className="Pet">
          <label for="Pet">
            <b className="star">* </b>Pet Allowed
          </label>
          <br></br>
          <br></br>
          <form className="PetForm">
            <div className="radiobox">
              <input type="radio" id="Yes" name="Pet" className="radio"></input>
              <label for="Yes" className="radioLable">
                Yes
              </label>
            </div>
            <div className="radiobox">
              <input type="radio" id="No" name="Pet" className="radio"></input>
              <label for="No" className="radioLable">
                No
              </label>
            </div>
          </form>
        </div>
      </div>

      <div className="Electricity">
        <div className="Electricity">
          <label for="Electricity">
            <b className="star">* </b>Electricity
          </label>
          <br></br>
          <br></br>
          <form className="ElectricityForm">
            <div className="radiobox">
              <input
                type="radio"
                id="No Powercut"
                name="Electricity"
                className="radio"
              ></input>
              <label for="No Powercut" className="radioLable">
                Rare/No Powercut
              </label>
            </div>
            <div className="radiobox">
              <input
                type="radio"
                id="Frequent Powercut"
                name="Electricity"
                className="radio"
              ></input>
              <label for="Frequent Powercut" className="radioLable">
                Frequent Powercut
              </label>
            </div>
          </form>
        </div>
      </div>

      <div className="Water">
        <div className="Water">
          <label for="Water">
            <b className="star">* </b>Water Supply
          </label>
          <br></br>
          <br></br>
          <form className="WaterForm">
            <div className="radiobox">
              <input
                type="radio"
                id="BMC"
                name="Water"
                className="radio"
              ></input>
              <label for="BMC" className="radioLable">
                Municipal Corporation<br></br> (BMC)
              </label>
            </div>
            <div className="radiobox">
              <input
                type="radio"
                id="Borewell"
                name="Water"
                className="radio"
              ></input>
              <label for="Borewell" className="radioLable">
                Borewell
              </label>
            </div>
            <div className="radiobox">
              <input
                type="radio"
                id="Both"
                name="Water"
                className="radio"
              ></input>
              <label for="Both" className="radioLable">
                Both
              </label>
            </div>
          </form>
        </div>
      </div>

      <div className="line">
        <hr></hr>
      </div>

      <div className="furnituere">
        <label for="furnituere">
          <b className="star">* </b>Furnituere
        </label>
        <br></br>
        <br></br>
        <form className="furnituereForm">
          <div className="radiobox">
            <input
              type="checkbox"
              id="Full Furnished"
              name="furnituere"
              className="radio"
            ></input>
            <label for="Full Furnished" className="radioLable">
              Full Furnished
            </label>
          </div>
          <div className="radiobox">
            <input
              type="checkbox"
              id="Semi Furnished"
              name="furnituere"
              className="radio"
            ></input>
            <label for="Semi Furnished" className="radioLable">
              Semi Furnished
            </label>
          </div>
          <div className="radiobox">
            <input
              type="checkbox"
              id="Unfurnished"
              name="furnituere"
              className="radio"
            ></input>
            <label for="Unfurnished" className="radioLable">
              Unfurnished
            </label>
          </div>
        </form>
      </div>

      <div className="line">
        <hr></hr>
      </div>

      <div className="Additional">
        <label for="Additional">Additional Features</label>
        <br></br>
        <br></br>
        <form className="AdditionalForm">
          <div className="furnituereForm">
            <div className="radiobox">
              <input
                type="checkbox"
                id="Air Conditioner"
                name="Additional"
                className="radio"
              ></input>
              <label for="Air Conditioner" className="radioLable">
                Air Conditioner
              </label>
            </div>
            <div className="radiobox">
              <input
                type="checkbox"
                id="Ceiling Fan"
                name="Additional"
                className="radio"
              ></input>
              <label for="Ceiling Fan" className="radioLable">
                Ceiling Fan
              </label>
            </div>
            <div className="radiobox">
              <input
                type="checkbox"
                id="Refrigerator"
                name="Additional"
                className="radio"
              ></input>
              <label for="Refrigerator" className="radioLable">
                Refrigerator
              </label>
            </div>
          </div>
          <br></br>
          <div className="furnituereForm">
            <div className="radiobox">
              <input
                type="checkbox"
                id="Washing Machine"
                name="Additional"
                className="radio"
              ></input>
              <label for="Washing Machine" className="radioLable">
                Washing Machine
              </label>
            </div>
            <div className="radiobox">
              <input
                type="checkbox"
                id="Microwave"
                name="Additional"
                className="radio"
              ></input>
              <label for="Microwave" className="radioLable">
                Microwave
              </label>
            </div>
            <div className="radiobox">
              <input
                type="checkbox"
                id="Oven"
                name="Additional"
                className="radio"
              ></input>
              <label for="Oven" className="radioLable">
                Oven
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className="line">
        <hr></hr>
      </div>

      <div className="furnituere">
        <label for="furnituere">Tiles</label>
        <br></br>
        <br></br>
        <form className="furnituereForm">
          <div className="radiobox">
            <input
              type="checkbox"
              id="Normal White Tiles"
              name="furnituere"
              className="radio"
            ></input>
            <label for="Normal White Tiles" className="radioLable">
              Normal White Tiles
            </label>
          </div>
          <div className="radiobox">
            <input
              type="checkbox"
              id="Marble"
              name="furnituere"
              className="radio"
            ></input>
            <label for="Marble" className="radioLable">
              Marble
            </label>
          </div>
          <div className="radiobox">
            <input
              type="checkbox"
              id="Vitrified Tiles"
              name="furnituere"
              className="radio"
            ></input>
            <label for="Vitrified Tiles" className="radioLable">
              Vitrified Tiles
            </label>
          </div>
        </form>
      </div>

      <div className="line">
        <hr></hr>
      </div>

      <div className="furnituere">
        <label for="furnituere">Safety</label>
        <br></br>
        <br></br>
        <form className="furnituereForm">
          <div className="radiobox">
            <input
              type="checkbox"
              id="24/7"
              name="furnituere"
              className="radio"
            ></input>
            <label for="24/7" className="radioLable">
              24/7 Security personnel<br></br>(Gate Security)
            </label>
          </div>
          <div className="radiobox">
            <input
              type="checkbox"
              id="CCTV"
              name="furnituere"
              className="radio"
            ></input>
            <label for="CCTV" className="radioLable">
              Security System - CCTV
            </label>
          </div>
        </form>
      </div>

      <div className="line">
        <hr></hr>
      </div>

      <div className="society">
        <label for="society">Society</label>
        <br></br>
        <br></br>
        <br></br>
        <form className="societyForm">
          <div className="SocietyFromBox">
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img1} alt="society"></img>
                  <p>24/7 Security</p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img1"
                name="society"
                className="radio"
              ></input>
            </div>
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img2} alt="society"></img>
                  <p>CCTV Camera</p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img2"
                name="society"
                className="radio"
              ></input>
            </div>
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img3} alt="society"></img>
                  <p>Lift</p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img3"
                name="society"
                className="radio"
              ></input>
            </div>
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img4} alt="society"></img>
                  <p>Reserved Parking</p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img4"
                name="society"
                className="radio"
              ></input>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="SocietyFromBox">
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img5} alt="society"></img>
                  <p>Regular water supply</p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img5"
                name="society"
                className="radio"
              ></input>
            </div>
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img6} alt="society"></img>
                  <p>Power Back up-Partial </p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img6"
                name="society"
                className="radio"
              ></input>
            </div>
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img7} alt="society"></img>
                  <p>Power Back up-Full </p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img7"
                name="society"
                className="radio"
              ></input>
            </div>
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img8} alt="society"></img>
                  <p>Maintenance staff</p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img8"
                name="society"
                className="radio"
              ></input>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="SocietyFromBox">
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img9} alt="society"></img>
                  <p>Garden/ Park</p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img9"
                name="society"
                className="radio"
              ></input>
            </div>
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img10} alt="society"></img>
                  <p>Kids Play area</p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img10"
                name="society"
                className="radio"
              ></input>
            </div>
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img11} alt="society"></img>
                  <p>Sport</p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img11"
                name="society"
                className="radio"
              ></input>
            </div>
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img12} alt="society"></img>
                  <p>Property Gym</p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img12"
                name="society"
                className="radio"
              ></input>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="SocietyFromBox">
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img13} alt="society"></img>
                  <p>Community Hall</p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img13"
                name="society"
                className="radio"
              ></input>
            </div>
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img14} alt="society"></img>
                  <p>Shopping center</p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img14"
                name="society"
                className="radio"
              ></input>
            </div>
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img15} alt="society"></img>
                  <p>Club House</p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img15"
                name="society"
                className="radio"
              ></input>
            </div>
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img16} alt="society"></img>
                  <p>Swimming pool</p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img16"
                name="society"
                className="radio"
              ></input>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="SocietyFromBox">
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img17} alt="society"></img>
                  <p>Intercom</p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img17"
                name="society"
                className="radio"
              ></input>
            </div>
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img18} alt="society"></img>
                  <p>Fire Safety</p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img18"
                name="society"
                className="radio"
              ></input>
            </div>
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img19} alt="society"></img>
                  <p>Club House</p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img19"
                name="society"
                className="radio"
              ></input>
            </div>
            <div className="checkbox">
              <label>
                <div className="imgConatiner">
                  <img src={img20} alt="society"></img>
                  <p>Swimming pool</p>
                </div>
              </label>
              <input
                type="checkbox"
                id="img20"
                name="society"
                className="radio"
              ></input>
            </div>
          </div>
        </form>
      </div>

      <div className="line">
        <hr></hr>
      </div>
    </div>
  );
}

export default PropertyFeature;
