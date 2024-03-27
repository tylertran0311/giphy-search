import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: ${(props) => (props.size.width < 992 ? "100vw" : "30%")};
  max-width: 100vw;
  height: ${(props) => props.size.width < 992 && "100vh"};
  transform: translate(-50%, -50%);
  z-index: 13;
  border-radius: 0.9375rem;
  background: ${(props) => props.theme.colorBg1};
`;
export const ModalStyled = styled.div``;

export const ModalContentContainer = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.size.width < 992 ? "column" : "row")};
  gap: 2rem;
`;

export const ModalImg = styled.img`
  border-radius: 0.3125rem;
  border: 1px solid ${(props) => props.theme.colorBlue2};
  min-height: 15.75rem;
`;

export const ModalTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title {
    font-size: 1.6rem;
    text-align: center;
    font-weight: 800;
    border-bottom: 1px solid ${(props) => props.theme.colorBlue2};
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colorSalmon},
      ${(props) => props.theme.colorBlue2},
      ${(props) => props.theme.colorGreen}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400% 400%;
    animation: gradient 5s ease-in-out infinite;
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
  }
  .desc {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${(props) => props.theme.colorWhite};
    span {
      color: ${(props) => props.theme.colorBlue2};
    }
  }
`;

export const ShareUrlContainer = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${(props) => props.theme.colorBlue2};
  &:hover {
    transform: scale(1.1);
  }
  a {
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    text-decoration: none;
    display: grid;
    grid-template-columns: 2.5rem 1fr;
    align-items: center;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 12;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
`;
