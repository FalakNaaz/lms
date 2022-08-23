import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCourses } from "../../redux/actions/CoursesAction";
import { getRole } from "../../redux/actions/RoleAction";
import SidebarCom from "../../components/Sidebar/SidebarCom";
import axios from "axios";

function AllCourses() {
  const [enableId, setEnableId] = useState(0);
  const role = localStorage.getItem("currUserRole");
  const sidebarToggle = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  useEffect(() => {
    const getCourses = async () => {
      await dispatch(fetchAllCourses());
      let users = await axios.get(`http://localhost:1337/api/users`);
      const currEmail = localStorage.getItem("currUserEmail");
      const filteredUsers = users.data.filter(
        (user) => user.email === currEmail
      );
      users = await axios.get(
        `http://localhost:1337/api/users/${filteredUsers[0].id}?populate=*`
      );

      users.data.training && setEnableId(users.data.training.id);
    };
    getCourses();

    (async () => await dispatch(getRole()))();
  }, []);

  const addTraining = async (training) => {
    const currEmail = localStorage.getItem("currUserEmail");
    const users = await axios.get(`http://localhost:1337/api/users`);
    const filteredUsers = users.data.filter((user) => user.email === currEmail);
    console.log("filteredUsers = ", filteredUsers[0].id);
    await axios.put(
      `http://localhost:1337/api/users/${filteredUsers[0].id}?populate=*`,
      {
        training: training,
      }
    );
    setEnableId(training.id);
  };
  return (
    <>
      {sidebarToggle ? <SidebarCom /> : null}
      <div
        className="courseDiv"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          textAlign: "center",
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
                    ? val.attributes.name.slice(0, 18).concat("...")
                    : val.attributes.name}
                </h5>
                <p>{val.attributes.title}</p>

                {enableId == val.id ? (
                  <Button
                    variant="success"
                    onClick={() => {
                      addTraining(val);
                    }}
                    disabled={enableId}
                  >
                    Enrolled
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => {
                      addTraining(val);
                    }}
                    disabled={enableId}
                  >
                    {" "}
                    Enroll
                  </Button>
                )}

                <Button variant="primary" style={{ marginLeft: "2vw" }}>
                  {role === "Trainer" ? (
                    <a
                      style={{ color: "white", textDecoration: "None" }}
                      target="_blank"
                      href={val.attributes.toc_link_edit}
                    >
                      Curriculum
                    </a>
                  ) : (
                    <a
                      style={{ color: "white", textDecoration: "None" }}
                      target="_blank"
                      href={val.attributes.toc_link_view}
                    >
                      Curriculum
                    </a>
                  )}
                </Button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default AllCourses;
