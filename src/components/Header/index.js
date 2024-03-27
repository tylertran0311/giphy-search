import React, { useRef } from "react";

import { useGlobalContext } from "../../context/globalContext";
import { useTheme } from "../../context/themeContext";
import GiphyIcon from "../../icons/GiphyIcon";
import { throttle } from "../../utils/throttle";
import ToggleSwitch from "./ToggleSwitch";
import {
  HeaderStyled,
  InputContainer,
  InputStyled,
  LogoContainer,
  SearchBarContainer,
} from "./styled";

const Header = () => {
  const theme = useTheme();
  const { getSearch, getTrending } = useGlobalContext();
  const inputRef = useRef(null);

  // Handle submit by click on Search button or Enter pressed
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value, "inputRef.current.value");
    inputRef.current.value !== ""
      ? getSearch(inputRef.current.value)
      : getTrending();
  };

  // Handle search 1 second after user finished typing
  const handleChangeThrottle = () => {
    throttle(
      inputRef.current.value !== ""
        ? getSearch(inputRef.current.value)
        : getTrending(),
      1000
    );
  };

  return (
    <HeaderStyled theme={theme}>
      <LogoContainer theme={theme}>
        <span>Powered by</span>
        <GiphyIcon />
        <ToggleSwitch />
      </LogoContainer>
      <SearchBarContainer action="" onSubmit={handleSubmit}>
        <InputContainer>
          <InputStyled
            type="text"
            placeholder="Search for GIFs"
            onChange={handleChangeThrottle}
            ref={inputRef}
          />
          {/* <SubmitBtn theme={theme}>{search}</SubmitBtn> */}
        </InputContainer>
      </SearchBarContainer>
    </HeaderStyled>
  );
};

export default Header;
