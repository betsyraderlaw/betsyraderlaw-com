import React, { FC } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { css } from "@emotion/react";
import {
  Box,
  Flex,
  FlexProps,
  Heading,
  HeadingProps,
  HStack,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  IconButton,
  VStack,
  Button,
} from "@chakra-ui/react";
import { ChevronUpIcon, HamburgerIcon } from "@chakra-ui/icons";

export type NavbarLinkProps = HeadingProps & {
  to: string;
};

export const NavbarLink: FC<NavbarLinkProps> = ({ children, to, ...props }) => (
  <Heading
    as={Link}
    to={to}
    fontSize="lg"
    fontWeight="medium"
    height="8"
    flexShrink={0}
    css={css`
      &[aria-current="page"] {
        &:after {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          margin-top: 0.25rem;
          background-color: var(--chakra-colors-primary);
          border-radius: 10px;
        }
      }
    `}
    {...props}
  >
    {children}
  </Heading>
);

export type NavbarProps = FlexProps;

const Navbar: FC<NavbarProps> = ({ children, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const data = useStaticQuery(graphql`
    query Navbar {
      textLogo: contentfulAsset(file: { fileName: { eq: "logo-text.svg" } }) {
        file {
          url
        }
      }
      squareLogo: contentfulAsset(
        file: { fileName: { eq: "logo-square.svg" } }
      ) {
        file {
          url
        }
      }
    }
  `);
  return (
    <>
      <Flex
        as="nav"
        height="6rem"
        alignItems="center"
        justifyContent="center"
        px={{ xl: "10rem", base: "2rem" }}
        {...props}
      >
        <Flex flex={1} maxWidth="64rem">
          <Box as={Link} to="/" mr="4rem" flexShrink={0}>
            <Box
              display={{ lg: "block", base: "none" }}
              as="img"
              height="4rem"
              width="20rem"
              src={data.textLogo.file.url}
              alt="Betsy Rader Law LLC"
            />
            <Box
              display={{ lg: "none", base: "block" }}
              as="img"
              height="4rem"
              width="4rem"
              src={data.squareLogo.file.url}
              alt="Betsy Rader Law LLC"
            />
          </Box>
          <HStack spacing="3rem" ml="auto">
            <NavbarLink to="/" display={{ md: "block", base: "none" }}>
              Home
            </NavbarLink>
            <NavbarLink to="/about" display={{ md: "block", base: "none" }}>
              About
            </NavbarLink>
            <NavbarLink
              to="/consulting"
              display={{ md: "block", base: "none" }}
            >
              Consulting
            </NavbarLink>
            <NavbarLink to="/training" display={{ md: "block", base: "none" }}>
              Training
            </NavbarLink>
            <NavbarLink to="#contact" display={{ md: "block", base: "none" }}>
              Contact
            </NavbarLink>
          </HStack>
          <IconButton
            ml="auto"
            size="lg"
            variant="ghost"
            aria-label="Open Menu"
            display={{ md: "none", base: "block" }}
            icon={<HamburgerIcon fontSize="3xl" color="primary" />}
            onClick={onOpen}
          />
        </Flex>
      </Flex>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <VStack p="2rem" spacing="3rem" pb="1rem">
            <Box as={Link} to="/">
              <Box as="img" height="4rem" src={data.textLogo.file.url} />
            </Box>
            <VStack spacing="2rem">
              <NavbarLink to="/">Home</NavbarLink>
              <NavbarLink to="/about">About</NavbarLink>
              <NavbarLink to="/consulting">Consulting</NavbarLink>
              <NavbarLink to="/training">Training</NavbarLink>
              <NavbarLink to="#contact">Contact</NavbarLink>
            </VStack>
            <Button
              variant="ghost"
              color="primary"
              size="lg"
              leftIcon={<ChevronUpIcon />}
              onClick={onClose}
            >
              Close
            </Button>
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
