import React from "react";
import "./intro.css";
import Me from "../../img/me.png"
import {CgScrollV} from "react-icons/cg"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I'm</h2>
          <h2 className="i-name">David Martínez</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">DJ / Producer</div>
              <div className="i-title-item">AV Artist</div>
            </div>
          </div>
          <p className="i-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo veniam odit iure. Molestias aspernatur reiciendis quas consequuntur, vitae ipsum fugiat.
          </p>
        </div>
        <CgScrollV stroke="black" className="i-scroll" />
      </div>
      <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
