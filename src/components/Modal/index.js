import React from "react";

import { useTheme } from "../../context/themeContext";
import { closeIcon } from "../../icons/icons";
import { copyLinkClipBoard } from "../../utils/copyLinkClipBoard";
import {
  IconContainer,
  ModalContainer,
  ModalContentContainer,
  ModalImg,
  ModalStyled,
  ModalTextContainer,
  Overlay,
  ShareUrlContainer,
} from "./styled";

const Modal = ({ setModal, selectedGif, size }) => {
  const theme = useTheme();

  return (
    <ModalStyled theme={theme}>
      <ModalContainer theme={theme} size={size}>
        <ModalContentContainer size={size}>
          <IconContainer onClick={() => setModal(false)}>
            {closeIcon(theme)}
          </IconContainer>
          <ModalImg
            src={selectedGif.giff}
            alt=""
            loading="lazy"
            theme={theme}
          />
          <ModalTextContainer theme={theme}>
            <div className="title">{selectedGif.title}</div>
            <div>
              <div className="desc">
                <span>Uploaded: </span>
                {selectedGif.import_datetime}
              </div>
              <div className="desc">
                <span>By: </span>
                {selectedGif.username || "Unknown"}
              </div>
              <div className="desc">
                <span>Rating: </span>
                {selectedGif.rating || "Unknown"}
              </div>
              <div className="desc">
                <span>Size: </span>
                {`${selectedGif.size.width} x ${selectedGif.size.height}` ||
                  "Unknown"}
              </div>
            </div>
            <div>
              <ShareUrlContainer theme={theme}>
                <i className="fa-solid fa-code"></i>
                <span onClick={() => copyLinkClipBoard(selectedGif.embed_url)}>
                  Copy Embed URL
                </span>
              </ShareUrlContainer>
              <ShareUrlContainer theme={theme}>
                <i className="fa-solid fa-code"></i>
                <span onClick={() => copyLinkClipBoard(selectedGif.giff)}>
                  Copy URL
                </span>
              </ShareUrlContainer>
            </div>
          </ModalTextContainer>
        </ModalContentContainer>
      </ModalContainer>
      <Overlay onClick={() => setModal(false)}></Overlay>
    </ModalStyled>
  );
};

export default Modal;
