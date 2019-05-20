import React, { useState } from "react";
import PropTypes from "react-proptypes";
import styled from "styled-components";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SectionContainer from "../../shared/components/SectionContainer";

// Data
import { projects } from "../../static/data";
import theme from "../../shared/theme";

const ItemTitle = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  transition: 0.2s ease;
  ${({ isActive }) => isActive && `color: ${theme.colors.yellow.main};`};
`;

const Work = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = panel => (event, expanded) => {
    setExpanded(expanded ? panel : false);
  };
  return (
    <SectionContainer>
      {projects.map((p, key) => {
        const isActive = expanded === p.title;
        return (
          <ExpansionPanel expanded={isActive} onChange={handleChange(p.title)}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <ItemTitle isActive={isActive}>{p.title}</ItemTitle>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>{p.description}</ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </SectionContainer>
  );
};

export default Work;
