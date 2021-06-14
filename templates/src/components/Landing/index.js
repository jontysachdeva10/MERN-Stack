import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import Typical from 'react-typical';
import './landing.scss';
// import bg_image from '../images/home-1.jpg';

const Home = () => {
  const history = useHistory();
  const openRegister = () => {
    history.push("/register");
  };

  const openLogin = () => {
    history.push("/dashboard");
  }

  return (
    <Fragment>
      {/* <img src={bg_image}></img> */}
      <div className="head_line">
        <h1>
          Donate not only Money but{' '}
          <Typical 
            loop={Infinity}
            wrapper="b" 
            steps={['a smile.', 1500, 'love.', 1500]}
          />
        </h1>
        <p>We Feed 10% of <b>unknown</b> World!</p>
      </div>

      <div className="auth_buttons">
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
      </div>
    </Fragment>
  );
};

export default Home;
