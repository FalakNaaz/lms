import Card from "react-bootstrap/Card";
import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { Signup } from "../../redux/actions/SignupActions";
import {useDispatch } from "react-redux";
import axios from "axios";

function SignUp() {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [val, setVal] = useState("Student");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: emailRef.current.value,
      username: usernameRef.current.value,
      role: val,
    };
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      //await auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
      dispatch(Signup(emailRef.current.value, passwordRef.current.value));
      // await axios.post("http://localhost:3000/users", userData);
      axios
      .post('http://localhost:1337/api/auth/local/register', {
        username: 'Kapman',
        email: 'test@test.com',
        password: 'Password',
      })
      .then(response => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
      });
      navigate("/login");
    } catch (e) {
      setError("error from firebase: ", e.message);
    }
    setLoading(false);
  };
  return (
    <Card className="m-auto" style={{ maxWidth: "400px", marginTop: "10px"  }}>
      <Card.Body>
        <Card.Title className="text-center">Sign Up</Card.Title>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              ref={usernameRef}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={val}
              onChange={(e) => setVal(e.target.value)}
            >
              <option value="Student">Student</option>
              <option value="Trainer">Trainer</option>
              <option value="Client">Client</option>
            </Form.Select>
            <br />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              ref={confirmPasswordRef}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <div className="col-md-12 text-center">
            <Button disabled={loading} variant="primary" type="submit" className="text-center">
              Submit
            </Button>
          </div>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Already have an account? Log In
            </Link>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SignUp;
