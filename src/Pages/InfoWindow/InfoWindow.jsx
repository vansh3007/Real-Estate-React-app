import React from 'react'
import "./InfoWindow.css"

function InfoWindow() {
  const handleName = (event) => {
    event.target.value = "Celeste";
  };
  const handlePhone = (event) => {
    event.target.value = "999 999 9999";
  };
  const handleEmail = (event) => {
    event.target.value = "celesteux@gmail.com";
  };
  return (
    <div className="InfoWindow">
      <div className="Iam">
        <label>
          <b className="star">*</b> I am :
        </label>
        <br></br>
        <br></br>
        <form className="IamForm">
          <div className="radiobox">
            <input type="radio" id="Owner" name="Iam" className="radio"></input>
            <label for="Owner" className="radioLable">
              Owner
            </label>
          </div>
          <div className="radiobox">
            <input
              type="radio"
              id="Builder"
              name="Iam"
              className="radio"
            ></input>
            <label for="Builder" className="radioLable">
              Builder
            </label>
          </div>
        </form>
      </div>
      <br></br>
      <div className="WindowItem">
        <label for="name">
          YOUR NAME <b className="star">*</b>
        </label>
        <br></br>
        <br></br>
        <input
          type="text"
          id="name"
          value="Name"
          placeholder="Name"
          readOnly
          onClick={handleName}
        ></input>
      </div>
      <br></br>
      <div className="WindowItem">
        <label for="name">
          COUNTRY <b className="star">*</b>
        </label>
        <br></br>
        <br></br>
        <input
          type="text"
          id="name"
          readOnly
          name="country"
          value="India"
        ></input>
      </div>
      <br></br>
      <div className="WindowItem">
        <label for="phone">
          PHONE <b className="star">*</b>
        </label>
        <br></br>
        <br></br>
        <input
          type="text"
          id="phonecode"
          readOnly
          name="country"
          value="+91"
        ></input>
        &nbsp;
        <input
          type="text"
          id="phone"
          name="country"
          readOnly
          value="000-000-0000"
          onClick={handlePhone}
        ></input>
        <br></br>
        <br></br>
        <label>OR</label>
        <br></br>
        <br></br>
        <label for="name">
          EMAIL <b className="star">*</b>
        </label>
        <br></br>
        <br></br>
        <input
          type="text"
          id="name"
          readOnly
          name="name"
          value="Email"
          onClick={handleEmail}
        ></input>
      </div>
    </div>
  );
}

export default InfoWindow
