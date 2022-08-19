import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCourses } from '../../redux/actions/CoursesAction';
import './AllCourses.css'

function AllCourses() {
  const [role, setRole] = useState('Learner');
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses)
  useEffect(() => {
    const getCourses = async () => {
      await dispatch(fetchAllCourses());
    }
    getCourses();
    const currEmail = localStorage.getItem("currUserEmail")
    const checkEmail = (e) => {
      return currEmail === e.email;
    }
    const getRole = async () => {
      const res = await axios.get(
        "http://localhost:1337/api/users?populate=*"
      );
      const user = res.data.filter(checkEmail)
      setRole(user[0].role.name);

    }
    getRole();
  }, []);
  console.log("role = ", role)

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
        courses.map((val) => (
          // <Card
          //   key={index}
          //   className="mx-2 mt-4 pt-2 courseCard"
          //   style={{ textAlign: "center" }}
          // >
          //   <Link to="/">
          //     <Card.Img
          //       variant="top"
          //       src={item.attributes.Image.data.attributes.name}
          //       style={{ height: "35vh", width: "28vh" }}
          //     />
          //   </Link>
          //   <Card.Body className="cardBody">
          //     <Card.Title>
          //       {item.attributes.name.length>18
          //       ?
          //       item.attributes.name.slice(0, 18).concat("...")
          //       :
          //       item.attributes.name}
          //       </Card.Title>
          //     <p> {item.attributes.title}</p>
          //     <div style={{display:'flex', justifyContent:'center'}} >
          //       <Button variant="primary" >
          //         Enroll
          //       </Button>

          <div className="course__Card" key={val.id}>
            <Link to={`/course`} className="container">
              <img
                className="image"
                src={val.attributes.Image.data.attributes.name}
                alt=""
              />
              <div className="overlay">
                <p className="text">View</p>
              </div>
            </Link>

            <div className="course__content">
              <h5>
                {val.attributes.name.length > 18
                  ?
                  val.attributes.name.slice(0, 18).concat("...")
                  :
                  val.attributes.name}
              </h5>
              <p>{val.attributes.title}</p>
              <Button color="primary" variant="contained">
                Enroll
              </Button>
              <Button variant="primary" style={{ marginLeft: '2vw' }}>
                {role === "Trainer" ?
                  <a style={{ color: "white", textDecoration: "None" }} target="_blank" href={val.attributes.toc_link_edit}> Curriculum</a> :
                  <a style={{ color: "white", textDecoration: "None" }} target="_blank" href={val.attributes.toc_link_view}> Curriculum</a>
                }</Button>
            </div>
          </div>
        ))
      }
    </div >
  );
}

export default AllCourses;
