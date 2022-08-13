import React from 'react'
// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function StudentRoute({ children }) {
    
    // const data = useSelector((state) => state.userLogin);
    const currUser = localStorage.getItem("currUser");
    console.log('in student route ', currUser)
    if (currUser)
    {
        return children
    }
    return <Navigate to='/login' />


}

export default StudentRoute