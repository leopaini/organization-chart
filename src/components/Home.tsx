import React from "react";
import { Button } from "@material-ui/core";
import { IHomeProps } from "../interfaces";
import { useHistory } from "react-router-dom";

// Styles
import "../styles/home.css";
import logo from "../img/home.png";

const IHome: React.SFC<IHomeProps> = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/chart");
  };

  return (
    <>
      <div className="home">
        <div className="message">
          <h5>Create a visual guide to</h5>
          <h6>your company structure</h6>

          <span className="actions">
            <Button
              variant="contained"
              className="primary"
              disableElevation
              onClick={handleClick}
            >
              Get Started
            </Button>
          </span>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="triangle"></div>
    </>
  );
};

export default IHome;
