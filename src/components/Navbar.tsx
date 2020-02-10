import React from "react";
import classNames from "classnames";
import { INavbarProps } from "../interfaces";
import { GlobalStyle } from "../helpers/styled";

// Router
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";

// Material UI
import MenuIcon from "@material-ui/icons/Menu";
import { Divider, SwipeableDrawer } from "@material-ui/core";

// Styles
import "../styles/navbar.css";

const Navbar: React.SFC<INavbarProps> = () => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const homePage = useLocation().pathname === "/";
  const navbarClass = classNames({ navbar: true, "-light": !homePage });

  const handleClick = () => {
    history.push("/");
  };

  return (
    <>
      <GlobalStyle darkTheme={homePage} />
      <div className={navbarClass}>
        <span className="logo" onClick={handleClick}></span>
        <ul>
          <li>
            <Link to="/chart">Structure Chart</Link>
          </li>
        </ul>

        <MenuIcon className="icon-menu" onClick={() => setOpen(true)} />

        <SwipeableDrawer
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          <div className="mobile-drawer">
            <h4>MENU</h4>
            <Divider />
            <Link to="/chart">Structure Chart</Link>
            <Divider />
          </div>
        </SwipeableDrawer>
      </div>
    </>
  );
};

export default Navbar;
