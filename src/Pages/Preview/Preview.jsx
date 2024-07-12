import React from 'react'
import "./Preview.css"
import Part1 from "../../assets/part 1.png"
import Part2 from "../../assets/part 2.png";
import Footer from "../../assets/Footer.png"
function Preview() {
  return (
    <div className="Preview">
      <img src={Part1}></img>
          <img src={Part2}></img>
          <div className="previewFooter">
              <img src={Footer}></img>
          </div>
    </div>
  );
}

export default Preview
