import React from "react";
import PropTypes from "react-proptypes";
import styled from "styled-components";
import { DiMozilla, DiReact, DiGithubBadge, DiJavascript1, DiNodejs } from 'react-icons/di';
import { FaVuejs } from 'react-icons/fa';
import GraphQL from '../../icons/Graphql';
import Firebase from '../../icons/Firebase';
import mediaQueries from "../media-queries";
import theme from "../theme";



const colourizeIcon = (icon, color, fontSize) => {
  return styled(icon)`
    && {
      color: ${ () => color && theme.colors[color].main}
    }
    font-size: ${() => fontSize && fontSize};
  `
}

const Icon = ({ icon, fontSize }) => {
  let Icon = <DiMozilla />
  switch (icon) {
    case 'bitbucket':
      Icon = colourizeIcon(DiMozilla, 'red', fontSize);
      return <Icon />;
    case 'react':
      Icon = colourizeIcon(DiReact, 'red', fontSize);
      return <Icon />;
    case 'github':
      Icon = colourizeIcon(DiGithubBadge, 'red', fontSize);
      return <Icon />;
    case 'javascript':
      Icon = colourizeIcon(DiJavascript1, 'blue', fontSize);
      return <Icon />;
    case 'node.js':
      Icon = colourizeIcon(DiNodejs, 'green', fontSize);
      return <Icon />;
    case 'graphql':
      Icon = colourizeIcon(GraphQL, 'blue', fontSize);
      return <Icon />
    case 'vue':
      Icon = colourizeIcon(FaVuejs, 'green', fontSize);
      return <Icon />
    case 'firebase':
      Icon = colourizeIcon(Firebase, 'orange', fontSize);
      return <Icon />
    default:
      Icon = colourizeIcon(DiMozilla, 'red', fontSize);
      return <Icon />;
  }
};

export default Icon;
