import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse } from "../../redux/actions/SpecificCourseAction";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Course() {
  const { id } = useParams();
  const currentCourse = useSelector((state) => state.course.course);
  console.log("in (redux) course component ", currentCourse);
  const dispatch = useDispatch();

  //   const [course, setCourse] = useState();
  useEffect(() => {
    (async () => await dispatch(fetchCourse(id)))();
    // const fetchingData = async() => {
    //   const res = await axios.get(`http://localhost:1337/api/trainings/${id}`);

    //   setCourse(res.data.data);
    // };
    // fetchingData();

    // axios.get(`http://localhost:1337/api/trainings/${id}`)
    // .then((res)=>{
    //     setCourse(res.data.data)
    // })
    // .catch(()=>{
    //     console.log("Error in fetching the courses.")
    // })
  }, []);
  //   console.log("in set course component ", course.attributes.name);
  //   console.log("in set course component ", course);

  return (
    <>
      {currentCourse && (
        <div>
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
                  <Button color="primary" variant="contained">
                    Enroll
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
