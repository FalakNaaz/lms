import React, { useEffect, useState } from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";
import Paper from "@material-ui/core/Paper";

function CourseDetails() {
  const [courseData, setCourseData] = useState([]);

  const fetchCourseData = async () => {
    const json = await axios.get("http://localhost:1337/api/trainings");
    setCourseData(json.data.data.map((item) => item.attributes.name));
  };
  useEffect(() => {
    fetchCourseData();
  }, []);

  console.log(courseData);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Courses</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courseData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CourseDetails;
