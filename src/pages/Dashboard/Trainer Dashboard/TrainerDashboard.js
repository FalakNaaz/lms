import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import "./TrainerDashboard.css";
import { useSelector } from "react-redux";
import SidebarCom from "../../../components/Sidebar/SidebarCom";
import AddNewCourseModal from "./AddNewCourseModel";
import axios from "axios";

const TrainerDashboard = () => {
  const sidebarToggle = useSelector((state) => state.sidebar);
  const [showEdit, setShowEdit] = useState(false);
  const [item, setItem] = useState("");

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  const fetchStudentData = async () => {
    const json = await axios.get(
      `http://localhost:1337/api/users/${localStorage.getItem(
        "currUserId"
      )}?populate=*`
    );
    setItem(json.data.training.toc_link_edit);
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  return (
    <>
      {sidebarToggle ? <SidebarCom /> : null}
      {showEdit && (
        <AddNewCourseModal showModal={showEdit} toggle={toggleEdit} />
      )}

      <div
        className="d-flex justify-content-md-evenly align-items-center"
        style={{ height: "76.65vh" }}
      >
        <div className="d-flex flex-wrap justify-content-md-between justify-content-md-end">
          <Link to={`/student-details`} className="CardBody">
            <div className="">
              <span className=".shortTitle">Performance</span>
              <h6>Student</h6>
            </div>
            {/* eslint-disable */}
            <IconButton className="icon_style">
              <FaceIcon fontSize="large" className="icon_style_card" />
            </IconButton>
          </Link>
        </div>
        <div className="d-flex flex-wrap justify-content-md-between justify-content-md-end">
          <a
            className="CardBody"
            style={{ textDecoration: "None" }}
            target="_blank"
            href={item}
          >
            <div>
              <span className=".shortTitle">Course</span>
              <h6>Curriculum</h6>
            </div>

            <IconButton
              className="icon_style"
              style={{ backgroundColor: "#002B5B" }}
            >
              <FormatListBulletedIcon
                fontSize="large"
                className="icon_style_card"
              />
            </IconButton>
          </a>
        </div>
      </div>
    </>
  );
};

export default TrainerDashboard;
