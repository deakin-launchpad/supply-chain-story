import React, { Component } from "react";
import p2 from "../images/p2.jpg";
import p2Current from "../images/p2-current.jpg";

export default class HomeSection extends Component {
  render() {
    return (
      <div style={styles}>
        <div className="row" style={{ justifyContent: "center" }}>
          <div
            className="col-md-8 col-md-offset-2"
            style={{ marginBottom: "30px" }}
          >
            <p className="content-heading no-margin" style={styles.fontBold}>
              Accurate suppy chain
            </p>
            <p className="content-text" style={styles.fontNormal}>
              Based on Block chain
            </p>
          </div>
          <div class="col-sm-10">
            <img src={p2Current} style={styles.maxImage} />
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
  backgroundImage: `url(${p2})`,
  backgroundSize: "cover",
  maxImage: {
    objectFit: "contain",
    maxWidth: "100%",
    maxHeight: "100%"
  }
};
