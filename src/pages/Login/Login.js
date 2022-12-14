import "../../App.css";
import React, { useRef, useState } from "react";
import { Alert, Card, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/LoginActions";
import { useDispatch } from "react-redux";
import { getRole } from "../../redux/actions/RoleAction";

const Login = () => {
  const emailRef = useRef();
  const pwdRef = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    await dispatch(login(emailRef.current.value, pwdRef.current.value));
    setLoading(false);
    (async () => await dispatch(getRole()))();
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 1000);
  }
  return (
    <div className="lsfrBackground">
      <Card
        className="lsfrCard"
      >
        <Card.Body>
          <h2 className="text-center mb-4">Log In </h2>
          {loading && (
            <Alert variant="success">Logging In into your account...</Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={pwdRef} required />
            </Form.Group>
            <br />
            <Button disabled={loading} className="w-100" type="submit" id="btnColor">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password" style={{ textDecoration: "none" }}>
              Forgot Password?
            </Link>
          </div>
        </Card.Body>
      </Card>
      <div
        className="w-100 text-center mt-2 btm-txt"
        style={{ fontSize: '20px' }}>
        Not having an account?
        <Link to="/signup" style={{ textDecoration: "none" }}>
          {" "}Sign up Here!
        </Link>
      </div>
    </div>
  );
}
export default Login;
