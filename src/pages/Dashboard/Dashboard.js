import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Divider, Typography, Paper, Button } from "@material-ui/core";
import { Container } from "react-bootstrap";
import { fetchAllCourses } from "../../redux/actions/CoursesAction";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import SidebarCom from "../../components/Sidebar/SidebarCom";
import Carousel from "react-material-ui-carousel";
import ToastComponent from "../../components/Toast/ToastComponent";
import { getProfileData } from "../../redux/actions/ProfileAction";
function Dashboard() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const sidebarToggle = useSelector((state) => state.sidebar);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    const getCourses = async () => {
      await dispatch(fetchAllCourses());
      setToast(true);
      setTimeout(()=>{
        setToast(false)
      },1000)
    };
    getCourses();
    (async () => await dispatch(getProfileData(localStorage.getItem("currUserId"))))()

  }, []);
  var items = [
    {
      name: "All in one learning place",
      description:
        "All your favorite course are available at one place, lets take the benefit right now",
      imgSrc:
      "https://as2.ftcdn.net/v2/jpg/05/18/87/23/1000_F_518872338_ZqBuCYeJ58AIalKfikVfEk6IIYnvpA6S.jpg",

        
    },
    {
      name: "Demo Coding courses are available for free!",
      description:
        "All your coding courses which which will make you best developer",
        imgSrc:
        "https://skillsourcelearning.com/wp-content/uploads/2020/03/Instructor-Led-Training-Classes-01.jpg",
    },
    {
      name: "Corporate Required trainings",
      description:
        "A great place for the corporate partners to make their employee skillful",
      imgSrc:
        "https://as2.ftcdn.net/v2/jpg/04/49/51/31/1000_F_449513118_nhHdfjILs5JiTvUwHwAlJ64kQLiSfjaW.jpg",
    },
    {
      name: "Instructor-Led live training",
      description:
        "Take the live training session with our Instructor-Led training facility",
        imgSrc:"https://as2.ftcdn.net/v2/jpg/04/94/04/53/1000_F_494045336_Z7J94gFOPnrD9vcV4GnGPWR7LWWFpFS2.jpg",
      
    },
  ];
  function Item(props) {
    return (
      <Paper>
        <h2 style={{ textAlign: "center" }}>{props.item.name}</h2>
        <p style={{ textAlign: "center" }}>{props.item.description}</p>
        <img
          src={props.item.imgSrc}
          alt=""
          style={{ width: "96.3vw", height: "50vh" }}
        />
      </Paper>
    );
  }
  return (
    <div className="dashboard">
      <ToastComponent
          setToast={setToast}
          renderToast={toast}
          msg="Welcome !"
        />
      {sidebarToggle ? <SidebarCom /> : null}
      <div className="main__body__dashboard">
        <Carousel className="mt-4">
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
        <Container
          fluid
          className="mt-5"
          style={{ width: "96vw", textAlign: "center" }}
        >
          <Paper
            className="d-flex align-items-center p-4 mb-4"
            style={{ width: "94.5vw" }}
          >
            <Typography variant="h6" style={{ textAlign: "center",fontWeight: 700}}>
              Popular Courses
            </Typography>
          </Paper>
          <Divider />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {courses.length > 0 &&
              courses.slice(0, 5).map((val) => {
                return (
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
                      <Button color="primary" variant="contained">
                        Enroll
                      </Button>
                    </div>
                  </div>
                );
              })}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Dashboard;
