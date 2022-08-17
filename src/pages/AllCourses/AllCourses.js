import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";

function AllCourses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      try {
        let res = await axios.get("http://localhost:1337/api/trainings?populate=*");
        //res = Array.from(res);
        setCourses(res.data.data);

        console.log("res = ", res.data.data);
      } catch (e) {
        console.log("error:", e.message);
      }
    };
    getCourses();
  }, []);

  setTimeout(()=>{
    console.log("courses are: ",courses)
  },3000)
  

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
              <Card.Title>{item.title}</Card.Title>
              <p> {item.name}</p>
              <div>
                <Button variant="primary" >
                  Enroll
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

export default AllCourses;
