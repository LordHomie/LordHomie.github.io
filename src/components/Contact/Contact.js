import { useContext } from "react";
import ComponentContext from "../../store/component-context";

const Contact = () => {
  const componentNameCtx = useContext(ComponentContext);
  Contact.displayName = "Contact";
  const componentIdentifier = Contact.displayName;
  componentNameCtx.componentNameFunction(componentIdentifier);

  return <h1>Contact component</h1>;
};

export default Contact;
