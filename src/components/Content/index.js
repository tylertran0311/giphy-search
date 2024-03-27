import { GiphyFetch } from "@giphy/js-fetch-api";

import React, { useState } from "react";

import { useGlobalContext } from "../../context/globalContext";
import { useTheme } from "../../context/themeContext";
import { search, trendingIcon } from "../../icons/icons";
import { timeTrim } from "../../utils/timeTrim";
import Modal from "../Modal";
import { API_KEY, SELECTED_GIF_INIT_TEMPLATE } from "./constant";
import { ContentContainer, GridStyled } from "./styled";

const Content = ({ size }) => {
  const theme = useTheme();
  const { searchTerm } = useGlobalContext();
  const [selectedGif, setSelectedGif] = useState(SELECTED_GIF_INIT_TEMPLATE);
  const [modal, setModal] = useState(false);

  // Use @giphy/js-fetch-api to fetch gifs, instantiate with api key
  const gf = new GiphyFetch(API_KEY);

  // Gifs search callback (if no search keyword then search for trendings Gifs)
  const fetchGifs =
    searchTerm.length > 0
      ? (offset) => gf.search(searchTerm, { offset, limit: 30 })
      : (offset) => gf.trending({ offset, limit: 30 });

  // Handle GIF selecting by open pop up modal
  const handleSelectGif = (gif) => {
    setSelectedGif({
      title: gif.title,
      giff: gif.images.fixed_width.url,
      embed_url: gif.embed_url,
      import_datetime: timeTrim(gif.import_datetime),
      username: gif.username,
      rating: gif.rating && gif.rating.toUpperCase(),
      size: gif.images.original,
    });
    setModal(true);
  };

  return (
    <ContentContainer theme={theme}>
      {searchTerm.length > 0 ? (
        <h2>{search} Search Result</h2>
      ) : (
        <h2>{trendingIcon} Trending</h2>
      )}
      {modal && (
        <Modal selectedGif={selectedGif} setModal={setModal} size={size} />
      )}
      <GridStyled
        theme={theme}
        width={size.width * 0.96}
        columns={size.width < 992 ? 3 : 4}
        fetchGifs={fetchGifs}
        noLink={true}
        onGifClick={(gif) => handleSelectGif(gif)}
        key={searchTerm}
        noResultsMessage={`No search result for keyword "${searchTerm}"`}
      />
    </ContentContainer>
  );
};

export default Content;
