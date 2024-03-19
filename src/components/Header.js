import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/globalContext";
import { useTheme } from "../context/themeContext";
import GiphyIcon from "../icons/GiphyIcon";
import { search } from "../icons/icons";

function Header() {
  const theme = useTheme();
  const { getSearch, getTrending } = useGlobalContext();
  const [query, setQuery] = useState("");

  // Handle submit by click on Search button or Enter pressed
  const handleSubmit = (e) => {
    e.preventDefault();
    query !== "" ? getSearch(query) : getTrending();
  };

  // Handle search text change
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <HeaderStyled theme={theme}>
      <div className="logo">
        <span>Powered by</span>
        <GiphyIcon />
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-control">
          <input
            type="text"
            placeholder="Search for GIFs"
            onChange={handleChange}
          />
          <button className="submit-btn">{search}</button>
        </div>
      </form>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  padding: 2rem;
  background-color: ${(props) => props.theme.colorBg2};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    span {
      text-transform: uppercase;
      color: ${(props) => props.theme.colorGrey};
      font-size: 0.8rem;
    }
  }

  form {
    width: 100%;

    .input-control {
      position: relative;
      width: 100%;

      input {
        position: relative;
        z-index: 10;
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        padding: 1rem 2rem;
        outline: none;
        border: none;
        border-radius: 15px;
      }

      .submit-btn {
        position: absolute;
        top: 50%;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(-50%);
        border: none;
        outline: none;
        color: ${(props) => props.theme.colorWhite};
        font-size: 1.2rem;
        font-weight: 600;
        z-index: 100;
        height: 100%;
        padding: 0 1rem;
        border-radius: 15px;
        cursor: pointer;
        background: linear-gradient(
          to right,
          ${(props) => props.theme.colorPurple},
          ${(props) => props.theme.colorSalmon}
        );
        background-size: 400% 400%;
        animation: gradient 3s ease-in-out infinite;

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        i {
          font-size: 1.8rem;
          color: white;
        }
      }
    }
  }
`;

export default Header;
