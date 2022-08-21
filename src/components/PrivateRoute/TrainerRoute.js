import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function TrainerRoute({ children }) {
    const user = localStorage.getItem("currUserRole");
    const navigate = useNavigate();
    if (user && user === "Trainer") {
        return children
    }
    return user?window.location.reload:<Navigate to='/login' />
}

export default TrainerRoute