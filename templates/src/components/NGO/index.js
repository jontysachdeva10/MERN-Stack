import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import {
  FaMapPin,
  FaCartPlus,
  FaPhoneAlt,
  FaAt,
} from "react-icons/fa";
import PickupModal from './PickupModal';
import DonateModal from './DonateModal';

import "./ngo.scss";

const Ngo = ({ ngo: { name, address, city, type, email, phone } }) => {

  const [showPickupModal, setShowPickupModal] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);

  return (
    <Fragment>
      <div className="card">
        <div className="card_circle">
          <h2>{name}</h2>
        </div>
        <div className="card_content">
          <div className="card_content_type">
            <FaCartPlus className="fa-box" />
            <span>{type}</span>
          </div>
          <div className="card_content_address">
            <FaMapPin className="fa-address" />
            <span>
              {address}, {city}
            </span>
          </div>
          <div className="card_content_email">
            <FaAt className="fa-email" />
            <span>{email}</span>
          </div>
          <div className="card_content_phone">
            <FaPhoneAlt className="fa-phone" />
            <span>{phone}</span>
          </div>
          <div id="pickup_btn">
            <button onClick={() => setShowPickupModal(true)}>
              Request Pickup
            </button>
          </div>
          <div id="donate_btn">
            <button onClick={() => setShowDonateModal(true)}>
              Donate Money
            </button>
          </div>
        </div>
      </div>
      <PickupModal showPickupModal={showPickupModal} setShowPickupModal={setShowPickupModal} />
      <DonateModal showDonateModal={showDonateModal} setShowDonateModal={setShowDonateModal} />
    </Fragment>
  );
};

Ngo.propTypes = {
  ngo: PropTypes.object.isRequired,
};

export default Ngo;
