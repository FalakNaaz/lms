import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import axios from 'axios';

function AddNewCourseModal({ showModal, toggle, item }) {
    const numberRef = useRef();
    const handleSubmit = async () => {
        if (numberRef.current.value >= 0 && numberRef.current.value <=100) {
            await axios.put(`http://localhost:1337/api/users/${item}`, {
                assessmentScore: numberRef.current.value,
            })
            toggle();
        }
        else{
            alert("Number should not be less than 0 and greater than 100.");
        }
    }
    return (
        <Modal show={showModal}>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Edit Marks</Form.Label>
                        <Form.Control type="number" ref={numberRef} required />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={toggle}>Cancel</Button>
                <Button variant="primary" onClick={handleSubmit}>OK</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddNewCourseModal