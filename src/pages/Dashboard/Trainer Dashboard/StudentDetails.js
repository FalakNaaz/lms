import React, { useEffect, useState } from 'react'
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';
import ModalComponent from '../../../components/Modal/ModalComponent';
import AddNewCourseModal from '../../../components/Modal/AddNewCourseModal';
import { Button } from '@material-ui/core';

function StudentDetails() {
    const [studentData, setStudentData] = useState([]);
    const [showEdit, setShowEdit] = useState(false);

    const toggleEdit = () => {
        setShowEdit(!showEdit);
    }

    const fetchStudentData = async () => {
        const json = await axios.get('http://localhost:1337/api/users?populate=*')
        setStudentData(json.data.filter((item)=>item.role.name==='Learner'))
    }
    useEffect(() => {
        fetchStudentData();
    }, []);
    
    console.log(studentData);
    return (
        <TableContainer component={Paper}>
            {showEdit &&
                <AddNewCourseModal showModal={showEdit} toggle={toggleEdit} />
            }
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Enrolled In</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        studentData.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.username}</TableCell>
                                <TableCell>{item.training.name}</TableCell>
                                <TableCell>
                                    <Button onClick={toggleEdit}>
                                        <EditIcon />
                                    </Button>
                                </TableCell>

                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default StudentDetails


