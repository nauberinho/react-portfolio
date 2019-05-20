import React, { useState } from "react";
import PropTypes from "react-proptypes";
import styled from "styled-components";
import _ from 'lodash';

import { Link } from 'react-router-dom';

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
  font-weight: 500;
`

const Introduction = styled.div`
  padding: 1rem 0 3rem;
  font-size: 1.3rem;
`

const StyledExpansionPanel = styled(ExpansionPanel)`
  && {
    background-color: none!important;
   &:before {
    display: none;
    }
  }
  

  &:before { background-color: none!important;}
`

const StyledExpansionSummary = styled(ExpansionPanelSummary)`
  && {
    font-weight: 500;
    @media ${mediaQueries.tablet("min")} {
      display: flex;
    }
  }
`

const TitleAndTechniques = styled.div`
flex: 1;
display: flex;
  @media ${mediaQueries.tablet("max")} {
   flex-direction: column;
  }
`

const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
display: flex;
@media ${mediaQueries.tablet("max")} {
  flex-direction: column;
 }
`

const StyledExpansionPanelDescription = styled.div`
width: 50%;
@media ${mediaQueries.tablet("max")} {
  width: 100%;
  padding: 0 0 1rem;
 }
`

const StyledExpansionPanelSpecs = styled.div`
width: 50%;
@media ${mediaQueries.tablet("max")} {
  width: 100%;
 }
`

const SpecsTitle = styled.span`
font-weight: 500;
`

const SpecsArea = styled.div`
padding: 0rem 0 2rem;
`

const ItemTitle = styled.div`
  font-size: 1.2rem;
  flex: 1;
  @media ${mediaQueries.tablet("max")} {
    width: 100%;
  }
  font-weight: 400;
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
  @media ${mediaQueries.tablet("max")} {
    width: 100%;
    padding: 1rem 0 0;
  }
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

const StyledLink = styled(Link)`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  color: ${theme.colors.yellow.main};
  font-weight: bold;
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
                <TitleAndTechniques>
                  <ItemTitle isActive={isActive}><span>{p.title}</span></ItemTitle>
                  <ItemSummary>{_.get(p, 'techniques', []).map(tech => <IconWrapper><Icon icon={tech} fontSize="3rem" /></IconWrapper>)} </ItemSummary>
                </TitleAndTechniques>
              </StyledExpansionSummary>
              <StyledExpansionPanelDetails>
                <StyledExpansionPanelDescription>{p.description}</StyledExpansionPanelDescription>
                <StyledExpansionPanelSpecs>
                  <SpecsArea><SpecsTitle>Tech stack: </SpecsTitle> {p.techniques.join(', ')}</SpecsArea>
                  {p.link &&
                    <SpecsArea><StyledLink to={p.link}>Go to repository</StyledLink></SpecsArea>}
                  {p.website &&
                    <SpecsArea><StyledLink to={p.website}>Go to website</StyledLink></SpecsArea>}

                </StyledExpansionPanelSpecs>
              </StyledExpansionPanelDetails>
            </StyledExpansionPanel>
          );
        })}
      </Content>
    </SectionContainer >
  );
};

export default Work;
