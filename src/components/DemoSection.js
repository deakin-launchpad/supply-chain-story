import React, { Component } from "react";
import p5 from "../images/demo-bg.png";
import "../App.css";

export default class DemoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      close: false
    };
  }
  fullScreen = () => {
    this.setState({ show: !this.state.show, close: !this.state.close  });
  };
  render() {
    console.log('[SHOW]', this.state)
    return (
      <div style={styles}>
        <div className="full-screen relative">
          <iframe
            id="demo-frame2"
            src="http://54.42.15.246:3000"
            className={`demo demo2 `}
            style={this.state.show ? framStyle : {}}
            title="launch-demo"
            onClick={this.fullScreen}
          />
          <a
            id="show-demo2"
            href="#demo"
            className={`demo-link demo-link2 page-scroll ${
              this.state.show ? "zoom-in-right-fade-out" : ""
              }`}
            onClick={this.fullScreen}
          >
            Launch Demo
          </a>
          {this.state.close ? <a
            id="hide-demo2"
            href="http://10.137.0.157:4001"
            className="hide-demo hidden-button flex flex-center on-top"
            style={{ transform: "translateX(-100%)" }}
            onClick={this.fullScreen}
          >
            Close
          </a>:null}
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
  backgroundImage: `url(${p5})`,
  backgroundSize: "cover"
};

const framStyle = {
  position: "fixed",
  zIndex: 1,
  left: "0px",
  top: "0px",
  transform: "scale(1)"
};
