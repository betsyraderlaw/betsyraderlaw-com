import React, { FC } from "react";
import HomeHeader from "../components/HomeHeader";
import { Box } from "@chakra-ui/react";
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Contact from '../components/Contact';
import PracticeAreas from '../components/PracticeAreas';
import Badges from '../components/Badges';
import Navbar from '../components/Navbar';

const ContactPage: FC = () => {
  return (
    <Box>
      <SEO />
      <Navbar />
      <Badges />
      <Contact />
      <Footer />
    </Box>
  );
};

export default ContactPage;
