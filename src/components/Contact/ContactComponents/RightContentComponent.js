import { Fragment, useState, useReducer, useEffect, useRef } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import TextArea from "../../UI/TextArea";
import FormSent from "./FormSent";

import classes from "./RightContentComponent.module.css";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  return { value: "", isValid: false };
};

const subjectReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }
  return { value: "", isValid: false };
};

const nameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }
  return { value: "", isValid: false };
};

const textAreaReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }
  return { value: "", isValid: false };
};

const RightContentComponent = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [subjectState, dispatchSubject] = useReducer(subjectReducer, {
    value: "",
    isValid: null,
  });

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: null,
  });

  const [textAreaState, dispatchTextArea] = useReducer(textAreaReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: subjectIsValid } = subjectState;
  const { isValid: nameIsValid } = nameState;
  const { isValid: textAreaIsValid } = textAreaState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        emailIsValid && subjectIsValid && nameIsValid && textAreaIsValid
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, subjectIsValid, nameIsValid, textAreaIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const subjectChangeHandler = (event) => {
    dispatchSubject({ type: "USER_INPUT", val: event.target.value });
  };

  const nameChangeHandler = (event) => {
    dispatchName({ type: "USER_INPUT", val: event.target.value });
  };

  const textAreaChangeHandler = (event) => {
    dispatchTextArea({ type: "USER_INPUT", val: event.target.value });
  };

  const resetInputs = () => {
    dispatchEmail({ type: "USER_INPUT", val: "" });
    dispatchSubject({ type: "USER_INPUT", val: "" });
    dispatchName({ type: "USER_INPUT", val: "" });
    dispatchTextArea({ type: "USER_INPUT", val: "" });
  };

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

  const nameInputRef = useRef();
  const subjectInputRef = useRef();
  const emailInputRef = useRef();
  const textAreaInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      hideForm();
      resetInputs();
    } else if (!nameIsValid) {
      nameInputRef.current.focus();
    } else if (!subjectIsValid) {
      subjectInputRef.current.focus();
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      textAreaInputRef.current.focus();
    }
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
          <Input
            ref={nameInputRef}
            type="text"
            placeholder="Name..."
            value={nameState.value}
            onChange={nameChangeHandler}
          />
          <Input
            ref={subjectInputRef}
            type="text"
            placeholder="Subject..."
            value={subjectState.value}
            onChange={subjectChangeHandler}
          />
          <Input
            ref={emailInputRef}
            type="email"
            placeholder="Email..."
            value={emailState.value}
            onChange={emailChangeHandler}
          />
          <TextArea
            ref={textAreaInputRef}
            rows="4"
            cols="33"
            placeholder="Tell me about your project ideas..."
            value={textAreaState.value}
            onChange={textAreaChangeHandler}
          />
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
