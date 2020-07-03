import React from "react";
import styled from "styled-components";
import SectionContainer from "../../shared/components/SectionContainer";
import Area from "./components/Area";
import mediaQueries from "../../shared/media-queries";
import theme from "../../shared/theme";

// Data
import { techniques } from "../../static/data";

const Content = styled.div`
  @media ${mediaQueries.laptop("min")} {
    padding: 0 5rem;
  }
  @media ${mediaQueries.tablet("min")} {
    padding: 2rem 0;
  }
  @media ${mediaQueries.laptop("max")} {
    padding: 0;
  }
  margin: auto;
`;

const Title = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  color: ${theme.colors.black.main};
`;

const Introduction = styled.div`
  padding: 1rem 0;
  font-size: 1.3rem;
`;

const Skills = () => {
  return (
    <SectionContainer>
      <Content>
        <Title>Knowledge</Title>
        <Introduction>
          An overview of which techniques I know and how well I know them.
        </Introduction>
        <Area title="Front End" techniques={techniques.frontEnd} />
        <Area title="Back End" techniques={techniques.backEnd} />
        <Area title="Tools" techniques={techniques.tools} />
        <Area title="Libraries I use" techniques={techniques.libraries} />
      </Content>
    </SectionContainer>
  );
};

export default Skills;
