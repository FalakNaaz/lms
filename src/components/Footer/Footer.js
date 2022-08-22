import React from "react";
import "../Footer/Footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>LearniGo.com</h3>
        <p>
          LearniGo.com is a platform where the corporate organization engage with us to make their employee skillful in the trending and latest technology so that they can start early start their career with the project deployment.
        </p>
        <ul className="socials">
          <li>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-google-plus"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin-square"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="#">LearniGo.com</a>{" "}
        </p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
