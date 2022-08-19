import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCourses } from "../../redux/actions/CoursesAction";

function AllCourses() {
  const [role, setRole] = useState("Learner");
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses)
  useEffect(() => {
    const getCourses = async () => {
      await dispatch(fetchAllCourses());
    };
    getCourses();
    const currEmail = localStorage.getItem("currUserEmail");
    const checkEmail = (e) => {
      return currEmail === e.email;
    };
    const getRole = async () => {
      const res = await axios.get("http://localhost:1337/api/users?populate=*");
      const user = res.data.filter(checkEmail);
      setRole(user[0].role.name);
    };
    getRole();
  }, []);
  console.log("role = ", role);

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
              <Card.Title>
                {item.attributes.name.length > 18
                  ? item.attributes.name.slice(0, 18).concat("...")
                  : item.attributes.name}
              </Card.Title>
              <p> {item.attributes.title}</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button variant="primary">Enroll</Button>
                <Button variant="primary" style={{ marginLeft: "2vw" }}>
                  {role === "Trainer" ? (
                    <a
                      style={{ color: "white", textDecoration: "None" }}
                      target="_blank"
                      href={linkForTrainer}
                    >
                      Curriculum
                    </a>
                  ) : (
                    <a
                      style={{ color: "white", textDecoration: "None" }}
                      target="_blank"
                      href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS4JIQyWYpWfuVBJRL57Bmlm4I7BP5EILG8NoUOvBWP2dxvwG-u-e5R93FH8Qx_wg5JJxjnkRlz5zlu/pubhtml"
                    >
                      Curriculum
                    </a>
                  )}
                </Button>
                <Button variant="primary" >
                  {role === "Trainer" ?
                    <a style={{ color: "white", textDecoration: "None" }} target="_blank" href={item.attributes.toc_link_edit}> Curriculum</a> :
                    <a style={{ color: "white", textDecoration: "None" }} target="_blank" href={item.attributes.toc_link_view}> Curriculum</a>
                  }</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

export default AllCourses;