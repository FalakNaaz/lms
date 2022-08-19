import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCourses } from "../../redux/actions/CoursesAction";
// import {getRole} from "../../redux/actions/RoleAction";
import SidebarCom from "../../components/Sidebar/SidebarCom";

function AllCourses() {
  const [role, setRole] = useState("Learner");
  // const role = useSelector(state=> state.role.currentRole);
  const sidebarToggle = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses)
  const linkForTrainer = 'https://docs.google.com/spreadsheets/d/11kjkzy842rNGzf8cKjDMW0oza3ZTNTPHM6g3tvlRVJQ/edit?usp=sharing';
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

    // dispatch(getRole());
    // (async()=> await dispatch(getRole()))()
  }, []);
  console.log(" current user role = ", role);

  return (
    <>
      {sidebarToggle ? <SidebarCom /> : null}
      <div
        className="courseDiv"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          textAlign:'center'
        }}
      >
        {courses &&
          courses.map((val) => (
            <div className="course__Card" key={val.id}>
              <Link to={`/allcourses/${val.id}`} className="container">
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
          ))}
      </div>
    </>
  );
}

export default AllCourses;
