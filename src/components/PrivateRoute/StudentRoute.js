import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function StudentRoute({ children }) {
    const data = useSelector((state) => state.user);
    if (data.user.email)
    {
        return children
    }
    return <Navigate to='/login' />


}

export default StudentRoute