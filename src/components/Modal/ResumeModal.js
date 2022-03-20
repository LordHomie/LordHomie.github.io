import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./ResumeModal.module.css";

const ResumeBackdrop = (props) => {
  return (
    <div className={classes["resume-backdrop"]} onClick={props.onClick}></div>
  );
};

const ResumeOverlay = (props) => {
  return (
    <div className={`${classes["resume-modal"]}`}>
      <section>
        <a href={props.englishCV} target="_blank" rel="noreferrer">
          English
        </a>
      </section>
      <section>
        <a href={props.russianCV} target="_blank" rel="noreferrer">
          Russian
        </a>
      </section>
    </div>
  );
};

const ResumeModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ResumeBackdrop onClick={props.onCloseModal} />,
        document.getElementById("backDrop-root")
      )}
      {ReactDOM.createPortal(
        <ResumeOverlay
          englishCV={props.englishCV}
          russianCV={props.russianCV}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ResumeModal;
