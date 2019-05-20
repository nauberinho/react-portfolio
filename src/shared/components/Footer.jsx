import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../shared/theme";
import mediaQueries from "../../shared/media-queries";

const Content = styled.div`
  display: flex;
  padding: 5rem 1rem;
  overflow: hidden;
  flex-wrap: wrap;
`;

const LinkedIn = styled.div`
  display: flex;
  @media ${mediaQueries.tablet("min")} {
    flex: 1;
  }
  @media ${mediaQueries.tablet("max")} {
    width: 50%;
  }
`;
const GitHub = styled.div`
  display: flex;
  line-height: 1.4rem;
  @media ${mediaQueries.tablet("min")} {
    flex: 1;
  }
  @media ${mediaQueries.tablet("max")} {
    width: 50%;
  }
`;
const BitBucket = styled.div`
  display: flex;
  @media ${mediaQueries.tablet("min")} {
    flex: 1;
  }
  @media ${mediaQueries.tablet("max")} {
    width: 50%;
  }
`;

const Contact = styled.div`
  display: flex;

  justify-content: flex-end;
  @media ${mediaQueries.tablet("min")} {
    flex: 1;
  }
  @media ${mediaQueries.tablet("max")} {
    width: 50%;
  }
`;

const StyledLink = styled(Link)`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  color: ${theme.colors.yellow.main};
  font-weight: bold;
`;
const Footer = () => {
  return (
    <Content>
      <LinkedIn><StyledLink to="https://www.linkedin.com/in/niklasnauber/">LinkedIn</StyledLink></LinkedIn>
      <GitHub>
        <StyledLink to="https://github.com/nauberinho">GitHub</StyledLink>
      </GitHub>
      <BitBucket>
        <StyledLink target="_blank" to="https://github.com/nauberinho">
          BitBucket
        </StyledLink>
      </BitBucket>
      <Contact>niklas.nauber@hotmail.com</Contact>
    </Content>
  );
};

export default Footer;
