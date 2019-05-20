import React from "react";
import PropTypes from "react-proptypes";

import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";

import mediaQueries from "../media-queries";
import theme from "../theme";
const Container = styled.div`
  @media ${mediaQueries.tablet("min")} {
    display: flex;
    padding: 2rem 3rem;
  }
  @media ${mediaQueries.tablet("max")} {
    padding: 0.5rem 1rem;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  font-weight: bold;
  font-size: 1.4rem;
  @media ${mediaQueries.tablet("max")} {
    text-align: center;
  }
`;

const LogoYellowSpan = styled.span`
  color: ${theme.colors.yellow.main};
`;

const LogoBlackSpan = styled.span`
  color: ${theme.colors.black.main};
`;

const MenuWrapper = styled.div`
  display: flex;
  flex: 1;
  @media ${mediaQueries.tablet("min")} {
    justify-content: flex-end;
  }
  @media ${mediaQueries.tablet("max")} {
    padding: 2rem 0 0;
  }
  font-family: "Fira Sans", "Droid Sans", "Helvetica Neue",
 sans-serif;
`;

const StyledLink = styled(Link)`
  && {
    display: inline-block;
    margin-left: 1rem;
    @media ${mediaQueries.tablet("max")} {
      margin: auto;
    }
  }
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  color: gray;
  font-size: 1.2rem;
  font-weight: bold;
  background: none;
  margin: auto;

  transition: 0.2s ease;
  @media ${mediaQueries.tablet("min")} {
    text-align: right;
    width: 4rem;
  }

  padding: 0.25rem 0 0.25rem;
  ${({ isActive }) => isActive && `color: ${theme.colors.yellow.main};`};
`;

const Menu = props => {
  const path = props.location.pathname.replace("/", "");
  return (
    <Container>
      <LogoWrapper>
        <LogoYellowSpan>Niklas&nbsp; </LogoYellowSpan>{" "}
        <LogoBlackSpan>Nauber&nbsp; </LogoBlackSpan>
      </LogoWrapper>
      <MenuWrapper>
        <StyledLink to="about">
          <StyledButton isActive={path === "about"}>Om</StyledButton>
        </StyledLink>
        <StyledLink to="work">
          <StyledButton isActive={path === "work"}>Work</StyledButton>
        </StyledLink>
        <StyledLink to="knowledge">
          <StyledButton isActive={path === "knowledge"}>Knowledge</StyledButton>
        </StyledLink>
      </MenuWrapper>
    </Container>
  );
};

export default withRouter(Menu);
