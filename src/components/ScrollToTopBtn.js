import styled from "styled-components";
import { useTheme } from "../context/themeContext";
import { upIcon } from "../icons/icons";
import { scrollToTop } from "../utils/scrollToTop";

const ScrollToTopBtn = () => {
  const theme = useTheme();
  return (
    <ScrollToTopBtnStyle theme={theme} onClick={scrollToTop}>
      {upIcon(theme)}
    </ScrollToTopBtnStyle>
  );
};

const ScrollToTopBtnStyle = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  position: fixed;
  right: 2.5rem;
  top: 90%;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${(props) => props.theme.colorWhite};
  border-radius: 50%;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export default ScrollToTopBtn;
