import React, { Component } from "react";
import p4 from "../images/p4.jpg";
import proposed from "../images/proposed.png";

export default class ProposeSection extends Component {
  render() {
    return (
      <div style={styles}>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-md-8 col-md-offset-2">
            <p className="content-heading no-margin" style={styles.fontBold}>
              Proposed Patient Journey
            </p>
            <p className="content-text" style={styles.fontNormal}>
              Different Modules as a part of app
              <br /> Available healthy recipes
              <br /> Interactive quizzes
            </p>
          </div>
          <div class="col-sm-10">
            <img src={proposed} style={styles.maxImage} />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  margin: "auto",
  flex: "0 1 auto",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  fontSize: "4em",
  scrollBehavior: "smooth",
  position: "relative",
  fontNormal: {
    fontSize: "2.2rem",
    color: "white"
  },
  fontBold: {
    color: "white",
    fontSize: "2.2rem",
    fontWeight: "bold"
  },
  backgroundImage: `url(${p4})`,
  backgroundSize: "cover",
  maxImage: {
    objectFit: "contain",
    maxWidth: "80%",
    maxHeight: "80%",
    padding: "0 5em"
  }
};
