import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

function AddNewCourseModal({ showModal, toggle }) {
    const courseNameRef = useRef();
    const courseTitleRef = useRef();
    return (
        <Modal show={showModal}>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Course Title</Form.Label>
                        <Form.Control type="text" ref={courseTitleRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Course Name</Form.Label>
                        <Form.Control type="text" ref={courseNameRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="file" required />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={toggle}>Cancel</Button>
                <Button variant="primary" onClick={toggle}>OK</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddNewCourseModal