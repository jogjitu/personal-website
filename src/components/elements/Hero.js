import React from "react";
import NavBar from "./NavBar";
import Resume from "../../resume.json";

function Hero() {
  return (
    <div>
      <section className="hero has-bg-image is-fullheight">
        <div className="hero-head">
          <NavBar />
        </div>
        <div className="hero-body">
          <div className="container">
            <p className="subtitle is-5 has-text-weight-light has-text-white">
              I'm a
            </p>
            <h1 className="title has-text-white">{Resume.basics.label}</h1>
            <h2 className="subtitle has-text-white">
              {Resume.basics.location.region}, {Resume.basics.location.country}
            </h2>
          </div>
        </div>
        <div className="hero-foot is-black">
          <div className="columns is-mobile">
            <div className="column"></div>
            {Resume.basics.profiles.map((value, index) => {
              return (
                <div key={index} className="column has-text-centered">
                  <a
                    href={value.url}
                    target="blank"
                    className="is-hovered"
                    title={value.network}
                  >
                    <span className="icon is-black is-medium is-">
                      <i className={value.x_icon}></i>
                    </span>
                  </a>
                </div>
              );
            })}
            <div className="column"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
