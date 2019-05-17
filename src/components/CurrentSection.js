import React, { Component } from "react";
import p3 from "../images/p3.jpg";
import current from "../images/current.png";

export default class CurrentSection extends Component {
  render() {
    return (
      <div style={styles}>
        <div className="row" style={{ justifyContent: "center" }}>
          <div
            className="col-md-8 col-md-offset-2"
            style={{ marginBottom: "30px" }}
          >
            <p className="content-heading no-margin" style={styles.fontBold}>
              Supply chain
            </p>
            <p className="content-text" style={styles.fontNormal}>
              Based on block chain
              <br />
              Increased transaction transperency
              <br />
              Current vulnerablities in security will be expensive or invasive
              in future
            </p>
          </div>
          <div class="col-sm-10">
            <img src={current} style={styles.maxImage} />
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
  backgroundImage: `url(${p3})`,
  backgroundSize: "cover",
  maxImage: {
    objectFit: "contain",
    maxWidth: "80%",
    maxHeight: "80%",
    padding: "0 5em"
  }
};
