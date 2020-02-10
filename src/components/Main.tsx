import React from "react";
import { IMain } from "../interfaces";
import { Container } from "@material-ui/core";

// Components
import Navbar from "./Navbar";

// Styles
import "../styles/common.css";

const Main: React.SFC<IMain> = props => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      {props.children}
    </Container>
  );
};

export default Main;
