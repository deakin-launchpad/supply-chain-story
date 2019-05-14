import React from "react";
import { Navbar, ButtonToolbar } from "react-bootstrap";
import { ScrollingProvider, Section, SectionLink } from "react-scroll-section";
import IntroSection from "./components/IntroSection";
import HomeSection from "./components/HomeSection";
import CurrentSection from "./components/CurrentSection";
import ProposeSection from "./components/ProposeSection";
import DemoSection from "./components/DemoSection";
import TeamSection from "./components/TeamSection";
import NavItem from "./components/NavItem";
import title from "./images/logo-title.png";

//Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStroopwafel,
  faAngleDoubleDown
} from "@fortawesome/free-solid-svg-icons";

library.add(faStroopwafel, faAngleDoubleDown);

function App() {
  return (
    <ScrollingProvider>
      <Navbar
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.3)"
        }}
        fixed="top"
      >
        <div className="container">
          <SectionLink section="intro">
            {link => (
              <Navbar.Brand
                href
                onClick={link.onClick}
                selected={link.isSelected}
              >
                <img
                  src={title}
                  width="140"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            )}
          </SectionLink>

          <ButtonToolbar>
            <NavItem section="history">History</NavItem>
            <NavItem section="current">Current</NavItem>
            <NavItem section="propose">Propose</NavItem>
            <NavItem section="demo">Demo</NavItem>
            <NavItem section="team">Team</NavItem>
          </ButtonToolbar>
        </div>
      </Navbar>
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
        <Section id="intro">
          <IntroSection />
        </Section>
      </div>
      <Section id="history">
        <HomeSection />
      </Section>
      <Section id="current">
        <CurrentSection />
      </Section>
      <Section id="propose">
        <ProposeSection />
      </Section>
      <Section id="demo">
        <DemoSection />
      </Section>
      <Section id="team">
        <TeamSection />
      </Section>
    </ScrollingProvider>
  );
}

export default App;
