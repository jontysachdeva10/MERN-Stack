import React, { Fragment } from "react";
import Modal from "react-modal";
import styled from "styled-components";
// import { Collapse } from "react-bootstrap";
import { MdClose } from "react-icons/md";
// import { FaArrowDown } from "react-icons/fa";

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 8px;
  width: 30px;
  height: 30px;
  padding: 0;
  z-index: 10;
  color: #2f3640;
  background: #f6f6f6;
  box-shadow: -2px -2px 2px white, 2px 2px 2px #888888;
  border-radius: 50%;
  border: 1px solid #ececec;

  :hover {
    color: #fd7e14;
    box-shadow: -2px -2px 2px white, 2px 2px 2px #888888,
      inset -2px -2px 2px white, inset 2px 2px 2px #888888;
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
  .about_heading {
    color: #fd7e14;
    font-size: 2rem;
  }
`;

const Line = styled.div`
  height: 1px;
  background: black;
`;

const ModalHeadline = styled.p`
  font-size: 0.85rem;
  color: red;
  span {
    color: black;
    font-size: 1.1rem;
  }
`;

Modal.setAppElement("#root");

const PickupModal = ({ showPickupModal, setShowPickupModal}) => {
//   const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <Modal
        id="ngo_modal"
        isOpen={showPickupModal}
        onRequestClose={() => setShowPickupModal(false)}
      >
        <AboutUs>
          Request <span className="about_heading">Pickup</span>
        </AboutUs>
        <Line></Line>
        <ModalHeadline>
          Note** If any queries, call us at <span>1234567890</span>, before
          requesting for pickup.
        </ModalHeadline>
        <form>
          <div className="pickup_form">
            <input
              id="name"
              type="text"
              name="amount"
              placeholder="Name"
              required
            />
            <input
              id="name"
              type="text"
              name="amount"
              placeholder="Pickup Address"
              required
            />
            <input
              id="name"
              type="text"
              name="amount"
              placeholder="Phone No"
              required
            />
            <input
              id="name"
              type="text"
              name="amount"
              placeholder="Email"
              required
            />
            <input id="pickup_btn" type="submit" value="Request Pickup" />
          </div>
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
        ></CloseModalButton>
      </Modal>
    </Fragment>
  );
};

export default PickupModal;
