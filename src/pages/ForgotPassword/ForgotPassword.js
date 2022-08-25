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
      {/* Posting email to the forgot-password API */ }
      await axios.post("http://localhost:1337/api/auth/forgot-password", {
        email: emailRef.current.value,
      });
      setMessage("An email has been sent with verification code!.");
      navigate("/reset-password");
    } catch (err) {
      setError("Something went wrong! : " + err.message);
    }
    setLoading(false);
  }
  return (
    <div className="lsfrBackground">
      <Card className="lsfrCard">
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
            <Button disabled={loading} className="w-100 mb-4" type="submit" id="btnColor">
              Forgot Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ForgotPassword;
