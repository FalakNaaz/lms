import React from 'react'
import { useNavigate } from 'react-router-dom';

function StudentRoute({ children }) {
    const user = localStorage.getItem("currUserRole");
    const navigate = useNavigate();

    if (user && user === "Learner") {
        return children
    }else{
        setTimeout(()=>{
            navigate(-1);
        }, 1)
    }
}
export default StudentRoute