import React, { Component } from "react";
import { Navbar, Button, ButtonToolbar } from "react-bootstrap";
import title from "../images/logo-title.png";

export default class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Navbar
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            width: "1905px !important"
          }}
        >
          <div className="container">
            <Navbar.Brand href="#home">
              <img
                src={title}
                width="140"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <ButtonToolbar>
              <Button
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  fontWeight: "bold"
                }}
              >
                History
              </Button>
              <Button
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  fontWeight: "bold"
                }}
              >
                Current
              </Button>
              <Button
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  fontWeight: "bold"
                }}
              >
                Propose
              </Button>
              <Button
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  fontWeight: "bold"
                }}
              >
                Demo
              </Button>
              <Button
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  fontWeight: "bold"
                }}
              >
                Team
              </Button>
            </ButtonToolbar>
          </div>
        </Navbar>
      </div>
    );
  }
}
