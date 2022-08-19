import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import MessageIcon from "@material-ui/icons/Message";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Logout } from "../../redux/actions/LogoutActions";
import "../../pages/Dashboard/Dashboard.css";

import React from "react";
import { Link } from "react-router-dom";
function SidebarCom({ Icon, title }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = (e) => {
    dispatch(Logout());
    navigate("/login");
  };
  return (
    <div className="left__sidebar__dashboard">
      <div style={{ display: "flex", padding: "10px 10px" }}>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <DashboardIcon style={{ color: "black" }} />
          Dashboard
        </Link>
      </div>

      <div style={{ display: "flex", padding: "10px 10px" }}>
        <Link style={{ textDecoration: "none", color: "black" }} to="">
          <PersonIcon style={{ color: "black" }} />
          Profile
        </Link>
      </div>

      <div style={{ display: "flex", padding: "10px 10px" }}>
        <Link style={{ textDecoration: "none", color: "black" }} to="/assessment">
          <TouchAppIcon style={{ color: "black" }} />
          Grades
        </Link>
      </div>

      <div style={{ display: "flex", padding: "10px 10px" }}>
        <Link style={{ textDecoration: "none", color: "black" }} to="">
          <MessageIcon style={{ color: "black" }} />
          Messages
        </Link>
      </div>

      <div style={{ display: "flex", padding: "10px 10px" }}>
        <Link style={{ textDecoration: "none", color: "black" }} to="">
          <SettingsApplicationsIcon style={{ color: "black" }} />
          Courses
        </Link>
      </div>

      <div style={{ display: "flex", padding: "10px 10px" }}>
        <div onClick={handleLogout}>
          <Link style={{ textDecoration: "none", color: "black" }} to="">
            <ExitToAppIcon style={{ color: "black" }} />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SidebarCom;
