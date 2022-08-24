import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Profile/Profile.css";
import { getProfileData } from "../../redux/actions/ProfileAction";
import SidebarCom from "../../components/Sidebar/SidebarCom";

function Profile() {
  const dispatch = useDispatch();
  const sidebarToggle = useSelector((state) => state.sidebar);

  const mycurrentuserdata = useSelector(
    (state) => state.profile.userProfileData
  );
  useEffect(() => {
    (async () =>
      await dispatch(getProfileData(localStorage.getItem("currUserId"))))();
    /* eslint-disable */
  }, [sidebarToggle]);
  return (
    <div
      className="page-content page-container"
      id="page-content"
      style={{ height: "90vh" }}
    >
      {sidebarToggle ? <SidebarCom /> : null}
      <div className="padding">
        <div className="row d-flex justify-content-center">
          <div
            className="col-xl-6 col-md-12"
            style={{ height: "90vh", width: "80vw" }}
          >
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white">
                    <div className="m-b-25">
                      <img
                        src="https://img.icons8.com/bubbles/100/000000/user.png"
                        className="img-radius"
                        alt="User-Profile"
                      />
                    </div>
                    <h3 className="f-w-600">{mycurrentuserdata.fullName}</h3>
                    <h6>Your are: {mycurrentuserdata.role?.name}</h6>
                    <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                      Your Information
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">
                          {mycurrentuserdata.email}
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Username</p>
                        <h6 className="text-muted f-w-400">
                          {mycurrentuserdata.username}
                        </h6>
                      </div>
                    </div>
                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                      Course Information
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Your Course</p>
                        <h6 className="text-muted f-w-400">
                          {mycurrentuserdata.training?.name}
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">You Enrolled on</p>
                        <h6 className="text-muted f-w-400">
                          {mycurrentuserdata.training?.updatedAt.slice(0, 10)}
                        </h6>
                      </div>
                    </div>
                    <ul className="social-link list-unstyled m-t-40 m-b-10">
                      <li>
                        <a
                          href="#!"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title=""
                          data-original-title="facebook"
                          data-abc="true"
                        >
                          <i
                            className="mdi mdi-facebook feather icon-facebook facebook"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title=""
                          data-original-title="twitter"
                          data-abc="true"
                        >
                          <i
                            className="mdi mdi-twitter feather icon-twitter twitter"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title=""
                          data-original-title="instagram"
                          data-abc="true"
                        >
                          <i
                            className="mdi mdi-instagram feather icon-instagram instagram"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
