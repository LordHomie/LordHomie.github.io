import { Fragment, useState } from "react";
import NavLinksMobile from "./NavLinksMobile";

import classes from "./Header.module.css";
import openMenu from "../assets/openMenu.png";
import closeMenu from "../assets/closeMenu.png";

const Header = () => {
  const [dropdownBtnState, setDropdownBtnDtate] = useState(false);
  const [navBarBtnSrc, setNavBarBtnSrc] = useState(openMenu);

  const dropdownBtnHandler = () => {
    if (dropdownBtnState) {
      setDropdownBtnDtate(false);
      setNavBarBtnSrc(openMenu);
      return;
    }
    setDropdownBtnDtate(true);
    setNavBarBtnSrc(closeMenu);
  };

  return (
    <Fragment>
      <div className={`${classes.header} ${classes["header-bottom"]}`}>
        <NavLinksMobile onShowNavLinksMobile={dropdownBtnState} />
        <div className={classes.headerTitle}>
          <h1>LordHomie</h1>
        </div>
        <div className={classes.navLinks}>
          <div>
            <h3>Home</h3>
          </div>
          <div>
            <h3>About</h3>
          </div>
          <div>
            <h3>Portfolio</h3>
          </div>
          <div>
            <h3>Contact</h3>
          </div>
        </div>
        <div className={classes["dropdown-btn"]}>
          <img
            src={navBarBtnSrc}
            alt="navbar menu button"
            onClick={dropdownBtnHandler}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
