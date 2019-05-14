import React from "react";
import { SectionLink } from "react-scroll-section";
import Button from "react-bootstrap/Button";

const NavItem = ({ section, children }) => (
  <SectionLink section={section}>
    {link => (
      <Button
        variant="light"
        onClick={link.onClick}
        selected={link.isSelected}
        style={{
          backgroundColor: link.isSelected ? "gray" : "transparent",
          borderColor: link.isSelected ? "gray" : "transparent",
          fontWeight: "bold",
          borderRadius: 0,
          height: "30px",
          paddingTop: 0,
          color: "white",
          paddingBottom: 0
        }}
      >
        {children}
      </Button>
    )}
  </SectionLink>
);

export default NavItem;
