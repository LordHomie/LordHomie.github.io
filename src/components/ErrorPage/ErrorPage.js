import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

import errorIcon from "../../assets/error-page-icon.png";
import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <div className={`${classes.error} ${classes.animation}`}>
      <section className={classes["left-content"]}>
        <img src={errorIcon} alt="404 page not found" />
      </section>
      <section className={classes["right-content"]}>
        <span>Page Not Found</span>
        <Button onClick={navigateHandler}>Back to Home</Button>
      </section>
    </div>
  );
};

export default ErrorPage;
