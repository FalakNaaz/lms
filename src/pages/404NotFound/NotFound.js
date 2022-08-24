import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import Styles from "./Notfound.module.css";

const NotFound = () => {
  return (
    <div className={Styles.main__div}>
      <Typography className="text-center text-light" variant="h2">
        Oops!! <br />
        404 Not Found
      </Typography>
      <Button className='my-3' variant="contained" color="primary">
        <Link to="/">
          Back to Home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
