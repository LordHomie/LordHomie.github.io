import classes from "./NavLinksMobile.module.css";

const NavLinksMobile = (props) => {
  const isDropdownBtnState = props.onShowNavLinksMobile;

  return (
    <section
      className={`${classes.hide} ${
        isDropdownBtnState ? classes["navLinks-mobileContent"] : ""
      }`}
    >
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
    </section>
  );
};

export default NavLinksMobile;
