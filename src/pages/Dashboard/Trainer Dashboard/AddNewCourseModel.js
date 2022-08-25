import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import axios from 'axios';

function AddNewCourseModal({ showModal, toggle }) {

    {/* Created useRef constants to store the value from Form.Control */}
    const courseNameRef = useRef();
    const courseTitleRef = useRef();
    const courseDescRef = useRef();
    const courseImageRef = useRef();


    const handleSubmit = async () => {

        {/* Adding/Posting new Course to the Strapi */}
        try {
            await axios.post(`http://localhost:1337/api/trainings`, {
                "data": {
                    "name": courseNameRef.current.value,
                    "Image": courseImageRef.current.value,
                    "title": courseTitleRef.current.value,
                    "description": courseDescRef.current.value
                }
            })
            toggle();
        }
        catch (error) {
            console.log("error", error);
        }
    }

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
                        <Form.Label>Image Link</Form.Label>
                        <Form.Control type="text" ref={courseImageRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Course Description</Form.Label>
                        <Form.Control as="textarea" rows={3} ref={courseDescRef} required />
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