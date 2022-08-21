import React from 'react'
import { Navigate } from 'react-router-dom';

function StudentRoute({ children }) {
    const user = localStorage.getItem("currUserRole");
    if (user && user === "Learner") {
        return children
    }
    return user ? window.location.reload : <Navigate to='/login' />
}
export default StudentRoute