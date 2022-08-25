import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import TouchAppIcon from "@material-ui/icons/TouchApp";
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
  const handleLogout = () => {
    dispatch(Logout());
    navigate("/login");
    window.location.reload();
  };
  const user = {
    role: localStorage.getItem("currUserRole"),
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
        <Link style={{ textDecoration: "none", color: "black" }} to="/profile">
          <PersonIcon style={{ color: "black" }} />
          Profile
        </Link>
      </div>
      {user.role === "Learner" && (
        <div style={{ display: "flex", padding: "10px 10px" }}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/assessment"
          >
            <TouchAppIcon style={{ color: "black" }} />
            Assessment
          </Link>
        </div>
      )}

      {user.role === "Learner" && (
        <div style={{ display: "flex", padding: "10px 10px" }}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/allcourses"
          >
            <SettingsApplicationsIcon style={{ color: "black" }} />
            Courses
          </Link>
        </div>
      )}

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
