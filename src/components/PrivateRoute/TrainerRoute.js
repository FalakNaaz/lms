
import { useNavigate } from 'react-router-dom';

function TrainerRoute({ children }) {
    const user = localStorage.getItem("currUserRole");
    const navigate = useNavigate();
    if (user === "Trainer") {
        return children
    }else{
        setTimeout(()=>{
            navigate(-1);
        }, 1)
    }
}
export default TrainerRoute