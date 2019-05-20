import React from "react";
import PropTypes from "react-proptypes";
import styled from "styled-components";
import StarFilledIcon from "@material-ui/icons/Star";
import StarEmptyIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import theme from "../../../shared/theme";

const AreaContainer = styled.div`
  padding: 2rem 0 0 0;
`;

const AreaTitle = styled.div`
  color: ${theme.colors.black.main};
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.5rem 0;
`;

const Technique = styled.div`
  display: flex;
`;

const TechniqueTitle = styled.div`
  padding: 0.2rem 0;
  flex: 1;
`;

const TechniqueRating = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  color: ${theme.colors.yellow.main};
`;

const Area = ({ title, techniques }) => (
  <AreaContainer>
    <AreaTitle>{title}</AreaTitle>
    {techniques.map((t, key) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        console.log(i - t.rating);
        if (i <= t.rating && !(i - t.rating) !== -0.5) {
          console.log(i, "filled");
          stars.push(<StarFilledIcon />);
        } else if (i - t.rating === 0.5) {
          console.log(i, "half");
          stars.push(<StarHalfIcon />);
        } else {
          console.log(i, "empty");
          stars.push(<StarEmptyIcon />);
        }
      }
      return (
        <Technique>
          <TechniqueTitle>{t.title}</TechniqueTitle>
          <TechniqueRating>{stars}</TechniqueRating>
        </Technique>
      );
    })}
  </AreaContainer>
);

export default Area;
