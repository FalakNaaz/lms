import React, { useEffect, useState } from 'react'
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import ModalComponent from '../../../components/Modal/ModalComponent';

function AdminDashboard() {
    const [studentData, setStudentData] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }
    
    const closeModal = () => {
        setShowModal(false);
    }

    const fetchStudentData = async () => {
        const json = await axios.get('http://localhost:3000/users')
        setStudentData(json.data)
    }
    useEffect(()=>{
        fetchStudentData();
        console.log(studentData);
    },[]);

  return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Date of Birth</TableCell>
                    <TableCell>Enroll On</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    studentData.map((item)=>(
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.username}</TableCell>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.id}</TableCell>
                            <TableCell onClick={openModal}><DeleteIcon/></TableCell>

                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default AdminDashboard


