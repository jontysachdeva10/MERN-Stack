import React, { Fragment } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const DonateModal = ({ showDonateModal, setShowDonateModal }) => {
  return (
    <Fragment>
      <Modal isOpen={showDonateModal} onRequestClose={() => setShowDonateModal(false)}>Yo</Modal>
    </Fragment>
  );
};

export default DonateModal;
