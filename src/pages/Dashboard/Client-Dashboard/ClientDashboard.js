import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import "./ClientDashboard.css";
import { useSelector } from "react-redux";
import SidebarCom from "../../../components/Sidebar/SidebarCom";
import PersonIcon from "@material-ui/icons/Person";
import FaceIcon from '@material-ui/icons/Face';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

function ClientDashboard() {

  const sidebarToggle = useSelector((state) => state.sidebar);

  return (
    <>
      {sidebarToggle ? <SidebarCom /> : null}
      <div className="d-flex justify-content-md-evenly align-items-center" style={{ height: "76.65vh" }}>
        <div className="d-flex flex-wrap justify-content-md-between justify-content-md-end">
          <Link to={`/all-student-details`} className="CardBody">
            <div className="">
              <span className=".shortTitle">Performance</span>
              <h6>Student</h6>
            </div>

            <IconButton className="icon_style">
              <FaceIcon fontSize="large" className="icon_style_card" />
            </IconButton>
          </Link>
        </div>
        <div className="d-flex flex-wrap justify-content-md-between justify-content-md-end">
          <Link to={`/trainer-details`} className="CardBody">
            <div className="">
              <span className=".shortTitle">Technical</span>
              <h6>Trainers</h6>
            </div>

            <IconButton className="icon_style">
              <PersonIcon fontSize="large" className="icon_style_card" />
            </IconButton>
          </Link>
        </div>
        <div className="d-flex flex-wrap justify-content-md-between justify-content-md-end">
          <Link to={`/allcourse`} className="CardBody">
            <div className="">
              <span className=".shortTitle">Technical</span>
              <h6>Courses</h6>
            </div>

            <IconButton className="icon_style">
              <LibraryBooksIcon fontSize="large" className="icon_style_card" />
            </IconButton>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ClientDashboard;
