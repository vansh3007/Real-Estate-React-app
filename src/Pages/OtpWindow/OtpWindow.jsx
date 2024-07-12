import React from 'react'
import "./OtpWindow.css"
function OtpWindow() {
  const handleOtp = (event) => {
    event.target.value = "8 7 6 5 4";
  };
  return (
    <div className="otpWindow">
      <div className="labelBox">
        <label className="otpLabel">
          Enter OTP sent on 999-999-9999 <b className="star">*</b>
        </label>
        <p>Change</p>
      </div>
      <br></br>
          <input className="otpInput" value="0 0 0 0 0" readOnly onClick={handleOtp}></input>
          <div className="resendBox">
              <p>RESEND OTP</p>
          </div>
    </div>
  );
}

export default OtpWindow
