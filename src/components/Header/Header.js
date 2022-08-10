import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ChatIcon from "@material-ui/icons/Chat";
import SettingsIcon from "@material-ui/icons/Settings";
import { Avatar, Button, IconButton } from "@material-ui/core";
import "./Header.css";
import ClearIcon from "@material-ui/icons/Clear";
import NotesIcon from "@material-ui/icons/Notes";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const user = {
    role:'Teacher',
  };
  const toggleClose=()=>{
    setToggle(false)
    
  }
  return (
    <div className="header">
      <div className="left__header">
        <Link to="/">
          <img
            src=""
            alt=""
          />
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
            {
              user.role==="Teacher" && <> <li>
              <NavLink onClick={toggleClose} to="/">Dashboard</NavLink>
            </li>
            
           

            </>
            
            }
            {
              user.role==="Admin" && <> <li >
              <NavLink onClick={toggleClose} to="/">Dashboard</NavLink>
            </li>
            <li className="admin__toggle__menu">
              <NavLink onClick={toggleClose} to="/">Course-Info</NavLink>
            </li>
            <li className="admin__toggle__menu">
              <NavLink onClick={toggleClose} to="/">Student-Info</NavLink>
            </li>
            <li className="admin__toggle__menu">
              <NavLink onClick={toggleClose} to="/">Teacher-Info</NavLink>
            </li>
            
            </>
            }
            {
              user.role==="Student" &&<><li>
              <NavLink onClick={toggleClose} to="/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink onClick={toggleClose} to="/">UCAM</NavLink>
            </li>

            <li>
              <NavLink onClick={toggleClose} to="/">LIBRARY</NavLink>
            </li> </> 
            }
            
            <li>
              <Link onClick={toggleClose} to="/">Profile</Link>
            </li>
            <li>
              <NavLink onClick={toggleClose} to="/">All Courses</NavLink>
            </li>

            {
              user.role==="Teacher" ?   <li className="">
              <Button>
                Logout
              </Button>
            </li> :  <li className="logout__button">
              <Button>
                Logout
              </Button>
            </li>

            }
           
           

           
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
            <Avatar>R</Avatar>
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
