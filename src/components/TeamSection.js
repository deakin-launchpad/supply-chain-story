import React, { Component } from "react";
import p5 from "../images/application-darker-bg.jpg";
import profile from "../images/profile.png";
import "../App.css";

export default class TeamSection extends Component {
  render() {
    return (
      <div style={styles}>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="flex flex-column">
            <div className="">
              <table>
                <tr>
                  <td>
                    <div>
                      <ul className="" style={{ textAlign: "center" }}>
                        <img src={profile} style={{ width: "130px" }} />
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ul className="" style={{ textAlign: "center" }}>
                        <img src={profile} style={{ width: "130px" }} />
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ul className="" style={{ textAlign: "center" }}>
                        <img src={profile} style={{ width: "130px" }} />
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ul className="" style={{ textAlign: "center" }}>
                        <img src={profile} style={{ width: "130px" }} />
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div style={styles.margin10}>
                      <p style={styles.fontBold}>Dummy Name</p>
                      <ul style={styles.bulletPoint}>
                        <li>Qualification 1</li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div style={styles.margin10}>
                      <p style={styles.fontBold}>Dummy Name</p>
                      <ul style={styles.bulletPoint}>
                        <li>Qualification 1</li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div style={styles.margin10}>
                      <p style={styles.fontBold}>Dummy Name</p>
                      <ul style={styles.bulletPoint}>
                        <li>Qualification 1</li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div style={styles.margin10}>
                      <p style={styles.fontBold}>Dummy Name</p>
                      <ul style={styles.bulletPoint}>
                        <li>Qualification 1</li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
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
  backgroundImage: `url(${p5})`,
  backgroundSize: "cover",
  bulletPoint: {
    color: "#FFBC00",
    fontSize: "1.6rem"
  },
  margin10: {
    margin: "10px"
  }
};
