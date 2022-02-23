import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavLinksMobile from "./NavLinksMobile";

import classes from "./Header.module.css";
import openMenu from "../assets/openMenu.png";
import closeMenu from "../assets/closeMenu.png";

const Header = () => {
  let navigate = useNavigate();

  const homePageHandler = () => {
    navigate("/");
  };

  const [dropdownBtnState, setDropdownBtnDtate] = useState(false);
  const [navBarBtnSrc, setNavBarBtnSrc] = useState(openMenu);

  const onCloseDropdown = () => {
    setDropdownBtnDtate(false);
    setNavBarBtnSrc(openMenu);
  };
  const onShowDropdown = () => {
    setDropdownBtnDtate(true);
    setNavBarBtnSrc(closeMenu);
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
          onShowNavLinksMobile={dropdownBtnState}
          onClose={onCloseDropdown}
        />
        <div className={classes.headerTitle}>
          <h1 onClick={homePageHandler}>LordHomie</h1>
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
