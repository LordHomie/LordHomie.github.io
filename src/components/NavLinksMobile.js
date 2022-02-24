import Backdrop from "./Modal/Backdrop";
import classes from "./NavLinksMobile.module.css";
import SocialMediaFooter from "./SocialMediaFooter";

const NavLinksMobile = (props) => {
  const isDropdownBtnState = props.onShowNavLinksMobile;
  return (
    <section
      className={`${classes.hide} ${
        isDropdownBtnState ? classes["navLinks-mobileContent"] : ""
      }`}
    >
      <div className={classes["social-media"]}>
        <SocialMediaFooter />
      </div>
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
      {isDropdownBtnState && <Backdrop onClose={props.onClose} />}
    </section>
  );
};

export default NavLinksMobile;
