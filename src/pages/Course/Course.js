import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse } from "../../redux/actions/SpecificCourseAction";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Course() {
  const { id } = useParams();
  const currentCourse = useSelector((state) => state.course.course);
  console.log("in (redux) course component ", currentCourse);
  const dispatch = useDispatch();
  const role = localStorage.getItem("currUserRole");
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  useEffect(() => {
    (async () => await dispatch(fetchCourse(id)))();
    
  }, []);

  return (
    <>
      {currentCourse && (
        <div>
          <h6>Course last updated at : {currentCourse?.updatedAt?.slice(0, 10)}</h6>
          <Container
            fluid
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
                  <h5>{currentCourse.name}</h5>
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
                  {role === "Learner" && (
                    <Button color="primary" style={{ width: "30%" }}>
                      Enroll to this course
                    </Button>
                  )}
                  <Button
                    variant="primary"
                    style={{ marginLeft: "2vw", width: "30%" }}
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
          </Container>
        </div>
      )}
    </>
  );
}

export default Course;
