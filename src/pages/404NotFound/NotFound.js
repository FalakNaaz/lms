import { Button, Typography } from "@material-ui/core";
import { useNavigate} from "react-router-dom";
import React from "react";
import Styles from "./Notfound.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={Styles.main__div}>
      <Typography className="text-center text-light" variant="h2">
        Oops!! <br />
        404 Not Found
      </Typography>
      <Button className='my-3' variant="contained" color="primary" onClick={()=>navigate("/")} >
          Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
