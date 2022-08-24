import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import "./TrainerDashboard.css";
import { useSelector } from "react-redux";
import SidebarCom from "../../../components/Sidebar/SidebarCom";

function TrainerDashboard() {
  const sidebarToggle = useSelector((state) => state.sidebar);
  return (
    <div className="d-flex" style={{ height: "76.65vh" }}>
      {sidebarToggle ? <SidebarCom /> : null}
      <div className="d-flex flex-wrap justify-content-md-between justify-content-md-end">
        <Link to={`/student-details`} className="CardBody">
          <div className="">
            <span className=".shortTitle">Performance</span>
            <h6>Student</h6>
          </div>

          <IconButton className="icon_style">
            <PersonIcon fontSize="large" className="icon_style_card" />
          </IconButton>
        </Link>
      </div>
      {/* <div className="d-flex flex-wrap justify-content-md-between justify-content-md-end">
                <Link to={``} className="CardBody">
                    <div className="">
                        <span className='.shortTitle'>Enrolled</span>
                        <h6>Course</h6>
                    </div>

                    <IconButton className="icon_style" >
                        <TouchAppIcon fontSize="large" className='icon_style_card' />
                    </IconButton>
                </Link>
            </div> */}
    </div>
  );
}

export default TrainerDashboard;
