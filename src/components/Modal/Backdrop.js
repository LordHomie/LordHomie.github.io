import classes from "./Backdrop.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const BackDropElement = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseBackdrop} />;
};

const Backdrop = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDropElement onCloseBackdrop={props.onClose} />,
        document.getElementById("backDrop-root")
      )}
    </Fragment>
  );
};

export default Backdrop;
