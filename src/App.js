import { useWindowSize } from "@uidotdev/usehooks";
import styled from "styled-components";
import Content from "./components/Content";
import Header from "./components/Header";
import { useTheme } from "./context/themeContext";
import ScrollToTopBtn from "./components/ScrollToTopBtn";

function App() {
  const theme = useTheme();
  // Get real-time window size for responsive design
  const size = useWindowSize();

  return (
    <AppStyled theme={theme}>
      <Header size={size} />
      <ScrollToTopBtn />
      <Content size={size} />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colorBg1};
  position: relative;
`;

export default App;
