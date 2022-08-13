import React from 'react'
import { Navigate } from 'react-router-dom';

function StudentRoute({ children }) {
    const currUser = localStorage.getItem("currUser");
    if (currUser)
    {
        return children
    }
    return <Navigate to='/login' />
}
export default StudentRoute