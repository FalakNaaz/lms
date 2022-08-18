import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Avatar, Button, IconButton } from "@material-ui/core";
import "./Header.css";
import SettingsIcon from "@material-ui/icons/Settings";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ChatIcon from "@material-ui/icons/Chat";
import ClearIcon from "@material-ui/icons/Clear";
import NotesIcon from "@material-ui/icons/Notes";
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from "react-redux/es/exports";
import SidebarAction from "../../redux/actions/SidebarAction";

const Header = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const user = {
    role: "Student",
  };
  const toggleClose = () => {
    setToggle(false);
  };

  const sidebarHandler = () =>{
    dispatch(SidebarAction());
  }
  return (
    <div className="header">
      <div >
          <MenuIcon onClick={sidebarHandler} style={{ fontSize: 40 ,margin: "0px 40px 8px 30px"}}/>
      </div>
      <div className="left__header">
        <Link to="/">
          <h4>LMS</h4>
        </Link>
      </div>
      <div
        className={`middle__header ${
          toggle ? `show__sidebar__nav` : `sidebar__nav`
        }`}
      >
        {user && (
          <ul>
            {user.role === "Teacher" && (
              <>
                {" "}
                <li>
                  <NavLink onClick={toggleClose} to="/">
                    Dashboard
                  </NavLink>
                </li>
              </>
            )}
            {user.role === "Admin" && (
              <>
                {" "}
                <li>
                  <NavLink onClick={toggleClose} to="/">
                    Dashboard
                  </NavLink>
                </li>
                <li className="admin__toggle__menu">
                  <NavLink onClick={toggleClose} to="/">
                    Course-Info
                  </NavLink>
                </li>
                <li className="admin__toggle__menu">
                  <NavLink onClick={toggleClose} to="/">
                    Student-Info
                  </NavLink>
                </li>
                <li className="admin__toggle__menu">
                  <NavLink onClick={toggleClose} to="/">
                    Teacher-Info
                  </NavLink>
                </li>
              </>
            )}
            {user.role === "Student" && (
              <>
                <li>
                  <NavLink onClick={toggleClose} to="/">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                </li>
                <li>
                  <NavLink onClick={toggleClose} to="/">
                    Library
                  </NavLink>
                </li>{" "}
              </>
            )}

            <li>
              <Link onClick={toggleClose} to="/">
                Profile
              </Link>
            </li>
            <li>
              <NavLink onClick={toggleClose} to="/allcourses">
                All Courses
              </NavLink>
            </li>

            {user.role === "Teacher" ? (
              <li className="">
                <Button>Logout</Button>
              </li>
            ) : (
              <li className="logout__button">
                <Button>Logout</Button>
              </li>
            )}
          </ul>
        )}
      </div>
      {user ? (
        <div className="right__header">
          <IconButton>
            <VisibilityOffIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <Link to="/profile">
            <Avatar>
              {localStorage.getItem("currUser")?.charAt(0).toUpperCase() ?? (
                <PersonIcon />
              )}
            </Avatar>
          </Link>
        </div>
      ) : (
        <div className="d-flex list-unstyled">
          <li className="mr-3">
            <NavLink to="/Login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/">Register</NavLink>
          </li>
        </div>
      )}

      {user ? (
        <div className="menu__toggle__icon mr-auto">
          <IconButton onClick={() => setToggle(!toggle)}>
            {!toggle ? (
              <NotesIcon fontSize="large" />
            ) : (
              <ClearIcon fontSize="large" />
            )}
          </IconButton>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
