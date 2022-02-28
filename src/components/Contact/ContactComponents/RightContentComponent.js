import Button from "../../UI/Button";

import classes from "./RightContentComponent.module.css";

const RightContentComponent = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className={classes["right-content"]}>
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
  );
};

export default RightContentComponent;
