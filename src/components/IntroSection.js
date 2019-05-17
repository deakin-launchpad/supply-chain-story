import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionLink } from "react-scroll-section";
import bgIntro from "../images/intro-bg.png";

export default class IntroSection extends Component {
  render() {
    return (
      <div style={styles}>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-md-8 col-md-offset-2">
            <p className="content-heading no-margin" style={styles.fontBold}>
              MEMORY RECALL
            </p>
            <p className="content-text" style={styles.fontNormal}>
              Challenge your brain to remember better
            </p>
            <SectionLink section="history">
              {link => (
                <a
                  href
                  onClick={link.onClick}
                  selected={link.isSelected}
                  class="btn btn-circle page-scroll"
                >
                  <FontAwesomeIcon
                    icon="angle-double-down"
                    style={{ fontSize: "40px" }}
                  />
                </a>
              )}
            </SectionLink>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  color: "white",
  minHeight: "100vh",
  display: "flex",
  margin: "auto",
  flex: "0 1 auto",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  fontSize: "4em",
  scrollBehavior: "smooth",
  position: "relative",
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgIntro})`,
  backgroundSize: "cover",
  fontNormal: {
    fontSize: "2.2rem"
  },
  fontBold: {
    fontSize: "2.2rem",
    fontWeight: "bold"
  }
};
