import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const passRef = useRef();
  const confirmPassRef = useRef();
  const code = useRef();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleReset(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await axios.post("http://localhost:1337/api/auth/reset-password", {
        password: passRef.current.value,
        passwordConfirmation: confirmPassRef.current.value,
        code: code.current.value,
      });
      setMessage(
        "Your Password has been Reset successfully! Now you can Login!."
      );
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      setError("Something went wrong! : " + err.message);
    }
    setLoading(false);
  }
  return (
    <div className="loginBackground">
      <Card style={{ maxWidth: "400px", margin: "auto" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleReset}>
            <Form.Group id="email">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" ref={passRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control type="password" ref={confirmPassRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Verification Code</Form.Label>
              <Form.Control type="text" ref={code} required />
            </Form.Group>
            <br />
            <Button disabled={loading} className="w-100" type="submit" variant="success">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login" style={{ textDecoration: "none" }}>
              Log In
            </Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 btm-txt">
        Not having an account?
        <Link to="/signup" style={{ textDecoration: "none" }}>
          {" "}
          Sign up Here!
        </Link>
      </div>
    </div>
  );
}
export default ResetPassword;
