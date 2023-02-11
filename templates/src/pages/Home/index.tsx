/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './home.scss';

function Home() {
  // const history = useHistory();
  // const openRegister = () => {
  //   history.push("/register");
  // };

  // const openLogin = () => {
  //   history.push("/dashboard");
  // };

  return (
    <div className="main">
      <div className="main-container">
        <div className="overlay-img">
          <div className="grid-container">
            <div className="grid-container__1">
              <div className="main-heading">
                <span>#HelpThePoor</span>
              </div>
              <div className="sub-heading">
                <span>Anavrin</span>
                <span className="dot" />
              </div>
              <div className="sub-heading__2">
                <span id="heading-2">We feed 10% of the world!</span>
              </div>
            </div>
            <div className="grid-container__2">
              <div className="description">
                Doing nothing is not an option of our life. Be the reason for
                someone's
                {' '}
                <span style={{ color: 'black', fontWeight: 'bold' }}>
                  happiness
                </span>
                ,
                {' '}
                <span style={{ color: 'black', fontWeight: 'bold' }}>
                  filled stomach
                </span>
                {' '}
                and
                {' '}
                <span style={{ color: 'black', fontWeight: 'bold' }}>
                  hope to live for another day
                </span>
                .
              </div>
              <div className="menu">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <div className="menu_buttons">
                  <button type="button" id="donate_button">
                    <span>
                      <b>Donate</b>
                    </span>
                  </button>
                  <button type="button" id="volunteer_button">
                    <span>
                      Join
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
