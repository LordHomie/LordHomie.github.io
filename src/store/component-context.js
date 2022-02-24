import React, { useState } from "react";

const ComponentContext = React.createContext({
  componentNameFunction: () => {},
  componentName: "",
});

export const ComponentContextProvider = (props) => {
  const [componentName, setComponentName] = useState("");

  const componentNameHandler = (name) => {
    setTimeout(() => {
      setComponentName(name);
    }, 100);
  };

  return (
    <ComponentContext.Provider
      value={{
        componentNameFunction: componentNameHandler,
        componentNameVar: componentName,
      }}
    >
      {props.children}
    </ComponentContext.Provider>
  );
};

export default ComponentContext;
