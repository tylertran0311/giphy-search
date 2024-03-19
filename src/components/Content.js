import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";
import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/globalContext";
import { useTheme } from "../context/themeContext";
import { search, trendingIcon } from "../icons/icons";
import Modal from "./Modal";
import { timeTrim } from "../utils/timeTrim";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Content({ size }) {
  const theme = useTheme();
  const { searchTerm } = useGlobalContext();
  const [selectedGif, setSelectedGif] = useState({
    title: "",
    giff: "",
    embed_url: "",
    import_datetime: "",
    username: "",
    rating: "",
    size: "",
  });
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
    console.log(gif);
    setSelectedGif({
      title: gif.title,
      giff: gif.images.original.url,
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
      {modal && <Modal selectedGif={selectedGif} setModal={setModal} />}
      <GridStyled
        theme={theme}
        width={size.width * 0.96}
        columns={4}
        fetchGifs={fetchGifs}
        noLink={true}
        onGifClick={(gif) => handleSelectGif(gif)}
        key={searchTerm}
        noResultsMessage={`No search result for keyword "${searchTerm}"`}
      />
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
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

const GridStyled = styled(Grid)`
  color: ${(props) => props.theme.colorWhite};
  text-align: center;
`;

export default Content;
