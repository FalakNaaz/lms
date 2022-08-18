import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../App.css";

function AllCourses() {
  const [courses, setCourses] = useState([]);
  const [role, setRole] = useState("Learner")
  const currEmail = localStorage.getItem("currUser")
  useEffect(() => {
    const getCourses = async () => {
      try {
        let res = await axios.get("http://localhost:1337/api/trainings?populate=*");
        setCourses(res.data.data);
      } catch (e) {
        console.log("error:", e.message);
      }
    };
    getCourses();
    const checkEmail = (e) => {
      return currEmail === e.email;
    } 
    const getRole = async() => {
      const res = await axios.get(
        "http://localhost:1337/api/users?populate=*"
      );
      const user = res.data.filter(checkEmail)
      setRole(user[0].role.name);
      
    }
   getRole();
  }, []);
 
  return (
    <div
      className="courseDiv"
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {courses &&
        courses.map((item, index) => (
          <Card
            key={index}
            className="mx-2 mt-4 pt-2 courseCard"
            style={{ textAlign: "center" }}
          >
            <Link to="/">
              <Card.Img
                variant="top"
                src={item.attributes.Image.data.attributes.name}
                style={{ height: "35vh", width: "28vh" }}
              />
            </Link>
            <Card.Body className="cardBody">
              <Card.Title>{item.attributes.name}</Card.Title>
              <p> {item.attributes.title.slice(0, 18).concat("...")}</p>
              <div>
                <Button variant="primary" >
                  Enroll
                </Button>
                <Button variant="primary" >
                  {role === "Trainer" ? 
                  <a style={{color: "white", textDecoration: "None"}} target= "_blank" href = "https://docs.google.com/spreadsheets/d/11kjkzy842rNGzf8cKjDMW0oza3ZTNTPHM6g3tvlRVJQ/edit?usp=sharing"> Curriculum</a> :
                  <a style={{color: "white", textDecoration: "None"}} target= "_blank" href = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS4JIQyWYpWfuVBJRL57Bmlm4I7BP5EILG8NoUOvBWP2dxvwG-u-e5R93FH8Qx_wg5JJxjnkRlz5zlu/pubhtml"> Curriculum</a>
        }</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

export default AllCourses;
