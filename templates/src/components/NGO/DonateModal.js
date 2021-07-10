import React, { Fragment, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { donateMoney } from "../../actions/ngo";

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
    transition: 0.2s ease-out;
  }
`;

const AboutUs = styled.h2`
  margin-left: 2rem;
  .about_heading {
    color: #fd7e14;
    font-size: 2rem;
  }
`;

const ModalHeader = styled.div`
  background-color: #e6e6e6;
  padding: 10px;
  margin-top: -20px;
  margin-left: -2rem;
  width: 111%;
`;

const ModalHeadline = styled.div`
  margin-top: -0.1rem;
  font-size: 0.85rem;
  color: red;
  background-color: #ffcccb;
  width: 111%;
  margin-left: -2rem;
  p {
    margin-left: 8.3rem;
  }
  span {
    color: black;
    font-size: 1.1rem;
  }
`;

// const Line = styled.div`
//   height: 1px;
//   background: black;
// `;

// const ModalHeadline = styled.p`
//   text-align: center;
//   font-size: 0.9rem;
//   color: black;
//   margin-top: 1rem;
// `;

Modal.setAppElement("#root");

const DonateModal = ({ name, showDonateModal, setShowDonateModal }) => {

  const [formData, setFormData] = useState({
    full_name: "",
    amount: "",
    upi: "",
    location: "",
    phone: "",
    email: "",
  });

  const { full_name, amount, upi, location, phone, email } = formData;

  const onChangeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    donateMoney({ full_name, amount, upi, location, phone, email });
  };

  return (
    <Fragment>
      <Modal
        id="donate_modal"
        isOpen={showDonateModal}
        onRequestClose={() => setShowDonateModal(false)}
      >
        <ModalHeader>
          <AboutUs>
            Donate <span className="about_heading">Money</span> for {name}
          </AboutUs>
        </ModalHeader>
        {/* <Line></Line> */}
        <ModalHeadline>
          <p>If any queries, call us at <span>1234567890</span></p>
        </ModalHeadline>
        <form className="donate_form" onSubmit={(event) => onSubmitHandler(event)}>
          <div className="form-group">
            <input
              id="donate_fields"
              type="text"
              name="name"
              value={full_name}
              placeholder="Full Name"
              onChange={(event) => onChangeHandler(event)}
              required
            />
          </div>
          <div className="form-group amount-1">
            <input
              id="donate_fields"
              type="text"
              name="amount"
              value={amount}
              placeholder="Amount"
              onChange={(event) => onChangeHandler(event)}
              required
            />
          </div>
          <div className="form-group upi-1">
            <input
              id="donate_fields"
              type="text"
              name="upi"
              value={upi}
              placeholder="UPI"
              onChange={(event) => onChangeHandler(event)}
              required
            />
          </div>
          <div className="form-group">
            <input
              id="donate_fields"
              type="text"
              name="location"
              value={location}
              placeholder="City, State"
              onChange={(event) => onChangeHandler(event)}
              required
            />
          </div>
          <div className="form-group">
            <input
              id="donate_fields"
              type="text"
              name="email"
              value={email}
              placeholder="Email Address"
              onChange={(event) => onChangeHandler(event)}
              required
            />
          </div>
          <div className="form-group">
            <input
              id="donate_fields"
              type="text"
              name="phone"
              value={phone}
              placeholder="Phone Number"
              onChange={(event) => onChangeHandler(event)}
              required
            />
          </div>
          <input id="donate_btn_2" type="submit" value="Donate" />
        </form>
        <CloseModalButton
          onClick={() => setShowDonateModal(false)}
        ></CloseModalButton>
      </Modal>
    </Fragment>
  );
};

export default DonateModal;
