import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalComponent({ showModal, toggle }) {
  return (
    <Modal show={showModal}>
      <Modal.Body>Are you sure you want to delete this User ?</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={toggle}>Cancel</Button>
        <Button variant="primary" onClick={toggle}>OK</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent