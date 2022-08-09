import Card from 'react-bootstrap/Card';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../App.css'
import { Link } from 'react-router-dom';

function SignUp() {
    return (<>
        <br /><br /><br /><br />
        <Card className="m-auto" style={{ maxWidth: '400px' }}>
        
            <Card.Body>
            <Card.Title className='text-center'>Sign Up</Card.Title>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="confirmPassword" placeholder="Confirm Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Link to="/login"> Already have an account? Log In</Link>
                    <div className="col-md-12 text-center">
                        <Button variant="primary" type="submit" className='text-center'>
                            Submit
                        </Button>
                    </div>

                </Form>
            </Card.Body>
        </Card>
    </>
    )
}

export default SignUp