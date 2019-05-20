import React from "react";
import PropTypes from "react-proptypes";
import styled from "styled-components";
import SectionContainer from "../../shared/components/SectionContainer";
import StarFilledIcon from "@material-ui/icons/Star";
import StarEmptyIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import theme from "../../shared/theme";
import Area from "./components/Area";
import mediaQueries from "../../shared/media-queries";

// Data
import { techniques } from "../../static/data";

const Content = styled.div`
  @media ${mediaQueries.laptop("min")} {
    width: 50%;
  }
  @media ${mediaQueries.laptop("max")} {
    width: 90%;
  }
  margin: auto;
`;

const Skills = () => {
  return (
    <SectionContainer>
      <Content>
        <Area title="Front End" techniques={techniques.frontEnd} />
        <Area title="Back End" techniques={techniques.backEnd} />
        <Area title="Tools" techniques={techniques.tools} />
      </Content>
    </SectionContainer>
  );
};

export default Skills;
