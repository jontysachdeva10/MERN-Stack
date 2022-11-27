/* eslint-disable react/button-has-type */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {
  FaMapPin, FaCartPlus, FaPhoneAlt, FaAt,
} from 'react-icons/fa';
// import PickupModal from './PickupModal';
// import DonateModal from './DonateModal';

import './ngo.scss';

type NgoProps = {
  ngo: {
    name: string;
    address: string;
    city: string;
    type: string;
    email: string;
    phone: string;
  };
};

function Ngo({
  ngo: {
    name, address, city, type, email, phone,
  },
}: NgoProps) {
  // const [showPickupModal, setShowPickupModal] = useState(false);
  // const [showDonateModal, setShowDonateModal] = useState(false);

  return (
    <div>
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
              {address}
              ,
              {city}
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
            <button>
              Request Pickup
            </button>
          </div>
          <div id="donate_btn">
            <button>
              Donate Money
            </button>
          </div>
        </div>
      </div>
      {/* <PickupModal name={name} type={type} showPickupModal={showPickupModal} setShowPickupModal={setShowPickupModal} /> */}
      {/* <DonateModal name={name} showDonateModal={showDonateModal} setShowDonateModal={setShowDonateModal} /> */}
    </div>
  );
}

Ngo.propTypes = {
  ngo: PropTypes.object.isRequired,
};

export default Ngo;
