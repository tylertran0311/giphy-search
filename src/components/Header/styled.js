import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding: 2rem;
  background-color: ${(props) => props.theme.colorBg2};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  span {
    text-transform: uppercase;
    color: ${(props) => props.theme.colorGrey};
    font-size: 0.8rem;
  }
`;

export const SearchBarContainer = styled.form`
  width: 100%;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputStyled = styled.input`
  position: relative;
  z-index: 10;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  padding: 1rem 2rem;
  outline: none;
  border: none;
  border-radius: 0.9375rem;
`;

export const SubmitBtn = styled.button`
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
  border-radius: 0.9375rem;
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
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;

  span {
    color: ${(props) => props.theme.colorWhite};
    font-weight: 600;
  }
`;

export const Switch = styled.div`
  position: relative;
  width: 4.375rem;
  height: 2.1875rem;
  background: #b3b3b3;
  border-radius: 2rem;
  padding: 0.25rem;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 2.1875rem;
    top: 50%;
    left: 0.25rem;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: green;

    &:before {
      transform: translate(2rem, -50%);
    }
  }
`;
