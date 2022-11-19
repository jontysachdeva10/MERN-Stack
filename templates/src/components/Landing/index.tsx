import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./landing.scss";

const Home = () => {
  const history = useHistory();
  const openRegister = () => {
    history.push("/register");
  };

  const openLogin = () => {
    history.push("/dashboard");
  };

  return (
    <div className="main">
      <div className="overlay-img">
        <div className="grid-container">
          <div className="grid-container__1">
            <div className="main-heading">
              <span>Help the Poor</span>
            </div>
            <div className="sub-heading">
              <span>Anavrin</span>
              <span className="dot"></span>
            </div>
            <div className="sub-heading__2">
              <span id="heading-2">We feed the 10% of world!</span>
            </div>
          </div>
          <div className="grid-container__2">
            <div className="description">
              Doing nothing is not an option of our life. Be the reason for
              someone's{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                filled stomach
              </span>
              ,{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                happiness
              </span>{" "}
              and{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                hope to live for another day
              </span>
              .
            </div>
            <div className="menu">
                <Link to="#">Home</Link>
                <Link to="#">About Us</Link>
                <Link to="#" style={{ fontWeight: "bold" }}>Schedule</Link>
                {/* <Link to="#">Contact Us</Link> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="auth_buttons">
        <button id="volunteer_button" onClick={openRegister}>
          <span>
            Become a <b>Volunteer</b>
          </span>
        </button>
        <button id="donate_button" onClick={openLogin}>
          <span>
            Start <b>Donating</b>
          </span>
        </button>
      </div> */}
    </div>
  );
};

export default Home;
