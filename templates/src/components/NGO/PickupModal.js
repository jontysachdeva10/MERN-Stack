import React, { Fragment, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
// import { Collapse } from "react-bootstrap";
import { MdClose } from 'react-icons/md';
import { requestPickup } from '../../actions/ngo';
// import { FaArrowDown } from "react-icons/fa";

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 8px;
  width: 30px;
  height: 30px;
  padding: 0;
  z-index: 10;
  color: #2f3640;
  background: #f6f6f6;
  box-shadow: -2px -2px 10px white, 2px 2px 10px #888888;
  border-radius: 50%;
  border: 1px solid #ececec;
  transition: 0.4s ease-in;

  :hover {
    color: #fd7e14;
    box-shadow: -2px -2px 10px white, 2px 2px 10px #888888,
      inset -2px -2px 5px white, inset 2px 2px 5px #888888;
    transition: 0.4s ease-out;
  }
`;

// const ArrowDown = styled(FaArrowDown)`
//   margin-top: -1rem;
//   cursor: pointer;
//   postion: relative;
//   box-shadow: -2px -2px 2px white, 2px 2px 2px #888888;
//   border-radius: 50%;
//   height: 30px;
//   width: 30px;
//   border: 1px solid #ececec;
//   margin-left: 1rem;
//   font-size: 1.8rem;
//   padding: 4px;
//   color: #2f3640;
//   background: #f6f6f6;
//   :hover {
//     color: #fd7e14;
//     box-shadow: -2px -2px 2px white, 2px 2px 2px #888888,
//       inset -2px -2px 2px white, inset 2px 2px 2px #888888;
//     transition: 0.4s ease-out;
//   }
// `;

const AboutUs = styled.h2`
  margin-left: 2rem;
  .about_heading {
    color: #fd7e14;
    font-size: 2rem;
  }
`;

// const Line = styled.div`
//   height: 1px;
//   background: black;
// `;

const ModalHeadline = styled.div`
  margin-top: -0.1rem;
  font-size: 0.85rem;
  color: red;
  background-color: #ffcccb;
  width: 111%;
  margin-left: -2rem;
  p {
    margin-left: 3.4rem;
  }
  span {
    color: black;
    font-size: 1.1rem;
  }
`;

const ModalHeader = styled.div`
  background-color: #e6e6e6;
  padding: 10px;
  margin-top: -20px;
  margin-left: -2rem;
  width: 111%;
`;

Modal.setAppElement('#root');

function PickupModal({
  name, type, showPickupModal, setShowPickupModal,
}) {
  //   const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    address: '',
    city: '',
    state: '',
    quantity: '',
    email: '',
    phone: '',
  });

  const {
    full_name, address, city, state, quantity, email, phone,
  } = formData;

  const onChangeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    requestPickup({
      full_name, address, city, state, type, quantity, email, phone,
    });
  };

  return (
    <Modal
      id="pickup_modal"
      isOpen={showPickupModal}
      onRequestClose={() => setShowPickupModal(false)}
    >
      <ModalHeader>
        <AboutUs>
          Request
          {' '}
          <span className="about_heading">Pickup</span>
          {' '}
          for
          {' '}
          {name}
        </AboutUs>
      </ModalHeader>
      {/* <Line></Line> */}
      <ModalHeadline>
        <p>
          If any queries, call us at
          <span>1234567890</span>
          , before
          requesting for pickup.
        </p>
      </ModalHeadline>
      <form className="pickup_form" onSubmit={(event) => onSubmitHandler(event)}>
        <div className="form-group">
          <input
            id="pickup_fields"
            type="text"
            name="name"
            value={full_name}
            onChange={(event) => onChangeHandler(event)}
            placeholder="Full Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            id="pickup_fields"
            type="text"
            name="pickup_address"
            value={address}
            placeholder="Pickup Address"
            required
          />
        </div>
        <div className="form-group city-1">
          <input
            id="pickup_fields"
            type="text"
            name="city"
            value={city}
            placeholder="City"
            required
          />
        </div>
        <div className="form-group state-1">
          <input
            id="pickup_fields"
            type="text"
            name="state"
            value={state}
            placeholder="State"
            required
          />
        </div>
        <div className="form-group item">
          <input
            id="pickup_fields"
            type="text"
            name="item"
            placeholder="Item"
            value={type}
            disabled
            required
          />
        </div>
        <div className="form-group quantity">
          <input
            id="pickup_fields"
            type="text"
            name="quantity"
            value={quantity}
            placeholder="Quantity in detail"
            required
          />
        </div>
        <div className="form-group">
          <input
            id="pickup_fields"
            type="text"
            name="phone"
            value={phone}
            placeholder="Phone No"
            required
          />
        </div>
        <div className="form-group">
          <input
            id="pickup_fields"
            type="text"
            name="email"
            value={email}
            placeholder="Email Address"
            required
          />
        </div>
        <input id="pickup_btn_2" type="submit" value="Request Pickup" />
      </form>
      {/* <span id="donate_heading">Want to donate money?</span> */}
      {/* <ArrowDown
          onClick={() => setOpen(!open)}
          aria-controls="donate_form"
          aria-expanded={open}
        />
        <Collapse in={open}>
          <form id="donate_form">
            <div className="donate_fields">
              <input
                id="amount"
                type="text"
                name="amount"
                placeholder="Amount"
                required
              />
              <input
                id="upi"
                type="text"
                name="upi_id"
                placeholder="Enter your UPI"
                required
              />
              <input id="donate_btn" type="submit" value="Donate" />
            </div>
          </form>
        </Collapse> */}
      <CloseModalButton
        onClick={() => setShowPickupModal(false)}
      />
    </Modal>
  );
}

export default PickupModal;
