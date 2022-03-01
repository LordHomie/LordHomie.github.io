import { Fragment, useState } from "react";
import Button from "../../UI/Button";
import FormSent from "./FormSent";

import classes from "./RightContentComponent.module.css";

const RightContentComponent = () => {
  const [isformHidden, setIsFormHidden] = useState(false);
  const [isSentIconHidden, setIsSentIconHidden] = useState(true);

  const hideForm = () => {
    setIsFormHidden(true);
    setIsSentIconHidden(false);
  };

  const showForm = () => {
    setIsFormHidden(false);
    setIsSentIconHidden(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    hideForm();
  };

  return (
    <Fragment>
      <section
        className={`${classes["right-content"]} ${
          isformHidden ? classes.hide : ""
        }`}
      >
        <h4 className={classes["form-title"]}>Send me a message</h4>
        <form onSubmit={formSubmitHandler}>
          <input type="text" placeholder="Name..." />
          <input type="text" placeholder="Subject..." />
          <input type="email" placeholder="Email..." />
          <textarea
            rows="4"
            cols="33"
            placeholder="Tell me about your project ideas..."
          ></textarea>
          <Button className={classes["contact-button"]}>Send message</Button>
        </form>
      </section>
      <FormSent
        isSentIconHidden={isSentIconHidden}
        showForm={showForm}
        hideClass={classes.hide}
      />
    </Fragment>
  );
};

export default RightContentComponent;
