import React from "react";
import "./about.css";
import Dj from "../../img/foto1.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img
            src={Dj}
            alt=""
            className="a-img"
            />
        </div>
      </div>
      <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, minima.</p>
          <p className="a-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora reiciendis deserunt soluta quisquam quas totam impedit. Enim reprehenderit explicabo distinctio id magni, dolorum earum ducimus blanditiis iusto dolore, quasi natus necessitatibus amet saepe vitae aliquid quo. Aperiam, molestias possimus.
          </p>
          {/* <div className="a-award">
              <img src="" alt="" className="a-award" />
              <div className="a-award-texts">

              </div>
          </div> */}
      </div>
    </div>
  );
};

export default About;
