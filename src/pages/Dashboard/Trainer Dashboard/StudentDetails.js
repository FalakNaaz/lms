import React, { useEffect, useState } from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";
import AddNewCourseModal from "../../../components/Modal/AddNewCourseModal";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import SidebarCom from "../../../components/Sidebar/SidebarCom";
function StudentDetails() {
  const [studentData, setStudentData] = useState([]);
  const [trainerData, setTrainerData] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [item, setItem] = useState(-1);

  const sidebarToggle = useSelector((state) => state.sidebar);

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  const fetchStudentData = async () => {
    const json = await axios.get("http://localhost:1337/api/users?populate=*");
    setStudentData(
      json.data.filter((item) => {
        if (
          item?.role?.name === "Learner" &&
          item?.training?.name === trainerData
        ) {
          console.warn(item);
          return item;
        }
        return "";
      })
    );
  };
  const fetchTrainerData = async () => {
    const json = await axios.get("http://localhost:1337/api/users?populate=*");
    json.data.filter((item) => {
      if (item.email === localStorage.getItem("currUserEmail")) {
        setTrainerData(item.training.name);
      }
      return "";
    });
  };
  useEffect(() => {
    fetchTrainerData();
    fetchStudentData();
    /* eslint-disable */
  }, [trainerData, studentData]);

  return (
    <>
      {sidebarToggle ? <SidebarCom /> : null}

      <TableContainer component={Paper} style={{ minHeight: "70vh" }}>
        {showEdit && (
          <AddNewCourseModal
            showModal={showEdit}
            toggle={toggleEdit}
            item={item}
          />
        )}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Enrolled In</TableCell>
              <TableCell>Assessment Score</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentData.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item?.email}</TableCell>
                <TableCell>{item?.username}</TableCell>
                <TableCell>{item?.training?.name}</TableCell>
                <TableCell>{item?.assessmentScore}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      toggleEdit();
                      setItem(item.id);
                    }}
                  >
                    <EditIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default StudentDetails;
