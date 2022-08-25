import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse } from "../../redux/actions/SpecificCourseAction";
import { Button } from "react-bootstrap";
import NoticeToggle from "./NoticeToggle/NoticeToggle";
import { Container, Paper, Typography } from "@material-ui/core";
import SidebarCom from "../../components/Sidebar/SidebarCom";
import axios from "axios";

const Course = () => {
  const { id } = useParams();
  const currentCourse = useSelector((state) => state.course.course);
  const dispatch = useDispatch();
  const currUserId = localStorage.getItem("currUserId");
  const role = localStorage.getItem("currUserRole");
  const [isReadMore, setIsReadMore] = useState(true);
  const [enableId, setEnableId] = useState(0);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const sidebarToggle = useSelector((state) => state.sidebar);

  useEffect(() => {
    (async () => await dispatch(fetchCourse(id)))();

    const checkForEnrolledCourse = async () => {
      const users = await axios.get(
        `http://localhost:1337/api/users/${currUserId}?populate=*`
      );

      users.data.training && setEnableId(users.data.training.id);
    };
    checkForEnrolledCourse();

    /* eslint-disable */
  }, [sidebarToggle]);

  const addTraining = async () => {
    await axios.put(
      `http://localhost:1337/api/users/${currUserId}?populate=*`,
      {
        training: {
          id: id,
          attributes: currentCourse,
        },
      }
    );
    setEnableId(id);
  };
  return (
    <>
      {sidebarToggle ? <SidebarCom /> : null}
      {currentCourse && (
        <div>
          <h6>Course created at : {currentCourse?.createdAt?.slice(0, 10)}</h6>
          <Container
            fluid="true"
            className="mt-5"
            style={{ width: "96vw", textAlign: "center" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="course__Card">
                <img
                  className="image"
                  src={currentCourse.Image?.data?.attributes.name}
                  alt=""
                />

                <div className="course__content">
                  <h1>{currentCourse.name}</h1>
                  <p>{currentCourse.title}</p>
                  <p style={{ textAlign: "left", width: "100%" }}>
                    {isReadMore
                      ? currentCourse?.description?.slice(0, 350)
                      : currentCourse?.description}
                    <span
                      onClick={toggleReadMore}
                      style={{ color: " rgb(192,192,192)", cursor: "pointer" }}
                    >
                      {isReadMore ? "...read more" : " show less"}
                    </span>
                  </p>
                  {role === "Learner" &&
                    (enableId == id ? (
                      <Button
                        variant="success"
                        style={{ width: "30%", marginTop: "30px" }}
                        onClick={() => {
                          addTraining();
                        }}
                        disabled={enableId}
                      >
                        Enrolled in this course
                      </Button>
                    ) : (
                      <Button
                        id="btnColor"
                        style={{ width: "30%", marginTop: "30px" }}
                        onClick={() => {
                          addTraining();
                        }}
                        disabled={enableId}
                      >
                        {" "}
                        Enroll to this course
                      </Button>
                    ))}
                  <Button
                    id="btnColor"
                    style={{
                      marginLeft: "2vw",
                      width: "30%",
                      marginTop: "30px",
                    }}
                  >
                    {role === "Trainer" ? (
                      <a
                        style={{ color: "white", textDecoration: "None" }}
                        target="_blank"
                        href={currentCourse.toc_link_edit}
                      >
                        Edit course curriculum
                      </a>
                    ) : (
                      <a
                        style={{ color: "white", textDecoration: "None" }}
                        target="_blank"
                        href={currentCourse.toc_link_view}
                      >
                        View course Curriculum
                      </a>
                    )}
                  </Button>
                </div>
              </div>
            </div>
            <Container className="my-5">
              <Paper className="px-5 py-3">
                <div>
                  <div style={{ backgroundColor: "#373B4D", padding: "5px" }}>
                    <Typography
                      className="text-light text-center py-5"
                      variant="h4"
                    >
                      {currentCourse.name}
                    </Typography>
                  </div>
                </div>
                <div className="">
                  <div className="d-flex justify-content-between align-items-center my-4">
                    <Typography variant="h6">Course Content</Typography>
                    <Typography
                      style={{ color: "GrayText" }}
                      variant="subtitle2"
                    >
                      Course last updated at :
                      {currentCourse?.updatedAt?.slice(0, 10)}
                    </Typography>
                  </div>
                  <NoticeToggle />
                </div>
              </Paper>
            </Container>
          </Container>
        </div>
      )}
    </>
  );
}

export default Course;
