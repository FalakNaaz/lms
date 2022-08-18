import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar/SidebarComponent'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PersonIcon from '@material-ui/icons/Person'
import TouchAppIcon from '@material-ui/icons/TouchApp'
import MessageIcon from '@material-ui/icons/Message'
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../../redux/actions/LogoutActions'
import { useNavigate } from 'react-router-dom'
import { Divider, Typography, Paper, Button } from '@material-ui/core'
import { Container, Row, Col } from 'react-bootstrap';
import { fetchAllCourses } from '../../redux/actions/CoursesAction'
import { Link } from 'react-router-dom';
import './Dashboard.css'

function Dashboard() {
  const [pageValue, setPageValue] = useState(5);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courses = useSelector(state => state.courses.courses)

  useEffect(() => {
    const getCourses = async () => {
      await dispatch(fetchAllCourses());
    }
    getCourses();

  }, [])

  const handleLogout = (e) => {
   
    dispatch(Logout());
    navigate('/login');
    window.location.reload();
  }

  return (
    <div className='dashboard'>
      <div className="left__sidebar__dashboard">
        <Sidebar Icon={DashboardIcon} title="Dashboard" />
        <Sidebar Icon={PersonIcon} title="Profile" />
        <Sidebar Icon={TouchAppIcon} title="Grades" />
        <Sidebar Icon={MessageIcon} title="Messages" />
        <Sidebar
          Icon={SettingsApplicationsIcon}
          title="Courses"
        />
        <div onClick={handleLogout}>
          <Sidebar Icon={ExitToAppIcon} title="Logout" />
        </div>
      </div>
      <div className="main__body__dashboard">
        <Container fluid >
          <Row>
            <Col md={9} xs={12} sm={12}>
              <Container className="mt-5">
                <Paper className="d-flex justify-content-between align-items-center p-4">
                  <Typography variant="h6">Popular Courses</Typography>
                </Paper>
                <Divider />

                {courses.length > 0 &&
                  courses.slice(0, pageValue).map((val) => {
                    return (
                      // <CourseCard
                      //   key={Math.random(2) * 10}
                      //   title={val.courseDescription}
                      //   name={val.courseName}
                      //   id={val._id}
                      //   img={val.courseThumbnail}
                      // />
                        <div className='course__Card' key={val.id}>
                          <Link to={`/course`} className='container'>
                            <img className='image' src={val.attributes.Image.data.attributes.name} alt="" />
                            <div className='overlay'>
                              <p className='text'>View</p>
                            </div>
                          </Link>


                          <div className='course__content'>
                            <span>{val.attributes.startDate}</span>
                            <h5>{val.attributes.name}</h5>
                            <h5>{val.attributes.title}</h5>
                            <Button color='primary' variant="contained" >Enroll</Button><br />
                            <span>This is a course template which is to be used as the course kit for the teachers.</span>
                          </div>

                        </div>
                    );
                  })}

                <div className=" d-flex align-items-center my-2">
                  <Typography className="mr-3" variant="subtitle1">
                    Show
                  </Typography>
                  <select
                    className='dropdown__style'
                    onChange={(e) => setPageValue(e.target.value)}
                  >
                    {[5, 10, 20, "All"].map((val) => {
                      return <option key={val}>{val}</option>;
                    })}
                  </select>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Dashboard;