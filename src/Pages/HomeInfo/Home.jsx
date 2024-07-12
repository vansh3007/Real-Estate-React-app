import React, { useState } from 'react'
import "./Home.css"
import Check from "../../assets/check.png"
import InfoWindow from '../InfoWindow/InfoWindow';
import OtpWindow from '../OtpWindow/OtpWindow';
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div class="Home">
      <div class="heroSectionText">
        <h3 class="heroSectionText1">Sell or Rent your Property For Free</h3>
        <p class="heroSectionText2">
          Whether you're ready to sell or looking for answers, we'll guide you
          with data and expertise specific to your needs.
        </p>
      </div>

      <div class="frameSection">
        <div class="frameSectionleft">
          <p class="frameSectionleftheading">
            Upload your property in 4 simple steps
          </p>
          <div class="frameSectionleftText">
            <img src={Check} alt="check"></img>
            <p>
              Add your properties<b> Basic Details</b>
            </p>
          </div>
          <div class="frameSectionleftText">
            <img src={Check} alt="check"></img>
            <p>
              Add property<b> Location</b>
            </p>
          </div>
          <div class="frameSectionleftText">
            <img src={Check} alt="check"></img>
            <p>
              Add property<b> Features and amenities</b>
            </p>
          </div>
          <div class="frameSectionleftText">
            <img src={Check} alt="check"></img>
            <p>
              Add <b>Price details</b>
            </p>
          </div>
          <div class="frameSectionleftText">
            <img src={Check} alt="check"></img>
            <p>
              Add your best<b> Property Shots</b>
            </p>
          </div>
        </div>

        <div class="frameSectionright">
          <div class="frameSectionrightHeader">
            <p>LETS GET YOU STARTED !</p>
          </div>

          <div class="frameSectionrightTextContainer">
            <div class="frameSectionrightText">
              <InfoWindow/>
            </div>
          </div>

          <div class="frameSectionrightFooter">
            <div class="needHelp">
              <p class="needHelpText">Need Help?</p>
              <p class="helpNo">Call 9999999999</p>
            </div>
            <NavLink to="otp">
              <button class="frameSectionrightFooterBtn" >
                Next
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
