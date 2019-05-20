import React from "react";
import PropTypes from "react-proptypes";
import styled from "styled-components";
import mediaQueries from "../media-queries";
import { fadeIn } from "../keyframes";

const Container = styled.div`
  @media ${mediaQueries.laptop("min")} {
    padding: 10rem 3rem;
  }
  @media ${mediaQueries.laptop("max")} {
    padding: 5rem 1rem;
  }
  @media ${mediaQueries.tablet("max")} {
    padding: 3rem 1rem;
  }
  @media ${mediaQueries.mobileM("max")} {
    padding: 1rem 1rem;
  }
  overflow: hidden;
  word-wrap: break-word;
  animation: ${fadeIn} 0.5s ease;
  background: white;
`;

const SectionContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SectionContainer;
