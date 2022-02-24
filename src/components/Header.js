import { Fragment, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavLinksMobile from "./NavLinksMobile";
import ComponentContext from "../store/component-context";

import classes from "./Header.module.css";
import openMenu from "../assets/openMenu.png";

const Header = (props) => {
  const componentNameCtx = useContext(ComponentContext);

  let navigate = useNavigate();
  const homePageHandler = () => {
    if (componentNameCtx.componentNameVar === "Home") {
      return;
    }
    navigate("/");
  };

  const [dropdownBtnState, setDropdownBtnDtate] = useState(false);

  const onCloseDropdown = () => {
    setDropdownBtnDtate(false);
  };
  const onShowDropdown = () => {
    setDropdownBtnDtate(true);
  };

  const dropdownBtnHandler = () => {
    if (dropdownBtnState) {
      onCloseDropdown();
      return;
    }
    onShowDropdown();
  };

  return (
    <Fragment>
      <div className={`${classes.header} ${classes["header-bottom"]}`}>
        <NavLinksMobile
          homePage={props.homePage}
          aboutPage={props.aboutPage}
          portfolioPage={props.portfolioPage}
          contactPage={props.contactPage}
          onShowNavLinksMobile={dropdownBtnState}
          onClose={onCloseDropdown}
        />
        <div className={classes.headerTitle}>
          <h1 onClick={homePageHandler}>LordHomie</h1>
        </div>
        <div className={classes.navLinks}>
          <div>
            <h3>{props.homePage}</h3>
          </div>
          <div>
            <h3>{props.aboutPage}</h3>
          </div>
          <div>
            <h3>{props.portfolioPage}</h3>
          </div>
          <div>
            <h3>{props.contactPage}</h3>
          </div>
        </div>
        <div className={classes["dropdown-btn"]}>
          <img
            src={openMenu}
            alt="navbar menu button"
            onClick={dropdownBtnHandler}
            className={dropdownBtnState ? classes["rotate-btn"] : ""}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
