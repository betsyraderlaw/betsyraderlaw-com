import React, { FC } from "react";
import HomeHeader from "../components/HomeHeader";
import LandingSection from "../components/LandingSection";
import { graphql } from "gatsby";
import { Box } from "@chakra-ui/react";
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Contact from '../components/Contact';
import PracticeAreas from '../components/PracticeAreas';

type IndexProps = {
  data: any;
};

const Index: FC<IndexProps> = ({ data }) => {
  return (
    <Box>
      <SEO />
      <HomeHeader />
      <LandingSection
        key={data.sections.nodes[0].id}
        title={data.sections.nodes[0].title}
        overline={data.sections.nodes[0].overline}
        direction={data.sections.nodes[0].direction}
        backgroundColor={data.sections.nodes[0].backgroundColor}
        backgroundImage={data.sections.nodes[0].background.fluid}
        content={JSON.parse(data.sections.nodes[0].content.raw)}
      />
      <PracticeAreas />
      <Box>
        {data.sections.nodes
          .filter((section: any) => !section.primary)
          .map((section: any) => (
            <LandingSection
              key={section.id}
              title={section.title}
              overline={section.overline}
              direction={section.direction}
              backgroundColor={section.backgroundColor}
              backgroundImage={section.background.fluid}
              content={JSON.parse(section.content.raw)}
            />
          ))}
      </Box>
      <Contact />
      <Footer />
    </Box>
  );
};

export const pageQuery = graphql`
  query LandingPage {
    sections: allContentfulLandingSection(
      sort: { fields: primary, order: DESC }
    ) {
      nodes {
        id
        title
        overline
        primary
        content {
          raw
        }
        direction
        backgroundColor
        background {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

export default Index;
