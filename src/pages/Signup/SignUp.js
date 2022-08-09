import '../../App.css'
import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


function Signup() {
  const usrNameRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const cPwdRef = useRef();
//   const { signup } = useAuth();
  const [error, setError] = useState("");
  const [check, setCheck] = useState(false);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (pwdRef.current.value !== cPwdRef.current.value) {
      return setError("Password do not match!");
    } else {
      try {
        setError("");
        setLoading(true);
        localStorage.setItem(emailRef.current.value, usrNameRef.current.value);
        // await signup(emailRef.current.value, pwdRef.current.value);
        navigate("/");
      } catch (err) {
        setError("Something went wrong! : " + err.message);
      }
    }
    setLoading(false);
  }

  return (
    <>
      <Card style={{maxWidth: "400px", margin: "auto", marginTop: "30px"}}>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {loading && (
            <Alert variant="success">
              Sign Up Successfully! Redirect to User Dashboard.
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group id="userName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" ref={usrNameRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={pwdRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={cPwdRef} required />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Check type={"checkbox"}>
                <Form.Check.Input
                  type={"checkbox"}
                  defaultChecked={false}
                  onClick={(e) => {
                    setCheck(e.target.checked);
                  }}
                />
                <Form.Check.Label>I accept the <Link to="/tnc" style={{ textDecoration: "none" }}>Terms & Conditions</Link></Form.Check.Label>
              </Form.Check>
            </Form.Group>
            <br />
            <Button disabled={loading || !check} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 btm-txt">
        Already have an account?<Link to="/login" style={{ textDecoration: "none" }}> Log In Here!</Link>
      </div>
    </>
  );
}

export default Signup;
