import React from 'react'
import { Navigate } from 'react-router-dom';

function ClientRoute({ children }) {
    const user = localStorage.getItem("currUserRole");
    if (user && user === "Client") {
        return children
    }
    return user ? window.location.reload : <Navigate to='/login' />
}
export default ClientRoute