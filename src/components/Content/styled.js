import styled from "styled-components";
import { Grid } from "@giphy/react-components";

export const ContentContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.colorWhite};
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const GridStyled = styled(Grid)`
  color: ${(props) => props.theme.colorWhite};
  text-align: center;
`;
