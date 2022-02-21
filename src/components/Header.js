import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.headerTitle}>LordHomie</h1>
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
    </div>
  );
};

export default Header;
