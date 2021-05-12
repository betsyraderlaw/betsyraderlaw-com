import { Box } from "@chakra-ui/layout";
import React, { FC } from "react";
import Navbar, { NavbarLink } from "./Navbar";

const Layout: FC = ({ children }) => (
  <Box>
    <Navbar>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/about">About</NavbarLink>
      <NavbarLink to="/practice-areas">Practice Areas</NavbarLink>
      <NavbarLink to="/consulting">Consulting</NavbarLink>
      <NavbarLink to="/publications">Publications</NavbarLink>
      <NavbarLink to="/contact">Contact</NavbarLink>
    </Navbar>
    <Box>{children}</Box>
  </Box>
);

export default Layout;
