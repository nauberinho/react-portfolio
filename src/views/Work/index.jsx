import React, { useState } from "react";
import PropTypes from "react-proptypes";
import styled from "styled-components";
import _ from 'lodash';

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SectionContainer from "../../shared/components/SectionContainer";
import Icon from '../../shared/components/Icon'

// Data
import { projects } from "../../static/data";

// Theme
import theme from "../../shared/theme";
import mediaQueries from "../../shared/media-queries";

const Content = styled.div`
  @media ${mediaQueries.laptop("min")} {
    width: 70%;
  }
  @media ${mediaQueries.laptop("max")} {
    width: 90%;
  }
  margin: auto;
`;

const Title = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
`

const Introduction = styled.div`
  padding: 1rem 0 3rem;
  font-size: 1.3rem;
`

const StyledExpansionPanel = styled(ExpansionPanel)`
  // && {
  //   box-shadow: none;
  //   background-color: none!important;
  //  &:before {
  //   display: none;
  //   }
  // }
  

  // &:before { background-color: none!important;}
`

const StyledExpansionSummary = styled(ExpansionPanelSummary)`
  // && {
  //   padding: 1rem 0;
  //   font-weight: 600;
  //   display: flex;
  // }
`

const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
  // && {
  //   padding: 0rem 0 0;
  // }
`

const ItemTitle = styled.div`
  font-size: 1.2rem;
  flex: 1;
  font-weight: 600;
  transition: 0.2s ease;
  display: flex;
  ${({ isActive }) => isActive && `color: ${theme.colors.yellow.main};`};
  span {
    display: inline-block;
    margin: auto 0;
  }
`;

const ItemSummary = styled.div`
 flex: 1;
  font-size: 1rem;
  font-weight: 100;
  transition: 0.2s ease;
  display: flex;
  align-content: flex-start;
`;

const IconWrapper = styled.div`
  display: inline-block;
  margin-right: 1rem;
`



const Work = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = panel => (event, expanded) => {
    setExpanded(expanded ? panel : false);
  };
  return (
    <SectionContainer>
      <Content>
        <Title> Projects</Title>
        <Introduction>An overview of projects I've developed.</Introduction>
        {projects.map((p, key) => {
          const isActive = expanded === p.title;
          return (
            <StyledExpansionPanel expanded={isActive} onChange={handleChange(p.title)}>
              <StyledExpansionSummary expandIcon={<ExpandMoreIcon />}>
                <ItemTitle isActive={isActive}><span>{p.title}</span></ItemTitle>
                <ItemSummary>{_.get(p, 'techniques', []).map(tech => <IconWrapper><Icon icon={tech} fontSize="4rem" /></IconWrapper>)} </ItemSummary>
              </StyledExpansionSummary>
              <StyledExpansionPanelDetails>{p.description}</StyledExpansionPanelDetails>
            </StyledExpansionPanel>
          );
        })}
      </Content>
    </SectionContainer >
  );
};

export default Work;
