import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleForgot(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await axios.post("http://localhost:1337/api/auth/forgot-password", {
        email: emailRef.current.value,
      });
      setMessage("An email has been sent with verification code!.");
      setTimeout(() => {
        navigate("/reset-password");
      }, 800);
    } catch (err) {
      setError("Something went wrong! : " + err.message);
    }
    setLoading(false);
  }
  return (
    <div className="loginBackground">
      <Card style={{ maxWidth: "400px", margin: "auto" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Forgot Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleForgot}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <br />
            <Button disabled={loading} className="w-100" type="submit" variant="success">
              Forgot Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ForgotPassword;
