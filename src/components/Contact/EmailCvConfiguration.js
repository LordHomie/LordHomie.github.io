import { Fragment, useState } from "react";
import classes from "./EmailCvConfiguration.module.css";
import ResumeModal from "../Modal/ResumeModal";

const EmailCvConfiguration = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    if (props.englishCV && props.russianCV) {
      setShowModal(true);
    }
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <a
        href={props.href}
        onClick={openModalHandler}
        target="_blank"
        rel="noreferrer"
      >
        <div
          onMouseOver={props.onMouseOver}
          onMouseLeave={props.onMouseLeave}
          className={`${classes["email-cv"]} ${
            props.isTextHovered && classes["text-hover"]
          }`}
        >
          <img src={props.src} alt="Email address" />
          <p>{props.title}</p>
        </div>
      </a>
      {showModal && (
        <ResumeModal
          englishCV={props.englishCV}
          russianCV={props.russianCV}
          onCloseModal={closeModalHandler}
        />
      )}
    </Fragment>
  );
};

export default EmailCvConfiguration;
