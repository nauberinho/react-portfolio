import React from "react";
import PropTypes from "react-proptypes";
import styled from "styled-components";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

import SectionContainer from "../../shared/components/SectionContainer";
import Avatar from "@material-ui/core/Avatar";
import image from "../../static/images/me.png";
import theme from "../../shared/theme";
import mediaQueries from "../../shared/media-queries";

const Content = styled.div`
  @media ${mediaQueries.laptop("min")} {
    display: flex;
    padding: 0 5rem;
  }
  @media ${mediaQueries.tablet("min")} {
    display: flex;
    padding: 0 2rem;
  }
  @media ${mediaQueries.laptop("max")} {
    padding: 0rem 1rem;
  }
`;

const Text = styled.div`
  flex: 2;
  line-height: 1.4rem;
  color: ${theme.colors.black.main};
`;

const Image = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const StyledAvatar = styled(Avatar)`
  && {
    margin-top: auto;
    margin-bottom: auto;
    width: 12rem;
    height: 12rem;
  }
`;

const StyledQuoteIcon = styled(FormatQuoteIcon)`
  color: ${theme.colors.yellow.main};
`;

const Dot = styled.span`
  font-size: 4rem;
  color: ${theme.colors.yellow.main};
`;
const About = () => {
  return (
    <SectionContainer>
      <Content>
        <Text>
          <StyledQuoteIcon />
          ajfnsdnfjksd nfjksdnfjksafskldmfklsdmfklsdmfklmsdklfm
          ajfnsdnfjksdnfjksdnfjksafskl dmfk lsdmfkls fklmsdklfm ajfnsdnf
          jksdnfjksdnfjksafskldmfklsdmfklsdm fklmsdklfm ajfnsdnfjksdnfjksd
          fjksafskldmfklsdmfkl sdmfklmsdklfm ajfnsdnfjk dnfjksd nf
          jksafskldmfklsdmfklsdmfklmsdklfm ajfns dnf jksdnfjksdnfjks afskldmfkls
          dmfklsdmfklmsdklfm ajfnsdnfjksdnfjksdnfjksafskldmfklsdmfklsdm
          fklmsdklfm ajfnsdnfjksdnfjksdnfjksafskldmfklsdmfklsdmfklmsdklfm
          <StyledQuoteIcon />
        </Text>
        <Image>
          <StyledAvatar alt="Me" src={image} />
        </Image>
      </Content>
    </SectionContainer>
  );
};

export default About;
