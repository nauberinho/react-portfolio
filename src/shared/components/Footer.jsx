import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../shared/theme";
import mediaQueries from "../../shared/media-queries";
import { FaBitbucket, FaGithub, FaLinkedin } from "react-icons/fa";

const Content = styled.div`
  font-size: 1.25rem;
  display: flex;
  @media ${mediaQueries.laptopL("min")} {
    padding: 5rem 3rem;
  }
  @media ${mediaQueries.laptopL("max")} {
    padding: 3rem 3rem;
  }
  @media ${mediaQueries.laptop("max")} {
    padding: 2rem 1rem;
  }
  @media ${mediaQueries.tablet("max")} {
    padding: 2rem; 1rem;
    background: none;
    display: block;
  }
  overflow: hidden;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  @media ${mediaQueries.tablet("max")} {
    display: flex;
  }
`;

const CompanyInfo = styled.div`
  padding: 1rem;
  div {
    text-align: left;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  margin: 1rem auto;
  justify-content: flex-end;
  @media ${mediaQueries.tablet("min")} {
    flex: 1;
  }
`;

const SocialMediaText = styled.div`
  margin-right: 1rem;
  display: inline-block;
  padding-bottom: 0.2rem;
  text-decoration: none;
`;

const GitHub = styled.div`
  display: flex;
  margin: 1rem auto;
  line-height: 1.4rem;
  @media ${mediaQueries.tablet("min")} {
    flex: 1;
  }
`;
const BitBucket = styled.div`
  display: flex;
  margin: 1rem auto;
  @media ${mediaQueries.tablet("min")} {
    flex: 1;
  }
`;

const Email = styled.div`
  padding: 1rem;
  div {
    text-align: center;
  }
`;

const StyledLink = styled.a`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  color: ${theme.colors.yellow.main};
  transition: 0.2s ease;
  :hover {
    color: ${theme.colors.black.main};
  }
  font-weight: bold;
`;
const Footer = () => {
  return (
    <Content>
      <FooterSection>
        <CompanyInfo>
          <div>© 2019, Nauber Tech AB</div>
          <div>559220-4068</div>
          <div>Innehar F-skattsedel</div>
        </CompanyInfo>
      </FooterSection>
      <FooterSection>
        <Email>
          <div>niklas.nauber@hotmail.com</div>
        </Email>
      </FooterSection>
      <FooterSection>
        <SocialMedia>
          <StyledLink
            target="_blank"
            href="https://www.linkedin.com/in/niklasnauber/"
          >
            <SocialMediaText>LinkedIn</SocialMediaText>
            <FaLinkedin />
          </StyledLink>
        </SocialMedia>
        <SocialMedia>
          <StyledLink target="_blank" href="https://github.com/nauberinho">
            <SocialMediaText>GitHub</SocialMediaText>
            <FaGithub />
          </StyledLink>
        </SocialMedia>
        <SocialMedia>
          <StyledLink
            target="_blank"
            href="https://bitbucket.org/%7Bfaa82650-b4ed-47a2-b3fd-866872697bde%7D/"
          >
            <SocialMediaText>BitBucket</SocialMediaText>
            <FaBitbucket />
          </StyledLink>
        </SocialMedia>
      </FooterSection>
    </Content>
  );
};

export default Footer;
